// Where a visitor came from, kept for the browser session only
// (sessionStorage, no cookie). Sent with form submissions so every lead
// shows its channel. Never contains personal data.

export interface IAttribution {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  landing_page?: string
  referrer?: string
}

const STORAGE_KEY = "bexo_attribution"
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const

function read(): IAttribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as IAttribution) : null
  } catch {
    return null
  }
}

function write(value: IAttribution) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // Storage blocked (private mode): attribution is best-effort.
  }
}

function externalReferrer(): string | undefined {
  if (!document.referrer) return undefined
  try {
    const ref = new URL(document.referrer)
    if (ref.host === window.location.host) return undefined
    return `${ref.protocol}//${ref.host}${ref.pathname}`
  } catch {
    return undefined
  }
}

/**
 * Stores the source of the visit on the first page of a session. A later
 * landing with UTM parameters (new campaign click) replaces it.
 */
export function captureAttribution(url: URL = new URL(window.location.href)) {
  const params = url.searchParams
  const hasUtm = UTM_KEYS.some((k) => params.get(k))
  if (read() && !hasUtm) return

  const value: IAttribution = { landing_page: url.pathname }
  for (const key of UTM_KEYS) {
    const v = params.get(key)
    if (v) value[key] = v.slice(0, 100)
  }
  const ref = externalReferrer()
  if (ref) value.referrer = ref
  write(value)
}

export function getAttribution(): IAttribution {
  return read() ?? {}
}
