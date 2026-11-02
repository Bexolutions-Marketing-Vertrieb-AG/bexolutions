import { expect, test, type Page } from "@playwright/test"

// Conversion tracking (TRK-3): dataLayer events, Calendly popup with
// fallback, visit source on the contact form, no personal data in the
// dataLayer. Calendly and the form API are stubbed; nothing leaves the test.

const CALENDLY_URL = "https://calendly.com/bexolutions/discovery-call"

async function events(page: Page, name: string) {
  return page.evaluate(
    (n) =>
      (
        (window as unknown as { dataLayer?: Record<string, unknown>[] })
          .dataLayer ?? []
      ).filter((e) => e && e.event === n),
    name,
  )
}

// The tracking plugin runs after hydration; it stores the visit source first.
async function ready(page: Page) {
  await page.waitForFunction(() =>
    window.sessionStorage.getItem("bexo_attribution"),
  )
}

async function stubCalendlyWidget(page: Page) {
  await page.route("https://assets.calendly.com/**", (route) => {
    if (route.request().url().endsWith(".css")) {
      return route.fulfill({ contentType: "text/css", body: "" })
    }
    return route.fulfill({
      contentType: "application/javascript",
      body: "window.Calendly={initPopupWidget:function(o){window.__calendly=o}}",
    })
  })
}

test.describe("Conversion tracking", () => {
  test.use({ viewport: { width: 1440, height: 900 } })

  test("Termin vereinbaren opens the Calendly popup with the visit's UTMs", async ({
    page,
  }) => {
    await stubCalendlyWidget(page)
    await page.goto("/?utm_source=brief&utm_medium=print&utm_campaign=wartung")
    await ready(page)
    await page
      .locator(`.bexo-canvas-wrap a[href="${CALENDLY_URL}"]`)
      .first()
      .click()

    await expect
      .poll(() => page.evaluate(() => (window as any).__calendly?.url))
      .toBe(CALENDLY_URL)
    const options = await page.evaluate(() => (window as any).__calendly)
    expect(options.utm).toMatchObject({
      utmSource: "brief",
      utmMedium: "print",
      utmCampaign: "wartung",
    })
    expect(page.url()).not.toContain("calendly.com")

    const opened = await events(page, "calendly_open")
    expect(opened).toHaveLength(1)
    expect(opened[0]).toMatchObject({ page_path: "/" })
  })

  test("a booking in the Calendly popup is tracked", async ({ page }) => {
    await page.goto("/")
    await ready(page)
    await page.evaluate(() =>
      window.dispatchEvent(
        new MessageEvent("message", {
          origin: "https://calendly.com",
          data: { event: "calendly.event_scheduled", payload: {} },
        }),
      ),
    )
    await page.evaluate(() =>
      window.dispatchEvent(
        new MessageEvent("message", {
          origin: "https://evil.example",
          data: { event: "calendly.event_scheduled" },
        }),
      ),
    )
    expect(await events(page, "calendly_booked")).toHaveLength(1)
  })

  test("falls back to the Calendly page when the widget is blocked", async ({
    page,
  }) => {
    await page.route("https://assets.calendly.com/**", (route) => route.abort())
    await page.route("https://calendly.com/**", (route) =>
      route.fulfill({ contentType: "text/html", body: "<p>Calendly</p>" }),
    )
    await page.goto("/")
    await ready(page)
    await page
      .locator(`.bexo-canvas-wrap a[href="${CALENDLY_URL}"]`)
      .first()
      .click()
    await page.waitForURL(CALENDLY_URL)
  })

  test("phone and email clicks are tracked", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/kontakt")
    await ready(page)
    // Keep tel:/mailto: from leaving the page in the test browser.
    await page.evaluate(() =>
      document.addEventListener("click", (e) => e.preventDefault()),
    )
    await page.locator('.bexo-mobile footer a[href^="tel:"]').click()
    await page.locator('.bexo-mobile a[href^="mailto:"]').first().click()

    expect(await events(page, "click_tel")).toEqual([
      expect.objectContaining({
        page_path: "/kontakt",
        link_location: "footer",
      }),
    ])
    expect(await events(page, "click_email")).toHaveLength(1)
  })

  test("contact form tracks the lead and sends the visit source", async ({
    page,
  }) => {
    let requestBody = null as Record<string, any> | null
    await page.route("**/api/forms/kontakt", async (route) => {
      requestBody = route.request().postDataJSON()
      await route.fulfill({ json: { ok: true } })
    })

    await page.goto(
      "/kontakt?utm_source=linkedin&utm_medium=social&utm_campaign=teardown",
    )
    await ready(page)
    const form = page.locator(".bexo-canvas-wrap form")
    await form.getByLabel("Vorname").fill("Test")
    await form.getByLabel("Nachname").fill("Person")
    await form.getByLabel("E-Mail").fill("test.person@example.com")
    await form.getByLabel("Telefon").fill("079 000 00 00")
    await form.locator("select").nth(1).selectOption("SEO & Online Marketing")
    await form.locator("textarea").fill("Bitte um Rückruf")
    await form.getByRole("button", { name: "Nachricht senden" }).click()

    await expect(page.locator(".bexo-canvas-wrap [role=status]")).toBeVisible()

    expect(await events(page, "generate_lead")).toEqual([
      expect.objectContaining({
        form_id: "kontakt",
        form_topic: "seo",
        page_path: "/kontakt",
      }),
    ])
    expect(requestBody?.attribution).toMatchObject({
      utm_source: "linkedin",
      utm_medium: "social",
      utm_campaign: "teardown",
      landing_page: "/kontakt",
    })

    const dataLayer = JSON.stringify(
      await page.evaluate(() => (window as any).dataLayer),
    )
    for (const personal of [
      "test.person@example.com",
      "Person",
      "079 000 00 00",
      "Bitte um Rückruf",
    ]) {
      expect(dataLayer).not.toContain(personal)
    }
  })

  test("a failed form submission is not tracked as a lead", async ({
    page,
  }) => {
    await page.route("**/api/forms/kontakt", (route) =>
      route.fulfill({ status: 500, json: { statusMessage: "Fehler" } }),
    )
    await page.goto("/kontakt")
    await ready(page)
    const form = page.locator(".bexo-canvas-wrap form")
    await form.getByLabel("Vorname").fill("Test")
    await form.getByLabel("Nachname").fill("Person")
    await form.getByLabel("E-Mail").fill("test.person@example.com")
    await form.locator("textarea").fill("Hallo")
    await form.getByRole("button", { name: "Nachricht senden" }).click()
    await expect(page.locator(".bexo-canvas-wrap [role=alert]")).toBeVisible()
    expect(await events(page, "generate_lead")).toHaveLength(0)
  })
})
