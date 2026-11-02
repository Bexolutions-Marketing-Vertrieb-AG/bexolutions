import type { IBlog } from "~/types/dto/IBlog"

/**
 * Reference blog article — validates the template end-to-end and serves as the
 * worked example the `/upload-blog` skill mirrors.
 *
 * The header, TL;DR, intro, ranking-factors table and first measure use the
 * real content from the Figma design (node 300-637). The remaining measure/FAQ
 * bodies are representative demo copy that exercises every BlogBlock type — the
 * final text for a real article arrives via `/upload-blog`.
 */
export default {
  slug: "google-business-profile-optimieren",
  category: "Local SEO",
  readTime: "9 Min. Lesezeit",
  date: "Juli 2026",
  datePublished: "2026-07-01",
  title: "Google Business Profile optimieren — 10 Massnahmen für KMU",
  subtitle:
    "Schritt für Schritt zur lokalen Sichtbarkeit — mit Zeitaufwand, Schweizer Spezifika und KI-Bonus",
  tagline:
    "Schritt für Schritt zur lokalen Sichtbarkeit — mit Zeitaufwand, Schweizer Spezifika und KI-Bonus",
  heroImage: "/images/blog/google-business-profile-optimieren/hero.jpg",
  audioUrl: "/audio/blog/google-business-profile-optimieren.m4a",
  tldr: {
    title: "TL;DR — Das Wichtigste in 60 Sekunden",
    body: "Nur 48 % der Schweizer KMU mit Website haben ein vollständig ausgefülltes Google Business Profile (HSLU, 2025). Dabei erhalten vollständige Profile 70 % mehr Besuche als unvollständige (Google, 2024). Dieser Artikel zeigt die 10 wirkungsvollsten Massnahmen — priorisiert, mit Zeitaufwand, Schweizer Spezifika und dem GBP-KI-Bonus: Ein gepflegtes Profil ist heute auch eine Zitierquelle für ChatGPT, Google AI Mode und Perplexity.",
  },
  author: {
    name: "Balaram Furrer",
    bio: "Balaram Furrer ist CEO und Co-Founder von Bexolutions Marketing und Vertrieb AG sowie BNI Area Director Kanton Aargau. Er begleitet Schweizer KMU bei der digitalen Sichtbarkeit im Zeitalter der KI-Suche.",
  },
  toc: [
    { id: "warum", label: "Warum das GBP 2026 wichtiger ist denn je" },
    {
      id: "rankingfaktoren",
      label: "Die 3 Rankingfaktoren, die Google bewertet",
    },
    { id: "massnahmen", label: "Die 10 Massnahmen im Detail" },
    {
      id: "schweizer-spezifika",
      label: "Schweizer Spezifika: Was andere Guides vergessen",
    },
    { id: "ki-zitierquelle", label: "GBP als KI-Zitierquelle" },
    { id: "haeufige-fragen", label: "Häufige Fragen" },
    { id: "fazit", label: "Fazit und Monatliche Checkliste" },
  ],
  seo: {
    description:
      "Die 10 wirkungsvollsten Massnahmen, um Ihr Google Business Profile zu optimieren — priorisiert, mit Zeitaufwand, Schweizer Spezifika und KI-Bonus für KMU.",
    ogImage: "/images/blog/google-business-profile-optimieren/hero.jpg",
  },
  blocks: [
    // ---- Warum ------------------------------------------------------------
    {
      type: "sectionTitle",
      id: "warum",
      title: "Warum das GBP 2026 wichtiger ist denn je",
    },
    {
      type: "richText",
      html: "<p>Wenn jemand in Zug nach «Treuhand» sucht oder in Winterthur nach «Elektriker Notfall» — entscheidet ein einziger Moment darüber, ob Ihr Unternehmen erscheint oder nicht. Dieser Moment heisst <strong>Google Local Pack</strong>: die drei hervorgehobenen lokalen Treffer mit Karte, die in der Suche weit oben stehen.</p><p>Das Google Business Profile (GBP) ist der wichtigste Hebel für diesen Moment. Es ist kostenlos, direkt von Google, und hat laut Google-eigenen Daten mehr Einfluss auf Ihre lokale Sichtbarkeit als fast jede andere Massnahme. Und trotzdem haben nur <strong>48 % der Schweizer KMU</strong> mit Website ein vollständig ausgefülltes Profil (HSLU, 2025).</p>",
    },
    {
      type: "richText",
      html: '<p>Dieser Artikel ist Artikel 1 im Local-SEO-Cluster. Wie das Google Business Profile im Verhältnis zur Website wirkt, zeigt <a href="/wissen/google-maps-vs-organische-suche-kmu-schweiz">Google Maps vs. organische Suche</a>; den systematischen Weg ins Local Pack beschreibt <a href="/wissen/local-seo-schweiz-google-maps-platz-1-kmu">Local SEO Schweiz</a>.</p>',
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Neu 2026: GBP-Daten fliessen direkt in KI-Antworten ein.",
      body: "ChatGPT, Perplexity und Google AI Mode nutzen Ihr Profil als Quelle für lokale Empfehlungen. Was für Google Maps gilt, gilt heute auch für KI-Suchen.",
    },
    {
      type: "image",
      src: "/images/blog/google-business-profile-optimieren/infographic.jpg",
      alt: "Sichtbarkeits-Guide für Schweizer Unternehmen: Google Business Profile optimieren",
      caption:
        "Sichtbarkeits-Guide: Die wichtigsten Hebel für ein starkes Google Business Profile.",
    },
    { type: "divider" },

    // ---- Rankingfaktoren --------------------------------------------------
    {
      type: "sectionTitle",
      id: "rankingfaktoren",
      title: "Die 3 Rankingfaktoren, die Google bewertet",
    },
    {
      type: "richText",
      html: "<p>Google bewertet lokale Treffer nach drei Hauptfaktoren. Zwei davon können Sie direkt beeinflussen:</p>",
    },
    {
      type: "table",
      headers: ["Faktor", "Was er misst", "Ihr Einfluss"],
      rows: [
        [
          "Relevanz",
          "Stimmt Ihr Profil mit der Suchanfrage überein?",
          "Hoch — durch vollständiges Profil, Kategorien, Keywords in Beschreibung",
        ],
        [
          "Entfernung",
          "Wie weit ist der Suchende von Ihrem Standort entfernt?",
          "Keiner — geografisch fix",
        ],
        [
          "Bekanntheit",
          "Hat das Unternehmen viele gute Bewertungen? Wird es im Web erwähnt?",
          "Hoch — durch aktives Bewertungsmanagement und Verzeichniseinträge",
        ],
      ],
    },
    {
      type: "richText",
      html: "<p>Die gute Nachricht: Zwei von drei Faktoren liegen in Ihrer Hand. Die folgenden 10 Massnahmen decken beide ab.</p>",
    },
    { type: "divider" },

    // ---- Massnahmen (representative demo bodies) --------------------------
    {
      type: "sectionTitle",
      id: "massnahmen",
      title: "Die 10 Massnahmen im Detail",
    },
    {
      type: "sectionHeading",
      eyebrow: "MASSNAHME 01",
      heading: "Profil vollständig ausfüllen — jedes Feld",
      body: "Zeitaufwand: 2–3 Stunden einmalig",
    },
    {
      type: "richText",
      html: "<p>Füllen Sie jedes verfügbare Feld aus: Name, Kategorien, Öffnungszeiten, Telefon, Website, Beschreibung und Attribute. Vollständige Profile erhalten laut Google 70 % mehr Besuche als unvollständige — jedes leere Feld ist ein verschenkter Rankingfaktor.</p>",
    },
    { type: "divider" },
    {
      type: "sectionHeading",
      eyebrow: "MASSNAHME 02",
      heading: "Die richtige Haupt- und Nebenkategorie wählen",
      body: "Zeitaufwand: 30 Minuten",
    },
    {
      type: "richText",
      html: "<p>Die Hauptkategorie ist der stärkste Relevanz-Hebel. Wählen Sie die spezifischste zutreffende Kategorie und ergänzen Sie passende Nebenkategorien — aber nur solche, die Ihr Angebot wirklich abdecken.</p>",
    },
    { type: "divider" },
    {
      type: "sectionHeading",
      eyebrow: "MASSNAHME 03",
      heading: "Bewertungen aktiv einholen und beantworten",
      body: "Zeitaufwand: laufend, ca. 20 Minuten pro Woche",
    },
    {
      type: "richText",
      html: "<p>Bitten Sie zufriedene Kunden systematisch um eine Bewertung und antworten Sie auf <em>jede</em> Rezension — positiv wie negativ. Menge, Aktualität und Antwortrate zahlen alle auf den Faktor «Bekanntheit» ein.</p>",
    },
    {
      type: "list",
      items: [
        "QR-Code mit Bewertungslink am Empfang oder auf der Rechnung",
        "Automatisierte Erinnerung 1–2 Tage nach Leistungserbringung",
        "Antwortvorlagen für wiederkehrende Themen vorbereiten",
      ],
    },
    { type: "divider" },

    // ---- Schweizer Spezifika ---------------------------------------------
    {
      type: "sectionTitle",
      id: "schweizer-spezifika",
      title: "Schweizer Spezifika: Was andere Guides vergessen",
    },
    {
      type: "richText",
      html: "<p>Deutsche Guides ignorieren Details, die in der Schweiz den Unterschied machen: Mehrsprachigkeit (DE/FR/IT), lokale Verzeichnisse wie <strong>local.ch</strong> und <strong>search.ch</strong> für konsistente NAP-Daten, sowie Feiertags-Öffnungszeiten je Kanton.</p>",
    },
    { type: "divider" },

    // ---- KI-Zitierquelle -------------------------------------------------
    {
      type: "sectionTitle",
      id: "ki-zitierquelle",
      title: "GBP als KI-Zitierquelle",
    },
    {
      type: "richText",
      html: "<p>Sprachmodelle ziehen lokale Empfehlungen zunehmend aus strukturierten Quellen wie dem GBP. Ein konsistentes, aktuelles Profil erhöht die Chance, in KI-Antworten von ChatGPT, Perplexity und Google AI Mode zitiert zu werden.</p>",
    },
    {
      type: "callout",
      variant: "navy",
      title: "Praxis-Tipp",
      body: "Halten Sie NAP-Daten (Name, Adresse, Telefon) über alle Verzeichnisse hinweg identisch. Inkonsistenzen senken sowohl das lokale Ranking als auch die Zitierwahrscheinlichkeit in KI-Antworten.",
    },
    { type: "divider" },

    // ---- FAQ -------------------------------------------------------------
    { type: "sectionTitle", id: "haeufige-fragen", title: "Häufige Fragen" },
    {
      type: "richText",
      html: "<p><strong>Wie lange dauert es, bis Änderungen wirken?</strong> Kleinere Anpassungen sind oft innert Tagen sichtbar; der Aufbau von Bewertungen und Bekanntheit wirkt über Wochen bis Monate.</p><p><strong>Brauche ich eine Website zusätzlich zum GBP?</strong> Ja — das GBP verstärkt Ihre Sichtbarkeit, ersetzt aber keine Website als Conversion-Ziel.</p>",
    },
    { type: "divider" },

    // ---- Fazit + Checkliste ---------------------------------------------
    {
      type: "sectionTitle",
      id: "fazit",
      title: "Fazit und Monatliche Checkliste",
    },
    {
      type: "richText",
      html: '<p>Ein gepflegtes Google Business Profile ist der günstigste Hebel für lokale Sichtbarkeit — und 2026 zusätzlich eine Zitierquelle für KI-Antworten. Priorisieren Sie die Massnahmen, die auf Relevanz und Bekanntheit einzahlen, und halten Sie das Profil mit einer kurzen Monatsroutine aktuell.</p><p><strong>Ihr nächster Schritt:</strong> Prüfen Sie heute, ob Ihr Profil vollständig ausgefüllt ist — Kategorien, Öffnungszeiten, Fotos und NAP-Konsistenz. Das ist der schnellste Hebel ohne Werbebudget.</p><p>Möchten Sie professionelle Unterstützung? <a href="/kontakt">Kontakt aufnehmen</a></p>',
    },
    {
      type: "table",
      caption: "Monatliche Checkliste — ca. 30 Minuten Aufwand.",
      headers: ["Aufgabe", "Rhythmus"],
      rows: [
        ["Neue Bewertungen beantworten", "Wöchentlich"],
        ["Öffnungszeiten & Feiertage prüfen", "Monatlich"],
        ["Neuen Beitrag / Angebot posten", "Monatlich"],
        ["NAP-Daten in Verzeichnissen abgleichen", "Quartalsweise"],
      ],
    },
  ],
} satisfies IBlog
