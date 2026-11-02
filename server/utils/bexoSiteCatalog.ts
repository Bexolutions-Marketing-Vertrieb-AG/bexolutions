import type { IBlog } from "~/types/dto/IBlog"

import b2bKaeuferKi from "~/data/blog/b2b-kaeufer-ki-recherche-kmu-schweiz"
import contentStrategieTreuhand from "~/data/blog/content-strategie-treuhand-themen-die-ranken"
import geoReadiness from "~/data/blog/geo-readiness-kmu-chatgpt-google-ai-mode"
import googleBewertungen from "~/data/blog/google-bewertungen-einfordern-kmu-schweiz"
import googleBusinessProfile from "~/data/blog/google-business-profile-optimieren"
import googleMapsVsOrganisch from "~/data/blog/google-maps-vs-organische-suche-kmu-schweiz"
import keywordRecherche from "~/data/blog/keyword-recherche-kmu-schweiz-suchbegriffe-finden"
import kiSichtbarkeitMessen from "~/data/blog/ki-sichtbarkeit-messen-tools-kmu"
import kiSuchenOhneKlick from "~/data/blog/ki-suchen-ohne-klick-kmu"
import kundenwertBerechnen from "~/data/blog/kundenwert-berechnen-kmu"
import linkedinKmuInhaber from "~/data/blog/linkedin-kmu-inhaber-thought-leadership-30-minuten"
import linkedinOutreach from "~/data/blog/linkedin-outreach-schweiz-b2b-leads-kmu"
import linkedinPersonalBranding from "~/data/blog/linkedin-personal-branding-profil-vs-firmenseite-kmu"
import localSeoSchweiz from "~/data/blog/local-seo-schweiz-google-maps-platz-1-kmu"
import nischenSeoTreuhand from "~/data/blog/nischen-seo-treuhand-grundstueckgewinnsteuer-aargau"
import seoOhneWerbebudget from "~/data/blog/seo-ohne-werbebudget-organische-sichtbarkeit-kmu"
import seoSchweizerKmu from "~/data/blog/seo-schweizer-kmu-einstiegsguide-2026"
import seoTreuhandbuero from "~/data/blog/seo-treuhandbuero-schweiz-mandanten-google"
import warumKmuUnsichtbar from "~/data/blog/warum-kmu-bei-google-unsichtbar-ursachen-fixes"
import zofingenFallstudie from "~/data/blog/zofingen-treuhand-seo-fallstudie-organische-besucher"

export type BexoPageKind = "primary" | "optional"

export type BexoStaticPage = {
  path: string
  title: string
  summary: string
  kind: BexoPageKind
  changefreq?: "weekly" | "monthly" | "yearly"
  priority?: number
}

export type BexoBlogMeta = {
  slug: string
  title: string
  subtitle: string
  tagline: string
  category: string
  datePublished?: string
  seoDescription: string
  tldrBody: string
}

const DEFAULT_SITE_NAME = "Bexolutions Marketing und Vertrieb AG"
const DEFAULT_SITE_DESCRIPTION =
  "Bexolutions — Ihre Digitalagentur im Kanton Aargau. SEO, Online Marketing und Vertriebsoptimierung für KMU in der Schweiz und im DACH-Raum."

/**
 * Eager blog imports — required on Vercel/Nitro.
 * `data/blog/*.ts` is not on the serverless filesystem; only bundled imports work.
 */
const BLOG_MODULES: IBlog[] = [
  b2bKaeuferKi,
  contentStrategieTreuhand,
  geoReadiness,
  googleBewertungen,
  googleBusinessProfile,
  googleMapsVsOrganisch,
  keywordRecherche,
  kiSichtbarkeitMessen,
  kiSuchenOhneKlick,
  kundenwertBerechnen,
  linkedinKmuInhaber,
  linkedinOutreach,
  linkedinPersonalBranding,
  localSeoSchweiz,
  nischenSeoTreuhand,
  seoOhneWerbebudget,
  seoSchweizerKmu,
  seoTreuhandbuero,
  warumKmuUnsichtbar,
  zofingenFallstudie,
]

/** Marketing + legal pages (German-only, matches live routes). */
export const BEXO_STATIC_PAGES: BexoStaticPage[] = [
  {
    path: "/",
    title: "Startseite",
    summary:
      "Digitalagentur für Schweizer KMU: SEO, Local SEO, GEO/KI-Sichtbarkeit und Vertriebsoptimierung.",
    kind: "primary",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/ueber-uns",
    title: "Über uns",
    summary:
      "Team, Haltung und Arbeitsweise von Bexolutions Marketing und Vertrieb AG.",
    kind: "primary",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/leistungen",
    title: "Leistungen",
    summary:
      "Leistungsportfolio: SEO, Local SEO, Content, LinkedIn und KI-/GEO-Sichtbarkeit.",
    kind: "primary",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/wissen",
    title: "Wissen",
    summary:
      "Ratgeber und Fachartikel zu SEO, Local SEO, LinkedIn und KI-Suche für Schweizer KMU.",
    kind: "primary",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/treuhaender",
    title: "Treuhänder",
    summary:
      "Spezialseite für Treuhandbüros: Mandanten über Google und KI-Suche gewinnen.",
    kind: "primary",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/referenz-zofingen",
    title: "Referenz Zofingen",
    summary:
      "Fallstudie: organische Sichtbarkeit und Wachstum für ein Treuhandunternehmen in Zofingen.",
    kind: "primary",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/kontakt",
    title: "Kontakt",
    summary:
      "Kontaktaufnahme und Discovery Call mit Bexolutions (Aargau / Schweiz).",
    kind: "primary",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/impressum",
    title: "Impressum",
    summary: "Rechtliche Angaben zu Bexolutions Marketing und Vertrieb AG.",
    kind: "optional",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    summary: "Datenschutzerklärung der Website bexolutions.ch.",
    kind: "optional",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/cookie-einstellungen",
    title: "Cookie-Einstellungen",
    summary: "Informationen und Einstellungen zu Cookies auf dieser Website.",
    kind: "optional",
    changefreq: "yearly",
    priority: 0.2,
  },
]

export function normalizeBaseUrl(siteUrl: string) {
  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl
}

export function getSiteUrl() {
  return normalizeBaseUrl(
    process.env.NUXT_PUBLIC_SITE_URL ?? "https://www.bexolutions.ch",
  )
}

export function getSiteName() {
  return process.env.NUXT_PUBLIC_SITE_NAME ?? DEFAULT_SITE_NAME
}

export function getSiteDescription() {
  return process.env.NUXT_PUBLIC_SITE_DESCRIPTION ?? DEFAULT_SITE_DESCRIPTION
}

export function pageUrl(baseUrl: string, path: string) {
  return path === "/" ? baseUrl : `${baseUrl}${path}`
}

export function blogUrl(baseUrl: string, slug: string) {
  return `${baseUrl}/wissen/${slug}`
}

function toBlogMeta(blog: IBlog): BexoBlogMeta {
  return {
    slug: blog.slug,
    title: blog.title,
    subtitle: blog.subtitle,
    tagline: blog.tagline,
    category: blog.category,
    datePublished: blog.datePublished,
    seoDescription: blog.seo.description,
    tldrBody: blog.tldr.body,
  }
}

/** Bundled blog metadata — works on Vercel serverless (no filesystem reads). */
export function loadBlogCatalog(): BexoBlogMeta[] {
  return BLOG_MODULES.map(toBlogMeta).sort((a, b) => {
    const da = a.datePublished ?? "1970-01-01"
    const db = b.datePublished ?? "1970-01-01"
    return db.localeCompare(da)
  })
}

export function blogLinkTitle(blog: BexoBlogMeta) {
  return blog.title.replace(/:\s*$/, "")
}

export function blogLinkDescription(blog: BexoBlogMeta) {
  return blog.seoDescription || blog.tagline || blog.tldrBody
}
