import { expect, test, type Page } from "@playwright/test"

// Legal pages render a mobile and a desktop version of the same content
// (BexoPageShell). Each check runs against the version that is visible
// at the given viewport.
const layouts = [
  {
    name: "desktop",
    viewport: { width: 1440, height: 900 },
    scope: ".bexo-canvas-wrap",
  },
  {
    name: "mobile",
    viewport: { width: 390, height: 844 },
    scope: ".bexo-mobile",
  },
]

const trackingSections = [
  "Hosting",
  "Google Tag Manager",
  "Google Analytics 4",
  "Google Ads: Conversion-Tracking und Remarketing",
  "Calendly (Terminbuchung)",
  "HubSpot (Kundenverwaltung)",
]

const removedSections = [
  "Bestellformular",
  "Bewerbungsformular",
  "Buchungsanfrage-Formular",
  "Callback-Service",
  "Live-Chat-Funktion",
  "Formular zur Newsletter-Anmeldung",
]

const keptSections = ["Kontaktformular(e)", "Terminbuchungsformular"]

const allCookies = [
  "__vdpl",
  "i18n_redirected",
  "legally_cbconsent",
  "_ga",
  "_ga_5XRHHZKTTY",
  "_gcl_au",
  "IDE",
]

async function expectCookieTable(page: Page, scope: string) {
  const cookieNames = page.locator(
    `${scope} table td[data-header="Cookie-Name"]`,
  )
  await expect(cookieNames).toHaveCount(allCookies.length)
  await expect(cookieNames).toHaveText(allCookies)
}

for (const layout of layouts) {
  test.describe(`Legal pages (${layout.name})`, () => {
    test.use({ viewport: layout.viewport })

    test("Datenschutz lists the services and cookies in use", async ({
      page,
    }) => {
      await page.goto("/datenschutz")
      const content = page.locator(layout.scope)

      await expect(
        content.getByRole("heading", {
          level: 1,
          name: "Datenschutzerklärung",
        }),
      ).toBeVisible()

      for (const name of [...trackingSections, ...keptSections]) {
        await expect(
          content.getByRole("heading", { name, exact: true }),
        ).toBeVisible()
      }

      for (const name of removedSections) {
        await expect(
          page.getByRole("heading", { name, exact: true }),
        ).toHaveCount(0)
      }

      await expectCookieTable(page, layout.scope)
      await expect(content.getByText("Stand: November 2026")).toBeVisible()
    })

    test("Datenschutz links to the cookie settings page", async ({ page }) => {
      await page.goto("/datenschutz")
      await page
        .locator(`${layout.scope} a[href="/cookie-einstellungen"]`)
        .filter({ hasText: "hier" })
        .click()
      await expect(page).toHaveURL(/\/cookie-einstellungen$/)
    })

    test("Cookie-Einstellungen shows the same cookie table", async ({
      page,
    }) => {
      await page.goto("/cookie-einstellungen")
      await expectCookieTable(page, layout.scope)
    })
  })
}
