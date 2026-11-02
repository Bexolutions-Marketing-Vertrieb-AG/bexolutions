import type { IBlog } from "~/types/dto/IBlog"

export default {
  slug: "keyword-recherche-kmu-schweiz-suchbegriffe-finden",
  category: "SEO für KMU",
  readTime: "8 Min. Lesezeit",
  date: "Juli 2026",
  datePublished: "2026-07-12",
  title: "Keyword-Recherche für KMU: Die richtigen Suchbegriffe finden",
  subtitle:
    "In 5 Schritten zur Keyword-Liste — mit kostenlosen Tools und Helvetismen",
  tagline:
    "In 5 Schritten zur Keyword-Liste — kostenlose Tools, Helvetismen und Keyword-Raster",
  heroImage:
    "/images/blog/keyword-recherche-kmu-schweiz-suchbegriffe-finden/hero.jpg",
  audioUrl: "/audio/blog/keyword-recherche-kmu-schweiz-suchbegriffe-finden.m4a",
  tldr: {
    title: "TL;DR — Das Wichtigste in 60 Sekunden",
    body: "Keyword-Recherche ist die Grundlage jeder SEO-Strategie: Wer auf die falschen Begriffe optimiert, rankt für Suchanfragen, die niemand stellt. Die richtige Methode für Schweizer KMU in 5 Schritten: Seed-Keywords sammeln, Suchintention verstehen, Long-Tail-Keywords priorisieren, Schweizer Sprachbesonderheiten berücksichtigen und Keywords den richtigen Seiten zuordnen. Kostenlose Tools reichen für den Einstieg vollständig aus.",
  },
  author: {
    name: "Balaram Furrer",
    bio: "Balaram Furrer ist CEO von Bexolutions Marketing und Vertrieb AG. Er begleitet Schweizer KMU bei der digitalen Sichtbarkeit im Zeitalter der KI-Suche.",
  },
  toc: [
    {
      id: "was-ist-keyword-recherche",
      label: "Was ist Keyword-Recherche?",
    },
    {
      id: "vier-keyword-typen",
      label: "Die 4 Keyword-Typen",
    },
    {
      id: "suchintention",
      label: "Suchintention: Der unterschätzte Faktor",
    },
    { id: "schritt-01", label: "Schritt 1: Seed-Keywords sammeln" },
    { id: "schritt-02", label: "Schritt 2: Daten mit Tools abrufen" },
    { id: "schritt-03", label: "Schritt 3: Nach Priorität filtern" },
    { id: "schritt-04", label: "Schritt 4: Schweizer Spezifika" },
    { id: "schritt-05", label: "Schritt 5: Keywords Seiten zuordnen" },
    { id: "keyword-raster", label: "Das Keyword-Raster" },
    { id: "haeufige-fehler", label: "Häufige Fehler" },
    { id: "haeufige-fragen", label: "Häufige Fragen" },
    { id: "fazit", label: "Fazit" },
  ],
  seo: {
    description:
      "Keyword-Recherche für Schweizer KMU: In 5 Schritten die richtigen Suchbegriffe finden — mit kostenlosen Tools, Schweizer Spezifika und einem ausfüllbaren Keyword-Raster.",
    ogImage:
      "/images/blog/keyword-recherche-kmu-schweiz-suchbegriffe-finden/hero.jpg",
  },
  blocks: [
    {
      type: "richText",
      html: '<p>Stellen Sie sich vor, Sie betreiben eine Treuhandkanzlei in Aarau und optimieren Ihre Website für das Keyword «Treuhand». Das Problem: Für «Treuhand» suchen täglich Tausende Menschen — aber Ihre potenziellen Kunden suchen nach «Treuhand Aarau», «Jahresabschluss KMU Aargau» oder «Steuerberatung kleine Unternehmen Schweiz». Wer auf das falsche Keyword optimiert, baut SEO — aber für die falsche Zielgruppe.</p><p>Keyword-Recherche ist der Schritt, der entscheidet, ob Ihre SEO-Arbeit die richtigen Menschen findet. Dieser Artikel zeigt, wie Sie in 5 Schritten eine praxistaugliche Keyword-Liste aufbauen — ohne teure Tools und mit Fokus auf die Schweizer Realität.</p><p>Dieser Artikel ist Artikel 4 im SEO-Cluster. Den Überblick gibt der <a href="/wissen/seo-schweizer-kmu-einstiegsguide-2026">SEO-Einstiegsguide für Schweizer KMU</a>; die Diagnose beschreibt <a href="/wissen/warum-kmu-bei-google-unsichtbar-ursachen-fixes">warum KMU bei Google unsichtbar bleiben</a>; die Budgetfrage klärt <a href="/wissen/seo-ohne-werbebudget-organische-sichtbarkeit-kmu">SEO ohne Werbebudget</a>. Hier geht es um das Handwerk: die richtigen Keywords finden.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "was-ist-keyword-recherche",
      title: "Was ist Keyword-Recherche — und warum ist sie entscheidend?",
    },
    {
      type: "richText",
      html: "<p>Keyword-Recherche ist der Prozess, herauszufinden, welche Begriffe Ihre potenziellen Kunden bei Google eingeben, wenn sie nach Ihrer Leistung suchen. Das klingt einfach — ist es aber oft nicht. Denn Kunden suchen häufig anders, als Unternehmen über ihre eigenen Leistungen sprechen.</p>",
    },
    {
      type: "table",
      headers: ["Was das Unternehmen sagt", "Was der Kunde sucht"],
      rows: [
        ["Gebäudehülle", "Fassade streichen lassen"],
        ["Sanitärinstallation", "Wasserhahn ersetzen"],
        ["Steueroptimierung", "Steuern sparen KMU Schweiz"],
        ["Physiotherapie", "Rückenschmerzen Physiotherapeut Zürich"],
        ["Personalberatung", "Mitarbeiter finden KMU Aargau"],
      ],
    },
    {
      type: "richText",
      html: "<p>Diese Lücke zwischen Unternehmenssprache und Kundensprache ist einer der häufigsten Gründe, warum Websites nicht ranken. Die Keyword-Recherche schliesst diese Lücke.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "vier-keyword-typen",
      title: "Die 4 Keyword-Typen, die Schweizer KMU kennen müssen",
    },
    {
      type: "table",
      headers: [
        "Typ",
        "Beispiel",
        "Suchvolumen",
        "Wettbewerb",
        "Empfehlung KMU",
      ],
      rows: [
        [
          "Short-Tail (1–2 Wörter)",
          "«Treuhand», «Elektriker»",
          "Sehr hoch",
          "Sehr hoch",
          "Meist zu kompetitiv — vermeiden",
        ],
        [
          "Mid-Tail (2–3 Wörter)",
          "«Treuhand Zürich», «Elektriker Winterthur»",
          "Mittel",
          "Mittel",
          "Realistisch für lokale KMU",
        ],
        [
          "Long-Tail (3+ Wörter)",
          "«Jahresabschluss KMU Aargau», «Elektriker Notfall Winterthur 24h»",
          "Niedrig",
          "Niedrig",
          "Höchste Priorität für Einstieg",
        ],
        [
          "Frage-Keywords",
          "«Was kostet ein Jahresabschluss?», «Wie lange dauert ein Wohnungsumbau?»",
          "Variabel",
          "Niedrig",
          "Ideal für Blog und FAQ",
        ],
      ],
    },
    {
      type: "image",
      src: "/images/blog/keyword-recherche-kmu-schweiz-suchbegriffe-finden/infographic.jpg",
      alt: "Keyword-Recherche in 5 Schritten für Schweizer KMU — von Seed-Keywords bis Keyword-Mapping",
      caption:
        "Überblick: Keyword-Recherche in fünf Schritten — von Seed-Keywords bis zur Seitenzuordnung.",
    },
    {
      type: "richText",
      html: "<p>Die wichtigste Erkenntnis: Long-Tail-Keywords haben zwar weniger Suchanfragen, aber dafür höhere Konversionsraten. Wer «Elektriker Notfall Winterthur 24h» tippt, sucht gerade jetzt einen Elektriker — nicht in einem Monat. Diese Absicht ist Gold wert.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "suchintention",
      title: "Suchintention: Der unterschätzte Faktor",
    },
    {
      type: "richText",
      html: "<p>Suchintention (Search Intent) beschreibt, was jemand wirklich will, wenn er einen Begriff eingibt. Google versteht Suchintention besser als je zuvor — und rankt Seiten danach, ob sie die Intention erfüllen, nicht nur ob sie das Keyword enthalten.</p>",
    },
    {
      type: "table",
      headers: [
        "Suchintention",
        "Was der Nutzer will",
        "Beispiel",
        "Passender Inhalt",
      ],
      rows: [
        [
          "Informational",
          "Etwas verstehen oder lernen",
          "«Was ist ein Jahresabschluss?»",
          "Blogbeitrag, FAQ, Erklärseite",
        ],
        [
          "Navigational",
          "Eine bestimmte Website finden",
          "«Muster Treuhand Aarau»",
          "Startseite, Über-uns-Seite",
        ],
        [
          "Commercial",
          "Optionen vergleichen, noch nicht kaufen",
          "«Treuhand Aarau Vergleich»",
          "Vergleichsseite, Leistungsübersicht",
        ],
        [
          "Transactional",
          "Kaufen, buchen, anfragen",
          "«Elektriker Notfall Winterthur jetzt»",
          "Leistungsseite mit CTA, Kontaktformular",
        ],
      ],
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Praktischer Intentionstest",
      body: "Geben Sie Ihr Ziel-Keyword im Inkognito-Modus in Google ein. Was zeigt Google auf Seite 1? Blogbeiträge, Leistungsseiten oder Verzeichnisse? Das ist die Suchintention — und Ihr Inhalt muss dasselbe Format treffen. Wer für ein transaktionales Keyword einen Blogbeitrag erstellt, wird nicht ranken.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "fuenf-schritte",
      title: "In 5 Schritten zur eigenen Keyword-Liste",
    },
    {
      type: "sectionHeading",
      id: "schritt-01",
      eyebrow: "SCHRITT 01",
      heading: "Seed-Keywords sammeln",
      body: "Zeitaufwand: 30 Minuten",
    },
    {
      type: "richText",
      html: "<p>Seed-Keywords sind die Ausgangsbegriffe, aus denen Sie dann breitere Listen generieren. Schreiben Sie ohne Tools auf, welche Begriffe Ihre Kunden verwenden — nicht, welche Sie selbst benutzen.</p><p>So sammeln Sie Seed-Keywords:</p>",
    },
    {
      type: "list",
      items: [
        "Telefonate und E-Mails: Wie beschreiben Kunden ihr Problem, wenn sie bei Ihnen anrufen oder schreiben?",
        "Google-Vervollständigung: Geben Sie Ihre Hauptleistung in Google ein und notieren Sie die Autocomplete-Vorschläge (grau, unter dem Suchfeld)",
        "«Ähnliche Suchanfragen»: Am Ende jeder Google-Seite stehen 8 verwandte Begriffe — wertvolles Rohmaterial",
        "Mitbewerber-Seiten: Welche Begriffe benutzen Ihre wichtigsten Mitbewerber in Titeln und Texten?",
      ],
    },
    {
      type: "callout",
      variant: "navy",
      title: "Ziel",
      body: "20–50 Seed-Keywords in einer einfachen Liste. Qualität spielt noch keine Rolle — erst sammeln, dann filtern.",
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "schritt-02",
      eyebrow: "SCHRITT 02",
      heading: "Keyword-Daten mit kostenlosen Tools abrufen",
      body: "Zeitaufwand: 1–2 Stunden",
    },
    {
      type: "richText",
      html: "<p>Mit Ihren Seed-Keywords gehen Sie jetzt in die Tools, um Suchvolumen, Varianten und Schwierigkeitsgrad herauszufinden.</p><p>Kostenlose Tools für Schweizer KMU:</p>",
    },
    {
      type: "table",
      headers: ["Tool", "Was es liefert", "Einschränkung"],
      rows: [
        [
          "Google Keyword Planner",
          "Suchvolumen, CPC, Varianten (kostenlos mit Google-Account)",
          "Erfordert Ads-Account; zeigt Ranges statt genaue Zahlen",
        ],
        [
          "Google Search Console",
          "Echte Suchanfragen, die schon Traffic bringen",
          "Nur für bereits indexierte Seiten",
        ],
        [
          "Google Autocomplete",
          "Reale Suchbegriffe direkt aus Google",
          "Kein Suchvolumen, nur qualitativ",
        ],
        [
          "AnswerThePublic (kostenlos)",
          "Frage-Keywords und Präpositions-Keywords zu einem Begriff",
          "3 kostenlose Suchen/Tag",
        ],
        [
          "Ubersuggest (kostenlos)",
          "Suchvolumen, Keyword-Difficulty, Varianten",
          "3 kostenlose Suchen/Tag",
        ],
        [
          "kwfinder (Testversion)",
          "Sehr präzise Keyword-Difficulty, lokale Daten",
          "10 Suchen/24h kostenlos",
        ],
      ],
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Empfehlung für den Einstieg",
      body: "Google Keyword Planner + Google Search Console sind kostenlos und liefern valide Daten. AnswerThePublic ergänzt mit Frage-Keywords. Das reicht für die erste Keyword-Liste.",
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "schritt-03",
      eyebrow: "SCHRITT 03",
      heading: "Keywords nach Priorität filtern",
      body: "Zeitaufwand: 1 Stunde",
    },
    {
      type: "richText",
      html: "<p>Nicht alle Keywords sind gleich wertvoll. Filtern Sie Ihre Liste anhand von drei Kriterien:</p>",
    },
    {
      type: "table",
      headers: ["Kriterium", "Was es bedeutet", "Empfehlung KMU"],
      rows: [
        [
          "Suchvolumen",
          "Wie viele Menschen suchen monatlich nach diesem Begriff?",
          "Lokal: 10–500/Monat ist realistisch und wertvoll",
        ],
        [
          "Keyword-Difficulty (KD)",
          "Wie schwer ist es, auf Seite 1 zu ranken? (0–100)",
          "Unter 30 bevorzugen — unter 20 für Einstieg ideal",
        ],
        [
          "Relevanz",
          "Führt dieses Keyword zu einem Kunden, der meine Leistung braucht?",
          "Lieber weniger Keywords mit hoher Relevanz",
        ],
      ],
    },
    {
      type: "callout",
      variant: "navy",
      body: "Das Goldene Dreieck für Schweizer KMU: Keywords mit lokalem Bezug, Keyword-Difficulty unter 30 und klarer transaktionaler oder kommerzieller Suchintention. Diese Kombination ist der realistischste Weg auf Seite 1.",
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Suchvolumen richtig einordnen",
      body: "50 Suchanfragen/Monat für «Elektriker Notfall Winterthur 24h» sind wertvoller als 5'000 Suchanfragen für «Elektriker Schweiz». Wer den Notfall-Elektriker in Winterthur sucht, ruft heute noch an. Wer «Elektriker Schweiz» sucht, ist oft noch in der Orientierungsphase. Kleine Suchvolumen mit klarer Kaufabsicht schlagen grosse Suchvolumen ohne Konversionsabsicht.",
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "schritt-04",
      eyebrow: "SCHRITT 04",
      heading: "Schweizer Sprachbesonderheiten berücksichtigen",
      body: "Zeitaufwand: 30 Minuten",
    },
    {
      type: "richText",
      html: "<p>Das ist der Schritt, den die meisten deutschen SEO-Anleitungen überspringen — und der für Schweizer KMU entscheidend ist.</p><p><strong>Helvetismen: Schweizer Kunden suchen anders als Deutsche</strong></p>",
    },
    {
      type: "table",
      headers: [
        "Deutsche Bezeichnung",
        "Schweizer Bezeichnung",
        "Relevanz für SEO",
      ],
      rows: [
        [
          "Friseur / Frisörsalon",
          "Coiffeur / Coiffure",
          "Hoch — Schweizer suchen «Coiffeur»",
        ],
        [
          "Reifen / Reifenhandel",
          "Pneu / Pneuservice",
          "Hoch — «Pneu wechseln Winterthur»",
        ],
        ["Fahrrad / Fahrradladen", "Velo / Veloladen", "Mittel–Hoch"],
        [
          "Kneipe / Gastwirtschaft",
          "Beiz / Wirtschaft",
          "Regional unterschiedlich",
        ],
        [
          "Wohnung / Wohnungsbau",
          "Wohnung (gleich, aber «Wohnung mieten Zug» statt «mieten» allein)",
          "Lokal immer mit Kanton/Stadt",
        ],
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Mehrsprachigkeit: Separate Keyword-Listen je Sprache</strong><br>Wenn Sie in einem zweisprachigen Kanton tätig sind (Freiburg, Bern, Wallis) oder national, brauchen Sie separate Keyword-Listen und separate Seiten je Sprache. Google indexiert Deutsch und Französisch getrennt. Eine deutschsprachige Leistungsseite rankt nicht für französischsprachige Suchanfragen — egal wie gut sie optimiert ist.</p><p><strong>Kantonal und regional denken</strong></p>",
    },
    {
      type: "list",
      items: [
        "«Treuhand Aarau» schlägt «Treuhand Aargau» bei Nutzern in Aarau",
        "«Zahnarzt Zürich Kreis 6» ist spezifischer als «Zahnarzt Zürich»",
        "Kantonsnamen und Städtenamen konsequent kombinieren: [Leistung] [Stadt] als Grundformel",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "schritt-05",
      eyebrow: "SCHRITT 05",
      heading: "Keywords den richtigen Seiten zuordnen",
      body: "Zeitaufwand: 1 Stunde",
    },
    {
      type: "richText",
      html: "<p>Eine Keyword-Liste ohne Seitenzuordnung ist nur halb fertig. Jede Seite Ihrer Website sollte ein klares Primär-Keyword und 2–3 Sekundär-Keywords haben. Das Prinzip: Eine Seite, ein Haupt-Keyword.</p><p>Das Keyword-Mapping-Prinzip:</p>",
    },
    {
      type: "list",
      items: [
        "Startseite: Breitestes Keyword (z.B. «Treuhand Aarau»)",
        "Leistungsseiten: Je eine Seite pro Leistung mit spezifischem Keyword («Jahresabschluss KMU Aarau»)",
        "Blog-Artikel: Long-Tail und Frage-Keywords («Was kostet ein Jahresabschluss in der Schweiz?»)",
        "Über-uns-Seite: Navigationale Keywords (Firmenname + Ort)",
      ],
    },
    {
      type: "callout",
      variant: "navy",
      body: "Keyword-Kannibalisierung vermeiden: Wenn zwei Seiten auf dasselbe Keyword optimiert sind, konkurrieren sie gegeneinander — und Google rankt oft beide schlechter. Jedes Keyword nur einer Seite zuordnen.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "keyword-raster",
      title: "Das Keyword-Raster: So sieht es in der Praxis aus",
    },
    {
      type: "richText",
      html: "<p>So sieht ein ausgefülltes Keyword-Raster in der Praxis aus — am Beispiel eines Treuhandbueros in Aarau. Bauen Sie dasselbe Raster für Ihre eigenen Leistungen und Keywords auf, bevor Sie mit der Seitenoptimierung beginnen.</p>",
    },
    {
      type: "table",
      headers: [
        "Seite",
        "Primär-Keyword",
        "Suchvolumen/Mt.",
        "KD",
        "Suchintention",
        "Status",
      ],
      rows: [
        ["Startseite", "Treuhand Aarau", "140", "22", "Transaktional", "Offen"],
        [
          "Leistungsseite: Steuerberatung",
          "Steuerberatung KMU Aarau",
          "90",
          "18",
          "Transaktional",
          "Offen",
        ],
        [
          "Leistungsseite: Jahresabschluss",
          "Jahresabschluss KMU Aargau",
          "70",
          "15",
          "Transaktional",
          "Offen",
        ],
        [
          "Blog-Artikel 1",
          "Was kostet ein Jahresabschluss Schweiz",
          "50",
          "12",
          "Informational",
          "Offen",
        ],
        [
          "Blog-Artikel 2",
          "Steuern sparen KMU Schweiz Tipps",
          "110",
          "24",
          "Commercial",
          "Offen",
        ],
        [
          "FAQ-Seite",
          "Häufige Fragen Steuerberatung KMU",
          "30",
          "10",
          "Informational",
          "Offen",
        ],
      ],
    },
    {
      type: "richText",
      html: "<p>Beispiel: Treuhandbuero Muster AG, Aarau. Alle Werte sind Richtwerte (Google Keyword Planner / Ubersuggest, Juli 2026). Ersetzen Sie die Beispiele durch Ihre eigenen Leistungen und Keywords — das Raster ist Ihr Arbeitsplan für die On-Page-Optimierung.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "haeufige-fehler",
      title: "Häufige Fehler bei der Keyword-Recherche",
    },
    {
      type: "table",
      headers: ["Fehler", "Warum er schadet", "Lösung"],
      rows: [
        [
          "Auf Short-Tail-Keywords fokussieren",
          "Wettbewerb zu gross für KMU",
          "Long-Tail und lokale Keywords priorisieren",
        ],
        [
          "Unternehmenssprache statt Kundensprache",
          "Kunden finden die Seite nicht",
          "Telefonate und E-Mails als Quellen nutzen",
        ],
        [
          "Kein Suchvolumen prüfen",
          "Aufwand für Keywords, die niemand sucht",
          "Mindestens Google Keyword Planner nutzen",
        ],
        [
          "Suchintention ignorieren",
          "Falsches Format für das Keyword",
          "Zuerst SERP prüfen, dann schreiben",
        ],
        [
          "Keyword-Kannibalisierung",
          "Seiten konkurrieren gegeneinander",
          "Keyword-Mapping: 1 Keyword = 1 Seite",
        ],
        [
          "Deutsche Begriffe für Schweizer Suchen",
          "Schweizer Kunden suchen Helvetismen",
          "Separate Schweizer Keyword-Liste erstellen",
        ],
      ],
    },
    {
      type: "callout",
      variant: "navy",
      title: "Erkenntnis aus der Praxis",
      body: "«Der häufigste Fehler, den wir bei Schweizer KMU sehen: Sie optimieren auf die Begriffe, die sie selbst benutzen — nicht auf die, die ihre Kunden tippen. Ein Treuhandbüro schreibt «Steueroptimierung» auf der Website, aber ihre Kunden googeln «Steuern sparen Aargau KMU». Ein Coiffeur schreibt «Haarpflege», aber seine Kunden suchen «Coiffeur Aarau». Keyword-Recherche ist im Kern Empathie: Denken wie Ihre Kunden, nicht wie Ihr Berufsstand.» — Balaram Furrer, CEO Bexolutions",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "haeufige-fragen",
      title: "Häufige Fragen",
    },
    {
      type: "richText",
      html: "<p><strong>Wie viele Keywords brauche ich für den Start?</strong><br>Für die meisten lokalen KMU reichen 10–20 gut gewählte Keywords für den Anfang. Lieber 15 Keywords mit echtem Potenzial als 200 mit halbgarer Recherche. Eine solide Keyword-Liste umfasst: 3–5 Hauptkeywords für Leistungsseiten, 5–10 Long-Tail-Keywords für Blog-Artikel und FAQ, und 2–3 Frage-Keywords. Mit diesem Set lassen sich 8–12 optimierte Seiten aufbauen — ein solider Start.</p><p><strong>Wie aktuell müssen Keyword-Daten sein?</strong><br>Für lokale Dienstleistungs-Keywords (Handwerk, Treuhand, Gesundheit) sind die Suchvolumen relativ stabil und ändern sich nicht dramatisch von Monat zu Monat. Eine Keyword-Recherche mit aktuellen Daten ist 12–18 Monate gültig. Ausnahme: saisonale Branchen (Gartenbau, Steuerberatung vor Abgabefristen) sollten ihre Keywords vor der Hauptsaison aktiv prüfen.</p><p><strong>Soll ich auch Keywords in anderen Sprachen recherchieren?</strong><br>Nur wenn Sie aktiv Kunden in anderen Sprachregionen bedienen und entsprechende Inhalte auf Ihrer Website anbieten. Eine deutschsprachige Leistungsseite rankt nicht für französischsprachige Suchanfragen. Wenn Sie national oder in zweisprachigen Kantonen tätig sind: Erstellen Sie separate Keyword-Listen und separate Seiten je Sprache — und hinterlegen Sie hreflang-Tags, damit Google die Sprachversionen korrekt zuordnen kann.</p><p><strong>Brauche ich ein bezahltes Keyword-Tool?</strong><br>Für die meisten Schweizer KMU: Nein, nicht für den Einstieg. Google Keyword Planner, Google Search Console und Google Autocomplete liefern ausreichend valide Daten für eine erste Keyword-Strategie. Kostenpflichtige Tools (Semrush, Sistrix, kwfinder) lohnen sich, wenn Sie SEO systematisch skalieren wollen, präzisere Difficulty-Werte brauchen oder Mitbewerber-Analysen vertiefen möchten. Wer 50–100 Keywords aktiv tracken will, kommt um ein kostenpflichtiges Tool kaum herum — aber das ist ein Problem von übermorgen.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "fazit",
      title: "Fazit: Keywords sind der Kompass Ihrer SEO-Strategie",
    },
    {
      type: "richText",
      html: '<p>Ohne Keyword-Recherche ist SEO Raten. Mit einer soliden Keyword-Liste ist es Arbeit mit Richtung. Die 5 Schritte in diesem Artikel geben Ihnen die Grundlage, die alle weiteren Massnahmen — Seitenstruktur, Inhalte, Backlinks — erst sinnvoll macht.</p><p>Der wichtigste Grundsatz bleibt: Denken Sie wie Ihre Kunden, nicht wie Ihr Berufsstand. Die Begriffe, die Kunden tippen, sind die Keywords, die Sie brauchen.</p><p><strong>Ihr nächster Schritt</strong><br>Nehmen Sie jetzt ein leeres Dokument und schreiben Sie Ihre 3 wichtigsten Leistungen auf. Dann öffnen Sie Google, geben Sie jede Leistung + Ihren Kanton ein und notieren Sie alle Autocomplete-Vorschläge. Das sind Ihre ersten Seed-Keywords — kostenlos, in 15 Minuten, ohne Tool.</p><p>Möchten Sie professionelle Keyword-Recherche? <a href="/kontakt">Kontakt aufnehmen</a></p>',
    },
  ],
} satisfies IBlog
