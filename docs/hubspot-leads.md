# Contact form → HubSpot

Every successful request through the contact form (`/kontakt`) is also saved
in HubSpot (account 149195467), after the office email has gone out.

Code: `server/utils/hubspotLead.ts`, called from
`server/api/forms/kontakt.post.ts`. Tests: `tests/e2e/hubspot-lead.spec.ts`.

## What is created

| HubSpot record | Details                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact        | Found by email address. New person: created with lifecycle stage "Lead". Known person: name, phone and company are updated (empty form fields never erase data); the lifecycle stage is not changed.                                      |
| Deal           | "Website-Anfrage: {Thema} – {Firma oder Name}", pipeline "Sales Pipeline", stage "Neue Anfrage", Kanal "Website-Formular", UTM Quelle / Medium / Kampagne from the visit source, owner = `HUBSPOT_OWNER_ID`. Associated with the contact. |
| Note           | The message, topic, salutation, landing page, external referrer and all UTM values. Attached to the contact and the deal.                                                                                                                 |

Every request creates a new deal, also for known contacts: each request is a
new sales opportunity.

## Failure behaviour

The office email is sent first and is what the visitor's "success" depends
on. If HubSpot is not configured, slow (8 s timeout per call) or returns an
error, the visitor still sees success, the office still gets the email, and
the server log shows `HubSpot sync failed: <step> <status> <category>` (no
personal data).

## Setup (once, in HubSpot and Vercel)

1. HubSpot → Settings → Integrations → Private Apps (in newer accounts:
   Development → Legacy apps) → Create a private app named
   "bexolutions.ch Kontaktformular".
2. Scopes: `crm.objects.contacts.read`, `crm.objects.contacts.write`,
   `crm.objects.deals.read`, `crm.objects.deals.write`. Nothing else.
3. Create the app and copy the access token. Do not paste it into chat, code
   or tickets.
4. Vercel → project → Settings → Environment Variables (Production and
   Preview):
   - `HUBSPOT_ACCESS_TOKEN` = the token (mark as sensitive)
   - `HUBSPOT_OWNER_ID` = `98000692` (Balaram Furrer)
5. Redeploy. Without `HUBSPOT_ACCESS_TOKEN` the sync is off and the form works
   as before.

## Test after deploy

Send one request on the live form with the email address
`test+hubspot@bexolutions.ch` and the link
`/kontakt?utm_source=test&utm_medium=test&utm_campaign=hubspot-check`.
In HubSpot, check: contact (Lead), deal in "Neue Anfrage" with Kanal and UTM
values, note with the message. Then delete the test deal and contact.

## Contract with HubSpot

These HubSpot names are used in code; renaming them in HubSpot breaks the
sync: pipeline `default`, stage ID `6345736426` ("Neue Anfrage"), deal
properties `bexo_kanal` (value `website_formular`), `bexo_utm_source`,
`bexo_utm_medium`, `bexo_utm_campaign`.
