import { expect, test } from "@playwright/test"

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.184046892881!2d8.123110177063905!3d47.388841771170206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b219b741eeb%3A0xf06b9a842deb9f53!2sBexolutions%20Marketing%20und%20Vertrieb%20AG!5e0!3m2!1sen!2smx!4v1793862996025!5m2!1sen!2smx"

test.describe("Kontakt Google Maps embed", () => {
  test("mobile shows the Google Maps iframe instead of the static map image", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/kontakt")

    const iframe = page.locator(
      ".bexo-mobile iframe[title='Bexolutions Standort auf Google Maps']",
    )
    await expect(iframe).toBeVisible()
    await expect(iframe).toHaveAttribute("src", MAP_SRC)
    await expect(
      page.locator('.bexo-mobile img[src*="mapwidget"]'),
    ).toHaveCount(0)
  })

  test("desktop shows the Google Maps iframe instead of the static map image", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto("/kontakt")

    const iframe = page.locator(
      ".bexo-canvas-wrap iframe[title='Bexolutions Standort auf Google Maps']",
    )
    await expect(iframe).toBeVisible()
    await expect(iframe).toHaveAttribute("src", MAP_SRC)
    await expect(
      page.locator('.bexo-canvas-wrap img[src*="mapwidget"]'),
    ).toHaveCount(0)
  })
})
