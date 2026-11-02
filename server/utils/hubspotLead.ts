import type { IKontaktForm } from "~/types/dto/IKontaktForm"

// Sends a website contact request to HubSpot (task ADS-1): the person as a
// contact, the request as a deal in "Neue Anfrage", and the message as a note
// on both. Contact data goes only to HubSpot, never to GA4.
// Setup and field mapping: docs/hubspot-leads.md

const API = "https://api.hubapi.com"
const REQUEST_TIMEOUT_MS = 8000

/** Stage "Neue Anfrage" in the default deal pipeline ("Sales Pipeline"). */
export const NEW_REQUEST_STAGE = "6345736426"

// HubSpot-defined association types.
const DEAL_TO_CONTACT = 3
const NOTE_TO_CONTACT = 202
const NOTE_TO_DEAL = 214

export type FetchFn = (url: string, init: RequestInit) => Promise<Response>

export interface IHubspotOptions {
  token: string
  ownerId?: string
  fetchFn?: FetchFn
  now?: Date
}

export interface IHubspotResult {
  contactId: string
  dealId: string
  noteId: string
  contactCreated: boolean
}

function clean(value: string | undefined, max = 200) {
  return (value ?? "").trim().slice(0, max)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/** Contact fields; empty values are left out so they never erase CRM data. */
export function buildContactProperties(form: IKontaktForm) {
  const props: Record<string, string> = {
    email: clean(form.email).toLowerCase(),
    firstname: clean(form.firstName, 100),
    lastname: clean(form.lastName, 100),
  }
  const phone = clean(form.phone, 50)
  if (phone) props.phone = phone
  const company = clean(form.company)
  if (company) props.company = company
  return props
}

export function buildDealProperties(form: IKontaktForm, ownerId?: string) {
  const who =
    clean(form.company) || `${clean(form.firstName)} ${clean(form.lastName)}`
  const a = form.attribution ?? {}
  const props: Record<string, string> = {
    dealname: `Website-Anfrage: ${clean(form.topic, 80) || "Allgemein"} – ${who}`,
    pipeline: "default",
    dealstage: NEW_REQUEST_STAGE,
    bexo_kanal: "website_formular",
  }
  if (a.utm_source) props.bexo_utm_source = clean(a.utm_source, 100)
  if (a.utm_medium) props.bexo_utm_medium = clean(a.utm_medium, 100)
  if (a.utm_campaign) props.bexo_utm_campaign = clean(a.utm_campaign, 100)
  if (ownerId) props.hubspot_owner_id = ownerId
  return props
}

export function buildNoteBody(form: IKontaktForm) {
  const a = form.attribution ?? {}
  const lines: [string, string][] = [
    ["Thema", clean(form.topic, 80)],
    ["Ansprache", clean(form.salutation, 30)],
    ["Telefon", clean(form.phone, 50)],
    ["Unternehmen", clean(form.company)],
    ["Einstiegsseite", clean(a.landing_page)],
    ["Verweisende Website", clean(a.referrer)],
    ["utm_source", clean(a.utm_source)],
    ["utm_medium", clean(a.utm_medium)],
    ["utm_campaign", clean(a.utm_campaign)],
    ["utm_content", clean(a.utm_content)],
    ["utm_term", clean(a.utm_term)],
  ]
  const details = lines
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<li><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v)}</li>`,
    )
    .join("")
  const message = escapeHtml(clean(form.message, 5000)).replace(/\n/g, "<br>")
  return `<p><strong>Kontaktformular bexolutions.ch</strong></p><p>${message}</p><ul>${details}</ul>`
}

async function call(
  fetchFn: FetchFn,
  token: string,
  method: string,
  path: string,
  body?: unknown,
): Promise<{ status: number; data: Record<string, any> }> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    const res = await fetchFn(`${API}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    })
    const text = await res.text()
    const data = text ? JSON.parse(text) : {}
    return { status: res.status, data }
  } finally {
    clearTimeout(timer)
  }
}

function fail(step: string, status: number, data: Record<string, any>): never {
  // Category and status only: HubSpot error messages can echo personal data.
  throw new Error(
    `HubSpot ${step} failed: ${status} ${data?.category ?? ""}`.trim(),
  )
}

async function upsertContact(
  fetchFn: FetchFn,
  token: string,
  form: IKontaktForm,
) {
  const properties = buildContactProperties(form)

  const search = await call(
    fetchFn,
    token,
    "POST",
    "/crm/v3/objects/contacts/search",
    {
      filterGroups: [
        {
          filters: [
            { propertyName: "email", operator: "EQ", value: properties.email },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
    },
  )
  if (search.status >= 400) fail("contact search", search.status, search.data)
  const existingId: string | undefined = search.data.results?.[0]?.id

  if (existingId) {
    // Existing contact: update details, never touch the lifecycle stage
    // (HubSpot rejects moving a customer back to "lead").
    const res = await call(
      fetchFn,
      token,
      "PATCH",
      `/crm/v3/objects/contacts/${existingId}`,
      {
        properties,
      },
    )
    if (res.status >= 400) fail("contact update", res.status, res.data)
    return { id: existingId, created: false }
  }

  const res = await call(fetchFn, token, "POST", "/crm/v3/objects/contacts", {
    properties: { ...properties, lifecyclestage: "lead" },
  })
  if (res.status === 409) {
    // Created in the meantime (search index lag): HubSpot names the existing ID.
    const id = /Existing ID: (\d+)/.exec(String(res.data.message ?? ""))?.[1]
    if (id) return { id, created: false }
  }
  if (res.status >= 400) fail("contact create", res.status, res.data)
  return { id: String(res.data.id), created: true }
}

export async function syncLeadToHubspot(
  form: IKontaktForm,
  options: IHubspotOptions,
): Promise<IHubspotResult> {
  const fetchFn: FetchFn = options.fetchFn ?? ((url, init) => fetch(url, init))
  const { token } = options

  const contact = await upsertContact(fetchFn, token, form)

  const deal = await call(fetchFn, token, "POST", "/crm/v3/objects/deals", {
    properties: buildDealProperties(form, options.ownerId),
    associations: [
      {
        to: { id: contact.id },
        types: [
          {
            associationCategory: "HUBSPOT_DEFINED",
            associationTypeId: DEAL_TO_CONTACT,
          },
        ],
      },
    ],
  })
  if (deal.status >= 400) fail("deal create", deal.status, deal.data)
  const dealId = String(deal.data.id)

  const note = await call(fetchFn, token, "POST", "/crm/v3/objects/notes", {
    properties: {
      hs_timestamp: (options.now ?? new Date()).toISOString(),
      hs_note_body: buildNoteBody(form),
      ...(options.ownerId ? { hubspot_owner_id: options.ownerId } : {}),
    },
    associations: [
      {
        to: { id: contact.id },
        types: [
          {
            associationCategory: "HUBSPOT_DEFINED",
            associationTypeId: NOTE_TO_CONTACT,
          },
        ],
      },
      {
        to: { id: dealId },
        types: [
          {
            associationCategory: "HUBSPOT_DEFINED",
            associationTypeId: NOTE_TO_DEAL,
          },
        ],
      },
    ],
  })
  if (note.status >= 400) fail("note create", note.status, note.data)

  return {
    contactId: contact.id,
    dealId,
    noteId: String(note.data.id),
    contactCreated: contact.created,
  }
}
