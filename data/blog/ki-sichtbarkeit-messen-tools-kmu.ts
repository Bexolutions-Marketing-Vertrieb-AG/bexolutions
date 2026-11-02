import type { IBlog } from "~/types/dto/IBlog"

export default {
  slug: "ki-sichtbarkeit-messen-tools-kmu",
  category: "KI & GEO",
  readTime: "7 Min. Lesezeit",
  date: "Juli 2026",
  datePublished: "2026-07-05",
  title: "KI-Sichtbarkeit messen — Tools für Ihren Share of Voice",
  subtitle: "Vom kostenlosen Einstieg bis zum professionellen Monitoring",
  tagline:
    "Vom kostenlosen Einstieg bis zum professionellen Monitoring — was für Schweizer KMU tatsächlich sinnvoll ist",
  heroImage: "/images/blog/ki-sichtbarkeit-messen-tools-kmu/hero.jpg",
  audioUrl: "/audio/blog/ki-sichtbarkeit-messen-tools-kmu.m4a",
  tldr: {
    title: "TL;DR — Das Wichtigste in 60 Sekunden",
    body: "Google Analytics und Search Console zeigen nicht, ob Ihr Unternehmen in ChatGPT, Perplexity oder Google AI Mode auftaucht. Dafür braucht es eigene Methoden: den manuellen 5-Fragen-Test als kostenloser Einstieg, den HubSpot AI Search Grader als ersten strukturierten Check, und spezialisierte Tools wie Otterly.ai (ab USD 29/Monat) oder Peec AI (ab EUR 89/Monat) für kontinuierliches Monitoring. Die zentrale Kennzahl: Share of Voice — wie oft Ihr Unternehmen in KI-Antworten zu Ihrer Kategorie erscheint, verglichen mit Mitbewerbern.",
  },
  author: {
    name: "Balaram Furrer",
    bio: "Balaram Furrer ist CEO von Bexolutions Marketing und Vertrieb AG. Er begleitet Schweizer KMU bei der digitalen Sichtbarkeit im Zeitalter der KI-Suche.",
  },
  toc: [
    {
      id: "klassische-tools-blinder-fleck",
      label: "Was klassische Tools nicht sehen",
    },
    {
      id: "kernkennzahlen",
      label: "Die Kernkennzahlen der KI-Sichtbarkeit",
    },
    {
      id: "stufe-1-manueller-test",
      label: "Stufe 1: Manueller 5-Fragen-Test",
    },
    {
      id: "stufe-2-tools",
      label: "Stufe 2: Strukturierte Checks und Tools",
    },
    {
      id: "stufe-3-tool-vergleich",
      label: "Stufe 3: Tool-Vergleich",
    },
    {
      id: "welche-stufe-lohnt-sich",
      label: "Welche Stufe lohnt sich für Ihr KMU?",
    },
    { id: "haeufige-fragen", label: "Häufige Fragen" },
    { id: "fazit", label: "Fazit" },
  ],
  seo: {
    description:
      "Share of Voice in KI-Antworten messen: Welche Tools Schweizer KMU nutzen können — vom kostenlosen Einstieg bis zum professionellen Monitoring.",
    ogImage: "/images/blog/ki-sichtbarkeit-messen-tools-kmu/hero.jpg",
  },
  blocks: [
    {
      type: "richText",
      html: '<p>Was nicht gemessen wird, kann nicht verbessert werden. Das gilt für SEO seit Jahrzehnten — und es gilt seit 2025 auch für KI-Sichtbarkeit. Das Problem: Die Tools, die die meisten KMU täglich nutzen, sehen diese Sichtbarkeit schlicht nicht.</p><p>Google Search Console zeigt Klicks und Impressionen in der klassischen Suche. Google Analytics 4 zeigt Website-Traffic. Weder das eine noch das andere zeigt, ob ChatGPT Ihr Unternehmen empfiehlt, wenn jemand nach Ihrer Leistung fragt.</p><p>Dieser Artikel zeigt, wie Sie Ihre KI-Sichtbarkeit in drei Stufen messen — vom kostenlosen 5-Minuten-Test bis zum professionellen Monitoring.</p><p>Dieser Artikel ist Teil unserer Artikelreihe zur KI-Sichtbarkeit. Die Grundlagen finden Sie in <a href="/wissen/ki-suchen-ohne-klick-kmu">Artikel 1 (KI-Suchen ohne Klick)</a>, <a href="/wissen/geo-readiness-kmu-chatgpt-google-ai-mode">Artikel 2 (GEO Readiness)</a> und <a href="/wissen/b2b-kaeufer-ki-recherche-kmu-schweiz">Artikel 3 (B2B-Käufer und KI)</a>.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "klassische-tools-blinder-fleck",
      title: "Was klassische Tools nicht sehen",
    },
    {
      type: "richText",
      html: "<p>KI-Systeme wie ChatGPT, Perplexity oder Google AI Mode generieren ihre Antworten, ohne dass dieser Vorgang in Ihren Marketing-Tools auftaucht. Wenn jemand «Treuhand Zug» in ChatGPT eingibt und eine Antwort mit drei Empfehlungen erhält — registriert kein einziges Ihrer bestehenden Systeme diesen Moment.</p>",
    },
    {
      type: "table",
      headers: ["Tool", "Was es misst", "Was es NICHT misst"],
      rows: [
        [
          "Google Search Console",
          "Klicks, Rankings, Impressionen (Google)",
          "KI-Erwähnungen in ChatGPT, Perplexity, AI Mode",
        ],
        [
          "Google Analytics 4",
          "Website-Traffic, Conversions",
          "Anfragen, die nie auf Ihrer Website landen",
        ],
        [
          "Klassische Rank-Tracker",
          "Google-Positionen für Keywords",
          "Position in KI-generierten Antworten",
        ],
        [
          "Social-Media-Tools",
          "Erwähnungen auf sozialen Netzwerken",
          "Erwähnungen in KI-Antworten",
        ],
        [
          "CRM / HubSpot",
          "Leads, Pipeline, Kontakte",
          "Leads, die durch fehlende KI-Präsenz nie entstehen",
        ],
      ],
    },
    {
      type: "richText",
      html: "<p>Der blinde Fleck ist real: Laut AthenaHQ State of AI Search 2026 liegt die durchschnittliche Marken-Erwähnungsrate in KI-Antworten bei nur 17,2 % — die meisten Unternehmen wissen nicht einmal, ob sie in dieser Statistik überhaupt vorkommen.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "kernkennzahlen",
      title: "Die drei Kernkennzahlen der KI-Sichtbarkeit",
    },
    {
      type: "richText",
      html: "<p>Bevor Sie messen, müssen Sie wissen, was Sie messen. KI-Sichtbarkeit lässt sich in drei Kernkennzahlen fassen:</p>",
    },
    {
      type: "table",
      headers: ["Kennzahl", "Definition", "KMU-Relevanz"],
      rows: [
        [
          "Mention Rate / Erwähnungsrate",
          "Wie oft taucht Ihr Unternehmen in KI-Antworten auf (als % aller getesteten Anfragen)",
          "Hoch — Ihr persönlicher Ausgangswert",
        ],
        [
          "Share of Voice (SoV)",
          "Ihr Anteil an KI-Erwähnungen im Vergleich zu Mitbewerbern in Ihrer Kategorie",
          "Sehr hoch — zeigt Wettbewerbsposition",
        ],
        [
          "Sentiment",
          "Wie wird Ihr Unternehmen in KI-Antworten beschrieben: positiv, neutral oder negativ?",
          "Mittel — wichtig bei negativer Presse oder schlechten Bewertungen",
        ],
      ],
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Wichtig: Kein einheitlicher Goldstandard",
      body: "Fast jedes Tool berechnet seinen eigenen «Visibility Score» oder «Share of Voice» mit eigener, oft nicht offengelegter Methodik. Zwei Tools können für dasselbe Unternehmen unterschiedliche Zahlen ausgeben. Wichtiger als der absolute Wert ist der Trend über Zeit — und der Vergleich mit Ihren direkten Mitbewerbern in denselben Tools.",
    },
    {
      type: "image",
      src: "/images/blog/ki-sichtbarkeit-messen-tools-kmu/infographic.jpg",
      alt: "KI-Sichtbarkeit messen — Share of Voice und Kernkennzahlen für Schweizer KMU",
      caption:
        "Überblick: Mention Rate, Share of Voice und Sentiment — die drei Kennzahlen der KI-Sichtbarkeit.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "stufe-1-manueller-test",
      title: "Stufe 1: Der kostenlose Einstieg — manueller 5-Fragen-Test",
    },
    {
      type: "richText",
      html: "<p>Bevor Sie irgendein Tool kaufen, empfehlen wir diesen Test. Er dauert 15 Minuten und liefert bereits eine klare erste Antwort auf die Frage: «Bin ich in KI-Antworten sichtbar?»</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "DER MANUELLE 5-FRAGEN-TEST",
      heading: "15 Minuten, zwei Plattformen, zehn Antworten",
      body: "Öffnen Sie ChatGPT und Perplexity. Stellen Sie je 5 Fragen.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Kategorie-Suche: «Beste [Ihre Leistung] in [Ihr Ort/Kanton]»",
        "Problem-Suche: «Wer hilft mir mit [konkretes Problem] in der Schweiz?»",
        "Vergleich: «Welche [Ihre Branche]-Anbieter gibt es in [Ihre Region]?»",
        "Direktfrage: «Empfiehlst du [Ihr Unternehmensname]?»",
        "Konkurrenten-Check: «Wer sind die bekanntesten [Ihre Leistung]-Anbieter im Kanton [X]?»",
      ],
    },
    {
      type: "callout",
      variant: "navy",
      title: "Auswertung Ihrer Ergebnisse",
      body: "Notieren Sie, wie oft Sie genannt werden (0–10). Notieren Sie, welche Mitbewerber genannt werden. Das ist Ihr Ausgangs-Share-of-Voice. Ergebnis 0–2 Nennungen: Sie sind in KI-Antworten praktisch unsichtbar — GEO-Massnahmen haben höchste Priorität. Ergebnis 3–6 Nennungen: Sie sind ansatzweise präsent, aber ausbaubar. Ergebnis 7–10 Nennungen: Sie sind gut positioniert — jetzt geht es um Optimierung und Wettbewerbsvergleich.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "stufe-2-tools",
      title:
        "Stufe 2: Strukturierter Check mit kostenlosen und günstigen Tools",
    },
    {
      type: "richText",
      html: "<p>Nach dem manuellen Test können Sie mit kostenlosen oder sehr günstigen Tools einen ersten strukturierten Überblick gewinnen, ohne sofort in ein monatliches Abonnement zu investieren.</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "TOOL 1",
      heading: "HubSpot AI Search Grader",
      body: "Kostenloser Einzel-Check für Ihre Domain — Preis: Kostenlos",
    },
    {
      type: "richText",
      html: "<p>Der HubSpot AI Search Grader ist ein kostenloser Einmalcheck: Sie geben Ihre Domain und Ihre Hauptkategorie ein und erhalten eine Auswertung, wie oft Ihr Unternehmen in KI-Antworten zu dieser Kategorie erscheint. Kein Abonnement, kein Login.</p>",
    },
    {
      type: "list",
      items: [
        "Was es zeigt: Erwähnungsrate in ChatGPT und anderen Modellen für Ihre Kategorie",
        "Was es nicht zeigt: Trend über Zeit, Mitbewerbervergleich, keine kontinuierliche Messung",
        "Geeignet für: Erste Standortbestimmung, bevor Sie in ein Tool investieren",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      eyebrow: "TOOL 2",
      heading: "Otterly.ai",
      body: "Günstiger Einstieg mit kontinuierlichem Monitoring — ab USD 29/Monat (Lite, 15 Prompts)",
    },
    {
      type: "richText",
      html: "<p>Otterly.ai ist das günstigste professionelle AI-Visibility-Tool mit veröffentlichten Preisen. Gegründet 2024 in Österreich, von Gartner 2025 als Cool Vendor ausgezeichnet. Das Lite-Paket (USD 29/Monat) überwacht 15 Prompts über vier KI-Plattformen: ChatGPT, Google AI Overviews, Perplexity und Microsoft Copilot.</p>",
    },
    {
      type: "list",
      items: [
        "Was es zeigt: Brand Mentions, Citation-Quellen, Share of Voice, Wettbewerbsvergleich, automatisierte Reports",
        "Plattform-Abdeckung: ChatGPT, Perplexity, Google AI Overviews, Copilot (Gemini und Google AI Mode als kostenpflichtige Add-ons)",
        "Was es nicht zeigt: Claude, Grok, DeepSeek (nur höhere Tarife)",
        "Geeignet für: KMU, die erstmals ein strukturiertes Monitoring einrichten, ohne Enterprise-Budget",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      eyebrow: "TOOL 3",
      heading: "Peec AI",
      body: "Professionelles Monitoring mit Optimierungsempfehlungen — ab EUR 89/Monat",
    },
    {
      type: "richText",
      html: "<p>Peec AI ist das europäische Leitprodukt im Bereich AI Visibility — ein Berliner Startup, das Ende 2025 eine Series A im zweistelligen Millionenbereich abschloss. Das Tool geht über reines Monitoring hinaus: Es verbindet Sichtbarkeitsdaten direkt mit Optimierungsempfehlungen («Pitch Workspaces»).</p>",
    },
    {
      type: "list",
      items: [
        "Was es zeigt: Brand Mentions, Share of Voice, Zitierungsquellen, Sentiment, Wettbewerbsvergleich, Handlungsempfehlungen",
        "Plattform-Abdeckung: ChatGPT, Perplexity, Google AI Overviews, DeepSeek (Gemini, Claude, AI Mode als Enterprise-Add-ons)",
        "Besonderheit: Optimierungsempfehlungen direkt im Dashboard — nicht nur Messung",
        "Geeignet für: KMU mit aktivem Marketingteam, das auf Basis der Daten handeln will",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      eyebrow: "TOOL 4",
      heading: "Semrush AI Visibility Toolkit",
      body: "Ergänzung für bestehende Semrush-Nutzer — USD 99/Monat/Domain (Add-on)",
    },
    {
      type: "richText",
      html: "<p>Für Unternehmen, die bereits Semrush für klassisches SEO nutzen, ist das AI Visibility Toolkit eine naheliegende Erweiterung: kein neues Login, keine neue Datenpipeline, AI-Sichtbarkeit integriert in bestehende SEO-Reports.</p>",
    },
    {
      type: "list",
      items: [
        "Was es zeigt: AI Visibility Score, Markenerwähnungen über mehrere KI-Plattformen, Sentiment, Integration mit SEO-Daten",
        "Plattform-Abdeckung: ChatGPT, Perplexity, Google AI Overviews, Copilot, Gemini (5 Plattformen)",
        "Einschränkung: Weniger granular als spezialisierte Tools; globale Prompt-Datenbank statt eigener Prompt-Sets",
        "Geeignet für: Bestehende Semrush-Nutzer, die AI-Sichtbarkeit ohne neues Tool-Abo ergänzen wollen",
      ],
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "stufe-3-tool-vergleich",
      title: "Stufe 3: Tool-Vergleich auf einen Blick",
    },
    {
      type: "table",
      caption: "AI Visibility Tools im Vergleich (Stand Juli 2026)",
      headers: [
        "Tool",
        "Einstiegspreis",
        "KI-Plattformen",
        "Stärke",
        "Geeignet für",
      ],
      rows: [
        [
          "HubSpot AI Search Grader",
          "Kostenlos",
          "ChatGPT + andere",
          "Einmalcheck ohne Login",
          "Allererster Test",
        ],
        [
          "Otterly.ai",
          "USD 29/Monat",
          "4 (ChatGPT, Perplexity, AIO, Copilot)",
          "Günstigster Einstieg mit Monitoring",
          "KMU mit kleinem Budget",
        ],
        [
          "Peec AI",
          "EUR 89/Monat",
          "4 Basis + Add-ons",
          "Monitoring + Optimierungsempfehlungen",
          "KMU mit aktivem Marketing",
        ],
        [
          "Semrush AI Toolkit",
          "USD 99/Monat",
          "5 Plattformen",
          "Integration in bestehende SEO-Suite",
          "Bestehende Semrush-Nutzer",
        ],
      ],
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "welche-stufe-lohnt-sich",
      title: "Welche Stufe lohnt sich für Ihr KMU?",
    },
    {
      type: "richText",
      html: "<p>Die ehrliche Antwort: Das kommt darauf an. Hier ist der Entscheidungsrahmen, den wir unseren Klienten empfehlen:</p>",
    },
    {
      type: "table",
      headers: ["Situation", "Empfehlung"],
      rows: [
        [
          "Sie wissen noch nicht, ob Sie überhaupt sichtbar sind",
          "Manueller 5-Fragen-Test + HubSpot AI Search Grader (kostenlos)",
        ],
        [
          "Sie haben GEO-Massnahmen gestartet und wollen den Effekt messen",
          "Otterly.ai Lite (USD 29/Monat) für 1–3 Monate",
        ],
        [
          "Sie verwalten das Marketing aktiv und wollen optimieren",
          "Peec AI (EUR 89/Monat) mit Optimierungsfunktion",
        ],
        [
          "Sie nutzen bereits Semrush und wollen KI ergänzen",
          "Semrush AI Toolkit als Add-on (USD 99/Monat)",
        ],
        [
          "Kein Budget, aber Bereitschaft zur manuellen Arbeit",
          "Monatlicher manueller Test mit 10 festen Fragen — kostenlos, aber aussagekräftig",
        ],
      ],
    },
    {
      type: "callout",
      variant: "navy",
      title: "Erkenntnis aus der Praxis",
      body: "«Die meisten KMU, die zu uns kommen, haben noch nie systematisch geprüft, ob sie in KI-Antworten erscheinen. Der manuelle Test dauert 15 Minuten und ist oft der Moment, der alles verändert — weil die Antwort in 80 % der Fälle lautet: Ich bin nicht sichtbar, aber mein Mitbewerber schon.» — Balaram Furrer, CEO Bexolutions",
    },
    { type: "divider" },

    { type: "sectionTitle", id: "haeufige-fragen", title: "Häufige Fragen" },
    {
      type: "richText",
      html: "<p><strong>Kann ich KI-Sichtbarkeit auch ohne Tools messen?</strong><br>Ja — mit dem manuellen 5-Fragen-Test. Er ist kostenlos, liefert eine erste Einschätzung und reicht für viele KMU als Einstieg völlig aus. Der Unterschied zu einem Tool: Der manuelle Test ist eine Momentaufnahme. Ein Tool misst kontinuierlich und zeigt Trends über Zeit, ohne dass Sie jede Woche selbst nachfragen müssen.</p><p><strong>Zeigen diese Tools auch, was die KI falsch über mein Unternehmen sagt?</strong><br>Teilweise. Peec AI und einige Enterprise-Tools wie KIME erkennen sogenannte «Halluzinationen» — also falsche Angaben der KI über Ihr Unternehmen (z.B. falsche Preise, veraltete Informationen). Das ist ein wichtiges Feature, das bei günstigen Einstiegstools wie Otterly Lite noch fehlt. Für KMU empfehlen wir den Sentiment-Check im manuellen Test als erste Annäherung.</p><p><strong>Wie viele Prompts brauche ich für eine aussagekräftige Messung?</strong><br>Experten empfehlen mindestens 30–50 Prompts für stabile Ergebnisse — das Otterly-Lite-Paket (15 Prompts) ist daher eine Einstiegslösung, keine vollständige Messung. Für den manuellen Test reichen 5–10 gut gewählte Fragen für eine erste Orientierung. Wichtig ist dabei Konsistenz: Verwenden Sie bei jedem Test dieselben Fragen, um Trends zu erkennen.</p><p><strong>Verbessern diese Tools meine KI-Sichtbarkeit automatisch?</strong><br>Nein — und das ist ein wichtiger Punkt, den viele Tool-Anbieter zu wenig betonen. Alle Tools in diesem Artikel messen Ihre Sichtbarkeit. Die eigentliche Verbesserung — strukturierte Inhalte, Schema-Markup, Bewertungsaufbau, Drittquellen — ist menschliche Arbeit, die ausserhalb des Dashboards stattfindet. Tools machen sichtbar, wo die Lücke ist. Schliessen muss sie Ihr Team oder Ihre Agentur.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "fazit",
      title: "Fazit: Erst messen, dann optimieren",
    },
    {
      type: "richText",
      html: '<p>KI-Sichtbarkeit ist keine Black Box mehr. Mit dem manuellen Test haben Sie in 15 Minuten eine erste Antwort. Mit Otterly.ai haben Sie in einer Stunde ein laufendes Monitoring für weniger als CHF 30 pro Monat. Mit Peec AI haben Sie Messung und Optimierungsrichtung in einem Tool.</p><p>Was alle drei gemeinsam haben: Sie zeigen Ihnen, ob Sie in dem Gespräch vorkommen, das Ihre potenziellen Kunden heute führen — bevor sie Ihre Website besuchen, bevor sie anrufen, bevor Sie überhaupt wissen, dass sie existieren.</p><p>Führen Sie jetzt den manuellen 5-Fragen-Test durch. Öffnen Sie ChatGPT, geben Sie «[Ihre Leistung] in [Ihr Kanton]» ein — und schauen Sie, wer genannt wird. Wenn Sie nicht dabei sind, sprechen Sie mit uns. <a href="/kontakt">Kontakt aufnehmen</a></p>',
    },
  ],
} satisfies IBlog
