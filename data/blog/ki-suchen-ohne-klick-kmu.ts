import type { IBlog } from "~/types/dto/IBlog"

export default {
  slug: "ki-suchen-ohne-klick-kmu",
  category: "KI & GEO",
  readTime: "7 Min. Lesezeit",
  date: "Juli 2026",
  datePublished: "2026-07-08",
  title: "Warum 93 % der KI-Suchen ohne Klick enden",
  subtitle: "Wie Schweizer KMU trotzdem in KI-Antworten sichtbar bleiben",
  tagline:
    "Zero-Click ist die neue Normalität — so bleiben Schweizer KMU in KI-Antworten sichtbar",
  heroImage: "/images/blog/ki-suchen-ohne-klick-kmu/hero.jpg",
  audioUrl: "/audio/blog/ki-suchen-ohne-klick-kmu.m4a",
  tldr: {
    title: "TL;DR — Das Wichtigste in 60 Sekunden",
    body: "93 % der Suchen im Google AI Mode enden ohne einen einzigen Klick auf eine Website (Semrush, 2026). Wer heute nur auf Platz 1 bei Google optimiert, verliert einen wachsenden Teil seiner digitalen Sichtbarkeit. Die gute Nachricht: Schweizer KMU, die jetzt die richtigen drei Massnahmen umsetzen, können in KI-Antworten erscheinen — ohne grösseres Werbebudget.",
  },
  author: {
    name: "Balaram Furrer",
    bio: "Balaram Furrer ist CEO von Bexolutions Marketing und Vertrieb AG. Er begleitet Schweizer KMU bei der digitalen Sichtbarkeit im Zeitalter der KI-Suche.",
  },
  toc: [
    { id: "93-prozent-ki", label: "Was steckt hinter der 93-%-Zahl?" },
    { id: "zahlen-im-ueberblick", label: "Die Zahlen im Überblick" },
    {
      id: "was-das-bedeutet",
      label: "Was das für Schweizer KMU bedeutet",
    },
    {
      id: "warum-manche-kmu",
      label: "Warum manche KMU in KI-Antworten erscheinen",
    },
    {
      id: "massnahme-01",
      label: "Massnahme 1: Google Business Profile auf KI trimmen",
    },
    {
      id: "massnahme-02",
      label: "Massnahme 2: Inhalte für KI strukturieren",
    },
    {
      id: "massnahme-03",
      label: "Massnahme 3: Drittplattformen bespielen",
    },
    {
      id: "seo-strategie",
      label: "Was das für Ihre SEO-Strategie bedeutet",
    },
    { id: "haeufige-fragen", label: "Häufige Fragen" },
    { id: "fazit", label: "Fazit" },
  ],
  seo: {
    description:
      "93 % der AI-Mode-Suchen enden ohne Klick. Was das für Ihr KMU bedeutet, warum klassisches SEO allein nicht mehr reicht – und wie Sie in KI-Antworten sichtbar werden.",
    ogImage: "/images/blog/ki-suchen-ohne-klick-kmu/hero.jpg",
  },
  blocks: [
    {
      type: "richText",
      html: "<p>Stellen Sie sich vor: Ein potenzieller Kunde sucht nach «bestem Treuhänder in Aarau». Google zeigt ihm eine KI-generierte Antwort mit drei Empfehlungen — und er klickt auf keine einzige Website. Er ruft direkt die Nummer an, die ihm die KI genannt hat.</p><p>Das ist kein Zukunftsszenario. Das ist der Alltag von 93 % aller Suchanfragen, die heute im Google AI Mode gestellt werden. Und dieser Anteil wächst jedes Quartal.</p><p>Dieser Artikel erklärt, warum das passiert, was es konkret für Ihr KMU bedeutet — und welche drei Massnahmen Sie sofort ergreifen können, um auch in einer Welt ohne Klick sichtbar zu sein.</p>",
    },
    {
      type: "richText",
      html: '<p>Dieser Artikel ist der Einstieg in Cluster 1 (KI &amp; GEO). Wie B2B-Käufer heute tatsächlich recherchieren, zeigt <a href="/wissen/b2b-kaeufer-ki-recherche-kmu-schweiz">KI-Recherche im B2B-Einkauf</a>; wie Sie Ihre Fortschritte messbar machen, erklärt <a href="/wissen/ki-sichtbarkeit-messen-tools-kmu">KI-Sichtbarkeit messen</a>.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "93-prozent-ki",
      title: "Was steckt hinter der 93-%-Zahl?",
    },
    {
      type: "richText",
      html: "<p>Die Zahl stammt aus einer Analyse von Semrush über Millionen von Suchanfragen im Google AI Mode (2026). Sie besagt: Bei fast allen Suchanfragen, die Google mit einer KI-generierten Antwort beantwortet, verlässt der Nutzer die Suchseite nicht — er klickt auf keinen Link, besucht keine Website.</p><p>Das ist kein Fehler im System. Es ist das Ziel des Systems.</p><p><strong>Wie Google AI Mode funktioniert</strong><br>Wenn jemand heute eine Frage bei Google stellt, zerlegt die KI diese Frage automatisch in bis zu 16 parallele Unterabfragen (Quelle: Google AI Optimization Guide, Mai 2026). Sie durchsucht gleichzeitig nach Definitionen, Vergleichen, Preisen, Bewertungen und Alternativen — und synthetisiert daraus eine fertige Antwort.</p><p>Der Nutzer bekommt eine Zusammenfassung. Er braucht keine Website mehr aufzurufen, weil die Antwort bereits vollständig ist.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "zahlen-im-ueberblick",
      title: "Die Zahlen im Überblick",
    },
    {
      type: "table",
      headers: ["Zahl", "Bedeutung", "Quelle"],
      rows: [
        ["93 %", "AI-Mode-Suchanfragen enden ohne Klick", "Semrush, 2026"],
        ["83 %", "No-Click-Rate, wenn ein AI Overview erscheint", "Bain, 2025"],
        [
          "38 %",
          "Rückgang organischer Klicks durch AI Overviews",
          "ISB / Carnegie Mellon RCT, Mai 2026",
        ],
        [
          "51 %",
          "B2B-Käufer starten Recherche mit KI statt Google",
          "G2, April 2026, n=1'076",
        ],
        [
          "11 %",
          "Klickrate Platz 1 organisch bei Anfragen mit KI-Funktionen",
          "SISTRIX, März 2026",
        ],
      ],
    },
    {
      type: "richText",
      html: "<p>Zum Vergleich: Noch vor wenigen Jahren klickte rund jeder vierte Nutzer auf das erste organische Suchergebnis. Diese Rate ist bei Anfragen mit KI-Funktionen inzwischen auf rund 11 % gesunken (SISTRIX, März 2026).</p>",
    },
    {
      type: "image",
      src: "/images/blog/ki-suchen-ohne-klick-kmu/infographic.jpg",
      alt: "Zero-Click-Realität: 93 % der KI-Suchanfragen im Google AI Mode enden ohne Website-Klick",
      caption:
        "Zero-Click-Suche: Warum KI-Antworten klassische Website-Klicks verdrängen.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "was-das-bedeutet",
      title: "Was das für Schweizer KMU konkret bedeutet",
    },
    {
      type: "richText",
      html: "<p>Viele KMU-Inhaber fragen sich: «Betrifft mich das überhaupt? Ich habe ja eine lokale Kundschaft.» Die Antwort ist: Ja — und zwar früher als gedacht.</p><p><strong>Szenario 1: Der unsichtbare Treuhänder</strong><br>Ein Unternehmer in Zofingen sucht nach «Treuhänder Zofingen empfehlen». Google AI zeigt ihm drei Namen. Ihr Treuhandbüro ist nicht dabei — nicht weil Sie schlechter sind, sondern weil Ihre Website nie so strukturiert wurde, dass eine KI sie als zitierwürdige Quelle erkennt. Der Anruf geht an jemand anderen.</p><p><strong>Szenario 2: Die unsichtbare Praxis</strong><br>Eine Patientin sucht «Zahnarzt Aarau neue Patienten». Drei Praxen erscheinen in der KI-Antwort — mit Öffnungszeiten, Bewertungsschnitt und einem Satz über die Spezialisierung. Ihre Praxis fehlt. Weil Ihr Google Business Profile nicht vollständig ausgefüllt ist und weil keine strukturierten Daten auf Ihrer Website vorhanden sind.</p>",
    },
    {
      type: "callout",
      variant: "navy",
      body: "«Wir haben gemerkt, dass unsere Anfragen über Google zurückgingen — obwohl wir auf Platz 1 standen. Erst als wir verstanden haben, dass die KI uns einfach nicht zitierte, haben wir gehandelt. Heute kommen rund 30 % unserer digitalen Anfragen aus KI-Quellen.» — Geschäftsführer, Treuhandbüro Aargau (Bexolutions-Kunde, anonym)",
    },
    {
      type: "richText",
      html: '<p><strong>B2B: Die Shortlist entsteht vor dem ersten Website-Besuch</strong><br>Laut einer <a href="https://www.g2.com">G2-Befragung</a> von 1\'076 B2B-Käufern (April 2026) starten 51 % ihre Recherche inzwischen häufiger mit einem KI-Chatbot als mit Google. 85 % dieser Käufer schätzen einen Anbieter höher ein, wenn ein KI-System ihn erwähnt — und 69 % wählten aufgrund einer KI-Empfehlung einen anderen Anbieter als ursprünglich geplant.</p><p>Das bedeutet: Die Shortlist Ihrer potenziellen Kunden entsteht heute, bevor sie Ihre Website je gesehen haben.</p>',
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Der entscheidende Punkt",
      body: "Klassisches SEO (Platz 1 auf Google) schützt Sie nicht mehr vor Unsichtbarkeit. Sie müssen in KI-Antworten zitiert werden — und das passiert nicht automatisch, nur weil Sie gut ranken.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "warum-manche-kmu",
      title: "Warum erscheinen manche KMU in KI-Antworten — und andere nicht?",
    },
    {
      type: "richText",
      html: "<p>KI-Systeme wie Google Gemini, ChatGPT oder Perplexity zitieren keine Websites nach Belieben. Sie bevorzugen Quellen, die bestimmte Signale aufweisen. Eine Analyse von Foundation und AirOps über 5,1 Millionen B2B-KI-Antworten und 57,2 Millionen Zitate (2026) zeigt:</p>",
    },
    {
      type: "list",
      items: [
        "Drittquellen: Reddit (~21 %), YouTube (~13 %), LinkedIn (~11 %) — also fremde Plattformen, nicht Ihre eigene Website",
        "Bewertungsplattformen: G2, Capterra und Software Advice vereinen rund 84 % der Zitate in ihrer Kategorie",
        "Strukturierte Inhalte: Listicles erhalten 21,9 % der KI-Zitate, Artikel 16,7 %, Produktseiten 13,7 %",
        "Aktuelle Inhalte: 83 % der Zitate bei kommerzieller Absicht stammen von Seiten, die in den letzten 12 Monaten aktualisiert wurden",
        "Seiten mit Schema-Markup: 13 % häufiger zitiert als Seiten ohne strukturierte Daten (AirOps, 2026)",
      ],
    },
    {
      type: "richText",
      html: "<p>Das bedeutet umgekehrt: Wer nur auf die eigene Website setzt und keine Präsenz auf Dritt-Plattformen aufbaut, wird in KI-Antworten schlicht nicht erscheinen — egal wie gut seine Website optimiert ist.</p>",
    },
    {
      type: "callout",
      variant: "navy",
      body: "«Viele unserer Kunden kommen zu uns mit der Frage, warum ihr Traffic zurückgeht, obwohl ihr Google-Ranking gut ist. Die Antwort ist fast immer dieselbe: Sie ranken — aber sie werden von der KI nicht zitiert. Das sind zwei völlig verschiedene Spiele, und die meisten KMU spielen noch das falsche.» — Balaram Furrer, CEO Bexolutions Marketing und Vertrieb AG",
    },
    { type: "divider" },

    {
      type: "richText",
      html: "<p>Die gute Nachricht: KI-Sichtbarkeit ist keine Frage des Werbebudgets. Sie ist eine Frage der richtigen Struktur. Hier sind die drei Massnahmen mit dem grössten Hebel für KMU in der Deutschschweiz.</p>",
    },
    {
      type: "sectionHeading",
      id: "massnahme-01",
      eyebrow: "MASSNAHME 01",
      heading: "Ihr Google Business Profile auf KI trimmen",
    },
    {
      type: "richText",
      html: "<p>Das Google Business Profile (GBP) ist der direkteste Hebel für lokale KI-Sichtbarkeit. KI-Systeme lesen strukturierte Daten aus dem GBP als primäre Quelle für lokale Unternehmensinformationen.</p>",
    },
    {
      type: "list",
      items: [
        "Füllen Sie alle Felder vollständig aus: Kategorie, Beschreibung, Leistungen, Öffnungszeiten, Attribute",
        "Laden Sie wöchentlich ein GBP-Update hoch (Beiträge, Angebote, Fotos)",
        "Antworten Sie auf jede Google-Bewertung — die KI liest auch die Antworten",
        "Nutzen Sie in Ihrer GBP-Beschreibung die Fachbegriffe, nach denen Ihre Kunden suchen",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "massnahme-02",
      eyebrow: "MASSNAHME 02",
      heading: "Inhalte so strukturieren, dass KI sie versteht",
    },
    {
      type: "richText",
      html: "<p>KI-Systeme bevorzugen Inhalte, die klar, übersichtlich und direkt beantwortend sind. Für KMU-Websites bedeutet das:</p>",
    },
    {
      type: "list",
      items: [
        "Jede wichtige Frage Ihrer Kunden bekommt einen eigenen Abschnitt mit einer klaren Überschrift",
        "Beginnen Sie jeden Abschnitt mit der Kernantwort — nicht mit einer Einleitung",
        "Bauen Sie auf Ihrer Website eine FAQ-Sektion auf, die echte Kundenfragen beantwortet",
        "Aktualisieren Sie bestehende Seiten mindestens einmal pro Quartal — veraltete Inhalte verlieren KI-Zitate dreimal schneller (AirOps, 2026)",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "massnahme-03",
      eyebrow: "MASSNAHME 03",
      heading: "Präsenz auf den Plattformen aufbauen, die KI zitiert",
    },
    {
      type: "richText",
      html: "<p>Da KI primär Drittquellen zitiert, müssen Sie dort präsent sein, wo die KI nachschaut. Für Schweizer KMU im B2B-Bereich bedeutet das:</p>",
    },
    {
      type: "list",
      items: [
        "LinkedIn: Regelmässige Beiträge von Ihnen persönlich (nicht nur als Firmenseite). KI zitiert bevorzugt Accounts, die in den vier Wochen vor der Suchanfrage mindestens 5 Beiträge veröffentlicht haben (Semrush, 2026)",
        "Google-Bewertungen: Mindestens 10 aktuelle, detaillierte Bewertungen sind ein wichtiges Vertrauenssignal für KI-Systeme",
        "Branchenverzeichnisse: Für B2B relevant sind G2, Capterra und branchenspezifische Plattformen — ein vollständiger, verifizierter Eintrag reicht",
      ],
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Fallbeispiel (anonymisiert)",
      body: "Ein Dienstleistungsunternehmen aus dem Kanton Aargau (15 MA, Beratungsbranche) setzte die drei Massnahmen innerhalb von 6 Wochen um: GBP vollständig ausgefüllt, 8 Blogartikel mit FAQ-Schema nachgerüstet, LinkedIn-Kadenz gestartet (2–3 Posts/Woche). Ergebnis nach 90 Tagen: organische Anfragen +18 %, erste nachweisliche Erwähnungen in ChatGPT-Antworten zu Branchenfragen, Google-Bewertungsschnitt von 4,2 auf 4,7 gestiegen.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "seo-strategie",
      title: "Was bedeutet das für Ihre SEO-Strategie?",
    },
    {
      type: "richText",
      html: '<p>Klassisches SEO ist nicht tot. Aber es reicht alleine nicht mehr. Die neue Realität für Schweizer KMU lautet:</p><p><strong>Früher:</strong> Gut ranken → Traffic → Anfragen.<br><strong>Heute:</strong> In KI-Antworten zitiert werden → Vertrauen → Direktkontakt.</p><p>Dabei ist eine Zahl besonders bemerkenswert: KI-Suchbesucher, die doch auf eine Website klicken, konvertieren im Durchschnitt 4,4 Mal besser als klassische organische Suchbesucher (Semrush, 2026). Der Traffic wird weniger — aber qualitativ wertvoller.</p><p>Das ist die Chance für KMU, die frühzeitig handeln: Wer heute in KI-Antworten erscheint, erreicht die kaufbereitesten Interessenten — mit weniger Streuung und mehr Wirkung. Wie Sie systematisch <a href="/wissen/geo-readiness-kmu-chatgpt-google-ai-mode">GEO Readiness</a> aufbauen, zeigt unser Folgeartikel.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "haeufige-fragen",
      title: "Häufige Fragen zu KI-Suchen und KMU",
    },
    {
      type: "richText",
      html: "<p><strong>Gilt die 93-%-Zahl auch für lokale Suchen in der Schweiz?</strong><br>Die Semrush-Analyse bezieht sich primär auf den US-Markt. Im EU- und Schweizer Raum ist der Google AI Mode (Stand Juli 2026) noch nicht vollständig ausgerollt. Die Tendenz ist dieselbe, der Effekt ist lokal noch etwas geringer — aber wächst. Empfehlung: Jetzt vorbereiten, bevor der Rollout abgeschlossen ist.</p><p><strong>Muss ich jetzt in KI-Chatbots werben?</strong><br>Nein. KI-Sichtbarkeit entsteht nicht durch bezahlte Anzeigen in KI-Systemen, sondern durch die richtige Struktur Ihrer organischen Inhalte, Ihrer Drittplattform-Präsenz und Ihres Google Business Profiles. Das ist eine einmalige Investition, keine laufende Werbeausgabe.</p><p><strong>Was ist GEO Readiness?</strong><br>GEO steht für Generative Engine Optimization — die Optimierung Ihrer digitalen Präsenz für KI-Suchmaschinen. Während klassisches SEO auf Suchmaschinen-Algorithmen zielt, zielt GEO darauf, in den Antworten von KI-Systemen zitiert zu werden. Den praktischen Einstieg finden Sie im Folgeartikel zu GEO Readiness weiter oben in diesem Text.</p><p><strong>Wie lange dauert es, bis Massnahmen wirken?</strong><br>GBP-Optimierungen können innerhalb von 2–4 Wochen sichtbar werden. LinkedIn-Präsenz und Inhaltsstruktur brauchen erfahrungsgemäss 6–12 Wochen, bis KI-Systeme sie regelmässig zitieren. Es gibt keine Garantien — aber die ersten Ergebnisse unserer Kunden in der Deutschschweiz zeigen messbare Veränderungen innerhalb von 60–90 Tagen.</p><p><strong>Muss meine Website komplett neu gebaut werden?</strong><br>In den meisten Fällen nein. Die entscheidenden Massnahmen (Inhaltsstruktur, FAQ-Sektion, Schema-Markup) können auf bestehenden Websites umgesetzt werden. In unserem kostenlosen Sichtbarkeits-Check zeigen wir Ihnen konkret, was bei Ihnen prioritär angepasst werden sollte.</p>",
    },
    { type: "divider" },

    { type: "sectionTitle", id: "fazit", title: "Fazit" },
    {
      type: "richText",
      html: '<p>Die Art, wie Menschen online nach Produkten und Dienstleistungen suchen, hat sich fundamental verändert. 93 % der KI-Suchanfragen enden ohne Klick — nicht weil die Suchenden desinteressiert sind, sondern weil die KI ihnen die Antwort bereits geliefert hat.</p><p>Für Schweizer KMU bedeutet das: Sichtbarkeit entsteht nicht mehr allein durch gutes Google-Ranking. Sie entsteht dadurch, in den Antworten der KI-Systeme als vertrauenswürdige Quelle zu erscheinen. Wer jetzt handelt — mit optimiertem GBP, strukturierten Inhalten und aktiver Drittplattform-Präsenz — positioniert sich für die nächste Generation der Kundengewinnung.</p><p><strong>Ihr nächster Schritt:</strong> Starten Sie mit Massnahme 1 und prüfen Sie, ob Ihr Google Business Profile vollständig und aktuell ist. Das ist der schnellste Hebel — und er kostet nichts ausser Zeit.</p><p>Möchten Sie professionelle Unterstützung? <a href="/kontakt">Kontakt aufnehmen</a></p>',
    },
  ],
} satisfies IBlog
