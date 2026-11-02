# Tracking plan — bexolutions.ch

GTM container `GTM-TL9Q8JMX` → GA4 property "bexolutions.ch" (`G-5XRHHZKTTY`).
Consent: the Legally ok banner sets Google consent mode; the GTM tag
"Consent – restore legally choice" restores a stored choice on every page.

## Rules

- No personal data in the dataLayer or GA4: no names, email addresses, phone
  numbers, company names or message text.
- Every event carries `page_path`. Event names below are the contract between
  the website code and GTM; renaming one breaks the GA4 reports.
- Code: `plugins/conversion-tracking.client.ts`, `utils/tracking.ts`,
  `utils/attribution.ts`, `components/bexo/KontaktForm.vue`.

## Events

| dataLayer `event` | Fires when                                                            | Params                                                                                       | GA4 key event |
| ----------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------- |
| `generate_lead`   | Contact form API returned success (not on click)                      | `form_id` (`kontakt`), `form_topic` (`sichtbarkeitsanalyse`, `seo`, `webseite`, `allgemein`) | yes           |
| `calendly_open`   | Click on any Calendly link ("Termin vereinbaren")                     | `link_location` (`header`, `footer`, `content`)                                              | no            |
| `calendly_booked` | Calendly popup reports a scheduled event (`calendly.event_scheduled`) | –                                                                                            | yes           |
| `click_tel`       | Click on a `tel:` link                                                | `link_location`                                                                              | yes           |
| `click_email`     | Click on a `mailto:` link                                             | `link_location`                                                                              | no            |
| `PageView`        | Every route change (existing, `middleware/020-gtm.global.ts`)         | `page`, `page_title`, `referrer`                                                             | no            |

## Calendly

Calendly links open the Calendly popup on the page. The widget script loads
only on the first click (`assets.calendly.com`). If it cannot load within 4 s,
the visitor is sent to the normal Calendly page. Stored UTM values are passed
to Calendly. Ctrl/Cmd/middle clicks keep the browser's "new tab" behaviour.

## Visit source (attribution)

On the first page of a browser session the site stores `utm_source`,
`utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, the landing page and
an external referrer in `sessionStorage` (`bexo_attribution`, no cookie). A
new landing with UTM parameters replaces it. The contact form sends these
values with the request, and the office email shows them under
"Herkunft der Anfrage". They are not sent to GA4.

## GTM setup

One trigger and one tag forward all conversion events:

- Variables (Data Layer Variable, version 2): `DLV - page_path` (`page_path`),
  `DLV - link_location` (`link_location`), `DLV - form_id` (`form_id`),
  `DLV - form_topic` (`form_topic`).
- Trigger `CE - conversions`: Custom Event, event name
  `^(generate_lead|calendly_open|calendly_booked|click_tel|click_email)$`,
  "Use regex matching" on, all custom events.
- Tag `GA4 Event - conversions`: Google Analytics: GA4 Event, measurement ID
  `G-5XRHHZKTTY`, event name `{{Event}}`, event parameters `page_path`,
  `link_location`, `form_id`, `form_topic` from the variables above. Consent:
  no additional consent required (built-in consent checks apply). Trigger
  `CE - conversions`.

GA4 key events: `generate_lead`, `calendly_booked`, `click_tel`
(Admin → Events → mark as key event, or Admin → Key events → New key event).
