// eslint-disable-next-line @typescript-eslint/naming-convention
interface Window {
  dataLayer: any
  gtag: any
  /** Calendly popup widget, loaded on demand by plugins/conversion-tracking.client.ts */
  Calendly?: {
    initPopupWidget: (options: {
      url: string
      utm?: Record<string, string | undefined>
    }) => void
  }
}
