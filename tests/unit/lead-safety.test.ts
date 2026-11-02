import assert from "node:assert/strict"
import { describe, it } from "node:test"
import {
  buildKontaktEmailHtml,
  cleanAttribution,
} from "~/server/utils/kontaktEmail"
import {
  buildContactProperties,
  buildNoteBody,
  syncLeadToHubspot,
} from "~/server/utils/hubspotLead"
import { captureAttribution, getAttribution } from "~/utils/attribution"
import { pushEvent } from "~/utils/tracking"
import type { IKontaktForm } from "~/types/dto/IKontaktForm"

const form: IKontaktForm = {
  salutation: "Herr",
  firstName: "Ada",
  lastName: "Lovelace",
  email: "Ada@Example.com",
  phone: "079 000 00 00",
  company: "Analytical",
  topic: "SEO",
  message: "<script>alert(1)</script>\nsecond line",
  attribution: {
    utm_source: '<img src=x onerror="alert(1)">',
    landing_page: "/kontakt",
    ignored: "must-not-pass",
  },
}

function jsonResponse(status: number, data: unknown) {
  return new Response(JSON.stringify(data), { status })
}

describe("contact form output cannot carry markup", () => {
  it("escapes the message and attribution in the HubSpot note", () => {
    const html = buildNoteBody(form)
    assert.equal(html.includes("<script>"), false)
    assert.equal(html.includes("<img"), false)
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/)
    assert.match(html, /second line/)
    assert.match(html, /&lt;img src=x onerror=&quot;alert\(1\)&quot;&gt;/)
  })

  it("escapes attribution in the office email", () => {
    const html = buildKontaktEmailHtml(form)
    assert.equal(html.includes("<img"), false)
    assert.match(html, /&lt;img/)
  })

  it("keeps only known attribution keys", () => {
    const clean = cleanAttribution({
      utm_source: "  google  ",
      __proto__: "polluted",
      callback: "https://evil.example",
      landing_page: "x".repeat(500),
    })
    assert.deepEqual(Object.keys(clean).sort(), ["landing_page", "utm_source"])
    assert.equal(clean.utm_source, "google")
    assert.equal(clean.landing_page?.length, 200)
  })
})

describe("HubSpot requests stay on the API and use numeric ids", () => {
  it("creates a contact, deal and note without leaving api.hubapi.com", async () => {
    const urls: string[] = []
    const fetchFn = async (url: string, init: RequestInit) => {
      urls.push(`${init.method} ${url}`)
      assert.equal(url.startsWith("https://api.hubapi.com/"), true)
      assert.equal(
        (init.headers as Record<string, string>).Authorization,
        "Bearer test-token",
      )
      if (url.endsWith("/contacts/search")) {
        return jsonResponse(200, { results: [] })
      }
      if (url.endsWith("/contacts")) return jsonResponse(200, { id: "10" })
      if (url.endsWith("/deals")) return jsonResponse(200, { id: "20" })
      if (url.endsWith("/notes")) return jsonResponse(200, { id: "30" })
      return jsonResponse(500, { category: "UNEXPECTED" })
    }

    const result = await syncLeadToHubspot(form, {
      token: "test-token",
      fetchFn,
    })
    assert.deepEqual(result, {
      contactId: "10",
      dealId: "20",
      noteId: "30",
      contactCreated: true,
    })
    assert.equal(
      urls.some((url) => url.includes("10") && url.includes("..")),
      false,
    )
  })

  it("refuses a contact id that is not decimal before calling the next URL", async () => {
    const urls: string[] = []
    const fetchFn = async (url: string, init: RequestInit) => {
      urls.push(`${init.method} ${url}`)
      return jsonResponse(200, { results: [{ id: "1/../../admin" }] })
    }

    await assert.rejects(
      () => syncLeadToHubspot(form, { token: "test-token", fetchFn }),
      /invalid id/,
    )
    assert.deepEqual(urls, [
      "POST https://api.hubapi.com/crm/v3/objects/contacts/search",
    ])
  })

  it("does not echo a non-JSON HubSpot body", async () => {
    const secret = "lead-body-must-stay-out-of-the-error"
    const fetchFn = async () =>
      new Response(`<html>${secret}</html>`, { status: 502 })

    await assert.rejects(
      () => syncLeadToHubspot(form, { token: "test-token", fetchFn }),
      (error: unknown) => {
        assert.match(String(error), /not JSON \(502\)/)
        assert.equal(String(error).includes(secret), false)
        return true
      },
    )
  })

  it("stores a lower-cased email and drops an empty company", () => {
    const props = buildContactProperties({
      ...form,
      company: "  ",
      email: "A@B.CH",
    })
    assert.equal(props.email, "a@b.ch")
    assert.equal("company" in props, false)
  })
})

describe("attribution and analytics stay free of form answers", () => {
  it("keeps the first visit unless a later one brings new campaign parameters", () => {
    const store = new Map<string, string>()
    Object.assign(globalThis, {
      window: {
        sessionStorage: {
          getItem: (key: string) => store.get(key) ?? null,
          setItem: (key: string, value: string) => store.set(key, value),
        },
        location: { host: "www.bexolutions.ch" },
      },
      document: { referrer: "https://www.google.com/search?q=secret" },
    })

    captureAttribution(
      new URL("https://www.bexolutions.ch/kontakt?utm_source=google"),
    )
    captureAttribution(new URL("https://www.bexolutions.ch/leistungen"))
    const saved = getAttribution()
    assert.equal(saved.utm_source, "google")
    assert.equal(saved.landing_page, "/kontakt")
    assert.equal(saved.referrer, "https://www.google.com/search")
    assert.equal(JSON.stringify(saved).includes("secret"), false)
  })

  it("pushes only the event name and the parameters the caller gave", () => {
    const pushed: unknown[] = []
    Object.assign(globalThis, {
      window: {
        dataLayer: { push: (entry: unknown) => pushed.push(entry) },
        location: { pathname: "/kontakt" },
      },
    })
    pushEvent("generate_lead", { form_topic: "seo" })
    assert.deepEqual(pushed, [
      { event: "generate_lead", page_path: "/kontakt", form_topic: "seo" },
    ])
  })
})
