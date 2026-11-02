import type { IKontaktForm } from "~/types/dto/IKontaktForm"
import { escapeHtml } from "~/server/utils/escapeHtml"

function row(label: string, value: string) {
  if (!value.trim()) return ""
  return `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`
}

const ATTRIBUTION_LABELS: Record<string, string> = {
  utm_source: "Quelle (utm_source)",
  utm_medium: "Medium (utm_medium)",
  utm_campaign: "Kampagne (utm_campaign)",
  utm_content: "Inhalt (utm_content)",
  utm_term: "Suchbegriff (utm_term)",
  landing_page: "Einstiegsseite",
  referrer: "Verweisende Website",
}

/** Keeps only known attribution keys with short string values. */
export function cleanAttribution(input: unknown): Record<string, string> {
  if (!input || typeof input !== "object") return {}
  const out: Record<string, string> = {}
  for (const key of Object.keys(ATTRIBUTION_LABELS)) {
    const value = (input as Record<string, unknown>)[key]
    if (typeof value === "string" && value.trim()) {
      out[key] = value.trim().slice(0, 200)
    }
  }
  return out
}

function attributionRows(attribution: Record<string, string> | undefined) {
  const clean = cleanAttribution(attribution)
  const rows = Object.keys(ATTRIBUTION_LABELS)
    .map((key) => row(ATTRIBUTION_LABELS[key], clean[key] ?? ""))
    .filter(Boolean)
  if (!rows.length) {
    return row("Herkunft", "Direkt oder unbekannt (keine Kampagnen-Parameter)")
  }
  return rows.join("")
}

export function buildKontaktEmailHtml(form: IKontaktForm) {
  const rows = [
    row("Ansprache", form.salutation),
    row("Vorname", form.firstName),
    row("Nachname", form.lastName),
    row("E-Mail", form.email),
    row("Telefon", form.phone),
    row("Unternehmen", form.company),
    row("Thema", form.topic),
    row("Nachricht", form.message),
  ]
    .filter(Boolean)
    .join("")

  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#0e2138"><h2 style="margin:0 0 16px">Neue Kontaktanfrage</h2><table style="border-collapse:collapse;width:100%;max-width:640px">${rows}</table><h3 style="margin:24px 0 8px">Herkunft der Anfrage</h3><table style="border-collapse:collapse;width:100%;max-width:640px">${attributionRows(form.attribution)}</table></body></html>`
}
