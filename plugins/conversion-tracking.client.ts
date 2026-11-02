import { defineNuxtPlugin } from "#app"
import { captureAttribution, getAttribution } from "~/utils/attribution"
import { pushEvent } from "~/utils/tracking"

// Conversion events for GTM/GA4 (task TRK-3). Event names are the contract
// with the GTM container: generate_lead (KontaktForm.vue), calendly_open,
// calendly_booked, click_tel, click_email. Never push names, email addresses
// or phone numbers into the dataLayer.

const CALENDLY_HOST = "calendly.com"
const CALENDLY_ORIGIN = "https://calendly.com"
const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js"
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css"
const WIDGET_TIMEOUT_MS = 4000

type ICalendly = NonNullable<Window["Calendly"]>

function ctaLocation(el: Element): string {
  if (el.closest("header")) return "header"
  if (el.closest("footer")) return "footer"
  return "content"
}

let widgetPromise: Promise<ICalendly> | null = null

function loadCalendlyWidget(): Promise<ICalendly> {
  if (window.Calendly) return Promise.resolve(window.Calendly)
  if (widgetPromise) return widgetPromise

  widgetPromise = new Promise<ICalendly>((resolve, reject) => {
    const css = document.createElement("link")
    css.rel = "stylesheet"
    css.href = WIDGET_CSS
    document.head.appendChild(css)

    const script = document.createElement("script")
    script.src = WIDGET_JS
    script.async = true
    const timer = window.setTimeout(
      () => reject(new Error("Calendly widget timeout")),
      WIDGET_TIMEOUT_MS,
    )
    script.onload = () => {
      window.clearTimeout(timer)
      if (window.Calendly) resolve(window.Calendly)
      else reject(new Error("Calendly widget missing"))
    }
    script.onerror = () => {
      window.clearTimeout(timer)
      reject(new Error("Calendly widget failed to load"))
    }
    document.head.appendChild(script)
  }).catch((error) => {
    widgetPromise = null
    throw error
  })
  return widgetPromise
}

async function openCalendly(url: string) {
  const a = getAttribution()
  try {
    const calendly = await loadCalendlyWidget()
    calendly.initPopupWidget({
      url,
      utm: {
        utmSource: a.utm_source,
        utmMedium: a.utm_medium,
        utmCampaign: a.utm_campaign,
        utmContent: a.utm_content,
        utmTerm: a.utm_term,
      },
    })
  } catch {
    // Widget blocked or offline: fall back to the plain booking page.
    window.location.href = url
  }
}

function onClick(e: MouseEvent) {
  const target = e.target as Element | null
  const link = target?.closest?.("a[href]") as HTMLAnchorElement | null
  if (!link) return
  const href = link.getAttribute("href") || ""

  if (href.startsWith("tel:")) {
    pushEvent("click_tel", { link_location: ctaLocation(link) })
    return
  }
  if (href.startsWith("mailto:")) {
    pushEvent("click_email", { link_location: ctaLocation(link) })
    return
  }

  let url: URL
  try {
    url = new URL(link.href)
  } catch {
    return
  }
  if (url.hostname !== CALENDLY_HOST) return

  pushEvent("calendly_open", { link_location: ctaLocation(link) })

  // Keep the browser's behaviour for "open in new tab" clicks.
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return
  if (e.shiftKey || e.altKey) return
  e.preventDefault()
  void openCalendly(url.href)
}

function onMessage(e: MessageEvent) {
  if (e.origin !== CALENDLY_ORIGIN) return
  const data = e.data as { event?: string } | null
  if (data?.event === "calendly.event_scheduled") {
    pushEvent("calendly_booked")
  }
}

export default defineNuxtPlugin(() => {
  captureAttribution()
  document.addEventListener("click", onClick)
  window.addEventListener("message", onMessage)
})
