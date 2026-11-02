import { createError, defineEventHandler, readBody } from "h3"
import type { H3Event } from "h3"
import { useRuntimeConfig } from "#imports"
import { syncLeadToHubspot } from "~/server/utils/hubspotLead"
import {
  buildKontaktEmailHtml,
  cleanAttribution,
} from "~/server/utils/kontaktEmail"
import { sendFormEmail } from "~/server/utils/sendEmail"
import type { IKontaktForm } from "~/types/dto/IKontaktForm"

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Partial<IKontaktForm>
  validateKontaktForm(body)

  const form = {
    ...(body as IKontaktForm),
    attribution: cleanAttribution(body.attribution),
  }

  await sendFormEmail(event, {
    subject: `Kontaktanfrage: ${form.topic} — ${form.firstName} ${form.lastName}`,
    html: buildKontaktEmailHtml(form),
    replyTo: form.email,
  })

  await sendToHubspot(event, form)
  await saveContact(form)

  return { ok: true }
})

async function sendToHubspot(event: H3Event, form: IKontaktForm) {
  const config = useRuntimeConfig(event)
  if (!config.hubspotAccessToken) return

  try {
    await syncLeadToHubspot(form, {
      token: config.hubspotAccessToken,
      ownerId: config.hubspotOwnerId || undefined,
    })
  } catch (error) {
    // The office email already went out; the CRM entry is best-effort.
    console.error(
      "HubSpot sync failed:",
      error instanceof Error ? error.message : "unknown error",
    )
  }
}

function validateKontaktForm(body: Partial<IKontaktForm>) {
  if (
    !body.firstName?.trim() ||
    !body.lastName?.trim() ||
    !body.email?.trim()
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Vorname, Nachname und E-Mail sind erforderlich",
    })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    throw createError({
      statusCode: 400,
      statusMessage: "Ungültige E-Mail-Adresse",
    })
  }

  if (!body.message?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: "Nachricht ist erforderlich",
    })
  }
}

async function saveContact(form: IKontaktForm) {
  if (
    !import.meta.env.ORBITYPE_API_SQL_URL ||
    !import.meta.env.ORBITYPE_API_SQL_KEY
  ) {
    return
  }

  const bindings = {
    first_name: form.firstName.trim(),
    last_name: form.lastName.trim(),
    email: form.email.trim(),
    phone: form.phone.trim() || "",
  }

  const sql =
    "INSERT INTO contacts (first_name, last_name, email, phone)" +
    " VALUES (:first_name, :last_name, :email, :phone) RETURNING *"

  try {
    await $fetch(import.meta.env.ORBITYPE_API_SQL_URL, {
      method: "POST",
      headers: { "X-API-KEY": import.meta.env.ORBITYPE_API_SQL_KEY },
      body: { sql, bindings },
    })
  } catch {
    // Email was sent; DB persistence is best-effort.
  }
}
