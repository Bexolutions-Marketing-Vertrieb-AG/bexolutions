// Pushes a conversion event to the GTM dataLayer. Event names are the
// contract with the GTM container (see docs/tracking-plan.md). Never pass
// names, email addresses, phone numbers or message text as params.
export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ...params,
  })
}
