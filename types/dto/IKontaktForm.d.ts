export interface IKontaktForm {
  salutation: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  topic: string
  message: string
  /** Visit source (UTM, landing page, external referrer); optional. */
  attribution?: Record<string, string>
}
