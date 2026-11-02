import { expect, test } from "@playwright/test"

// One set of business details (NAP) everywhere: legal name as registered in
// Zefix, one address, one phone number. Checks the raw HTML so both the
// mobile and the desktop markup are covered.
const LEGAL_NAME = "Bexolutions Marketing und Vertrieb AG"
const PHONE_E164 = "+41628972244"

const retired = [
  "044 771 37 77",
  "+41447713777",
  "078 331 37 77",
  "0783313777",
  "043 331 37 77",
  "Martketing",
  "Marketing & Vertrieb AG",
  "Marketing &amp; Vertrieb AG",
  "Aguascalientes",
  "San Cayetano",
  "Badung",
  "Pratama",
]

const pages = [
  "/",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/ueber-uns",
  "/leistungen",
  "/cookie-einstellungen",
]

test.describe("Business details (NAP)", () => {
  for (const path of pages) {
    test(`${path} uses only the current business details`, async ({ page }) => {
      await page.goto(path)
      const html = await page.content()
      for (const value of retired) {
        expect(html, `"${value}" on ${path}`).not.toContain(value)
      }
    })
  }

  test("schema has the legal name, phone and Hunzenschwil address", async ({
    page,
  }) => {
    await page.goto("/")
    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
    const org = blocks
      .map((b) => JSON.parse(b))
      .flatMap((d) => d["@graph"] ?? [d])
      .find((n) => n["@type"] === "Organization")
    expect(org?.name).toBe(LEGAL_NAME)
    expect(org?.telephone).toBe(PHONE_E164)
    expect(org?.address?.streetAddress).toBe("Fabrikweg 1a")
    expect(org?.address?.postalCode).toBe("5502")
    expect(org?.address?.addressLocality).toBe("Hunzenschwil")
  })

  test("footer and contact page show the phone number", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/kontakt")
    await expect(
      page.locator(".bexo-mobile").getByText("+41 62 897 22 44"),
    ).toBeVisible()
    await expect(
      page.locator(`.bexo-mobile a[href="tel:${PHONE_E164}"]`),
    ).toHaveText("062 897 22 44")

    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto("/kontakt")
    await expect(
      page.locator(".bexo-canvas-wrap").getByText("+41 62 897 22 44"),
    ).toBeVisible()
  })

  test("Impressum shows legal name and phone number", async ({ page }) => {
    await page.goto("/impressum")
    const html = await page.content()
    expect(html).toContain(LEGAL_NAME)
    expect(html).toContain("Tel.: 062 897 22 44")
  })

  test("contact page lists only the Swiss office", async ({ page }) => {
    await page.goto("/kontakt")
    const html = await page.content()
    expect(html).toContain("Schweiz — Hauptsitz")
    expect(html).not.toContain("Mexiko")
    expect(html).not.toContain("Indonesien")
  })

  test("Über uns mentions the remote team without foreign addresses", async ({
    page,
  }) => {
    await page.goto("/ueber-uns")
    const html = await page.content()
    expect(html).toContain("arbeitet remote aus Mexiko und Bali")
    expect(html).toContain("Remote-Team")
  })

  test("llms.txt uses the legal name", async ({ request }) => {
    const body = await (await request.get("/llms.txt")).text()
    expect(body).toContain(`# ${LEGAL_NAME}`)
  })
})
