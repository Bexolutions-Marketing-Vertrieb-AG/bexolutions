import { expect, test } from "@playwright/test"
import {
  NEW_REQUEST_STAGE,
  buildNoteBody,
  syncLeadToHubspot,
  type FetchFn,
} from "~/server/utils/hubspotLead"
import type { IKontaktForm } from "~/types/dto/IKontaktForm"

// Contact form → HubSpot (ADS-1). Runs against a fake HubSpot API; no
// browser and no network.

type Call = { method: string; path: string; body: any }

function fakeHubspot(existingContactId?: string) {
  const calls: Call[] = []
  const fetchFn: FetchFn = async (url, init) => {
    const path = url.replace("https://api.hubapi.com", "")
    const body = init.body ? JSON.parse(String(init.body)) : undefined
    calls.push({ method: String(init.method), path, body })
    expect((init.headers as Record<string, string>).Authorization).toBe(
      "Bearer test-token",
    )

    let data: unknown = {}
    if (path.endsWith("/contacts/search")) {
      data = { results: existingContactId ? [{ id: existingContactId }] : [] }
    } else if (path === "/crm/v3/objects/contacts") data = { id: "101" }
    else if (path === "/crm/v3/objects/deals") data = { id: "202" }
    else if (path === "/crm/v3/objects/notes") data = { id: "303" }
    else if (path.startsWith("/crm/v3/objects/contacts/")) {
      data = { id: existingContactId }
    }
    return new Response(JSON.stringify(data), { status: 200 })
  }
  return { calls, fetchFn }
}

const form: IKontaktForm = {
  salutation: "Frau",
  firstName: " Anna ",
  lastName: "Muster",
  email: "Anna.Muster@Example.ch",
  phone: "079 000 00 00",
  company: "Muster AG",
  topic: "SEO & Online Marketing",
  message: "Bitte um Rückruf.\n<b>Danke</b>",
  attribution: {
    utm_source: "linkedin",
    utm_medium: "social",
    utm_campaign: "teardown",
    landing_page: "/kontakt",
  },
}

test.describe("HubSpot lead sync", () => {
  test("new person: contact as lead, deal in Neue Anfrage, note on both", async () => {
    const { calls, fetchFn } = fakeHubspot()
    const result = await syncLeadToHubspot(form, {
      token: "test-token",
      ownerId: "98000692",
      fetchFn,
      now: new Date("2026-11-02T10:00:00Z"),
    })

    expect(result).toEqual({
      contactId: "101",
      dealId: "202",
      noteId: "303",
      contactCreated: true,
    })
    expect(calls.map((c) => `${c.method} ${c.path}`)).toEqual([
      "POST /crm/v3/objects/contacts/search",
      "POST /crm/v3/objects/contacts",
      "POST /crm/v3/objects/deals",
      "POST /crm/v3/objects/notes",
    ])

    expect(calls[1].body.properties).toEqual({
      email: "anna.muster@example.ch",
      firstname: "Anna",
      lastname: "Muster",
      phone: "079 000 00 00",
      company: "Muster AG",
      lifecyclestage: "lead",
    })

    const deal = calls[2].body
    expect(deal.properties).toEqual({
      dealname: "Website-Anfrage: SEO & Online Marketing – Muster AG",
      pipeline: "default",
      dealstage: NEW_REQUEST_STAGE,
      bexo_kanal: "website_formular",
      bexo_utm_source: "linkedin",
      bexo_utm_medium: "social",
      bexo_utm_campaign: "teardown",
      hubspot_owner_id: "98000692",
    })
    expect(deal.associations[0].to.id).toBe("101")

    const note = calls[3].body
    expect(note.properties.hs_timestamp).toBe("2026-11-02T10:00:00.000Z")
    expect(note.associations.map((a: any) => a.to.id)).toEqual(["101", "202"])
  })

  test("known person: contact is updated, lifecycle stage untouched", async () => {
    const { calls, fetchFn } = fakeHubspot("555")
    const result = await syncLeadToHubspot(
      { ...form, phone: "", company: "" },
      { token: "test-token", fetchFn },
    )

    expect(result.contactCreated).toBe(false)
    expect(result.contactId).toBe("555")
    const update = calls[1]
    expect(update.method).toBe("PATCH")
    expect(update.path).toBe("/crm/v3/objects/contacts/555")
    expect(update.body.properties.lifecyclestage).toBeUndefined()
    // Empty fields never overwrite what is already in HubSpot.
    expect(update.body.properties.phone).toBeUndefined()
    expect(update.body.properties.company).toBeUndefined()
    // Without a company the deal is named after the person; no owner set.
    expect(calls[2].body.properties.dealname).toBe(
      "Website-Anfrage: SEO & Online Marketing – Anna Muster",
    )
    expect(calls[2].body.properties.hubspot_owner_id).toBeUndefined()
  })

  test("note keeps the message readable and escapes HTML", () => {
    const html = buildNoteBody(form)
    expect(html).toContain("Bitte um Rückruf.<br>&lt;b&gt;Danke&lt;/b&gt;")
    expect(html).toContain("<strong>Einstiegsseite:</strong> /kontakt")
    expect(html).not.toContain("<b>Danke</b>")
  })

  test("HubSpot errors are reported without personal data", async () => {
    const fetchFn: FetchFn = async () =>
      new Response(
        JSON.stringify({
          category: "VALIDATION_ERROR",
          message: "Property values were not valid: anna.muster@example.ch",
        }),
        { status: 400 },
      )
    const error = await syncLeadToHubspot(form, {
      token: "test-token",
      fetchFn,
    }).catch((e: Error) => e)
    expect(error).toBeInstanceOf(Error)
    expect((error as Error).message).toBe(
      "HubSpot contact search failed: 400 VALIDATION_ERROR",
    )
    expect((error as Error).message).not.toContain("example.ch")
  })
})
