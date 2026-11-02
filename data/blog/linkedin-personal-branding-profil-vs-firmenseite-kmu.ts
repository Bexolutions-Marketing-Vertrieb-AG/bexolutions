import type { IBlog } from "~/types/dto/IBlog"

export default {
  slug: "linkedin-personal-branding-profil-vs-firmenseite-kmu",
  category: "LinkedIn & Personal Branding",
  readTime: "8 Min. Lesezeit",
  date: "Juli 2026",
  datePublished: "2026-07-18",
  title:
    "Personal Branding auf LinkedIn — Warum Ihr Profil besser rankt als die Firmenseite",
  subtitle:
    "Personenprofile erreichen bis 5× mehr Reichweite — so nutzen Sie das",
  tagline:
    "Personenprofile erreichen bis 5× mehr Reichweite als Firmenseiten — so nutzen Sie das",
  heroImage:
    "/images/blog/linkedin-personal-branding-profil-vs-firmenseite-kmu/hero.jpg",
  audioUrl:
    "/audio/blog/linkedin-personal-branding-profil-vs-firmenseite-kmu.m4a",
  tldr: {
    title: "TL;DR — Das Wichtigste in 60 Sekunden",
    body: "Firmenseiten erhalten laut Sprout Social Q1 2026 (52+ Millionen Posts analysiert) nur 1–2 % Engagement, Personenprofile 4,7 %. Der LinkedIn-Algorithmus verteilt Firmenseiten-Posts nur an 5 % des Feeds — Personenprofile dominieren 65 % (DSMN8). Zwischen 2024 und 2026 ist die organische Reichweite von Firmenseiten um 60–66 % eingebrochen — bei Personenprofilen nur um 50 %. Das bedeutet: Das persönliche Profil des Inhabers ist der primäre LinkedIn-Kanal, die Firmenseite die Unterstützungsinfrastruktur. Dieser Artikel erklärt, warum — und wie Sie Ihr Profil als Reichweitenhebel optimieren.",
  },
  author: {
    name: "Balaram Furrer",
    bio: "Balaram Furrer ist CEO von Bexolutions Marketing und Vertrieb AG. Er begleitet Schweizer KMU bei der digitalen Sichtbarkeit im Zeitalter der KI-Suche.",
  },
  toc: [
    {
      id: "zahlen-vergleich",
      label: "Die Zahlen: Personenprofil vs. Firmenseite",
    },
    {
      id: "algorithmus-grund",
      label: "Der Algorithmus-Grund: Warum LinkedIn so entschieden hat",
    },
    {
      id: "bedeutung-kmu",
      label: "Was das für Schweizer KMU-Inhaber bedeutet",
    },
    {
      id: "profil-elemente",
      label: "8 Profil-Elemente, die den Unterschied machen",
    },
    {
      id: "strategie-kombinieren",
      label: "Profil und Firmenseite kombinieren",
    },
    { id: "haeufige-fragen", label: "Häufige Fragen" },
    { id: "fazit", label: "Fazit" },
  ],
  seo: {
    description:
      "Warum LinkedIn-Personenprofile 5× mehr Reichweite erzielen als Firmenseiten — der algorithmische Grund und wie Sie Ihr Profil als primären Kanal aufbauen.",
    ogImage:
      "/images/blog/linkedin-personal-branding-profil-vs-firmenseite-kmu/hero.jpg",
  },
  blocks: [
    {
      type: "richText",
      html: '<p>Ein KMU-Inhaber postet auf der Firmenseite. 200 Impressionen, 4 Likes. Derselbe Inhalt, gleicher Tag, von seinem persönlichen Profil: 3.800 Impressionen, 47 Likes, 12 Kommentare. Gleicher Inhalt. Gleiche Zielgruppe. Komplett anderes Ergebnis.</p><p>Das ist kein Einzelfall. Es ist Systemrealität. LinkedIn hat seinen Algorithmus zwischen 2024 und 2026 grundlegend verändert — zuungunsten von Firmenseiten und zugunsten von Personenprofilen. Die Daten sind eindeutig. Was viele KMU-Inhaber noch nicht verstanden haben: ihre persönliche LinkedIn-Präsenz ist ihr stärkster Marketingkanal. Nicht die Firmenseite.</p><p>Der Übersichtsartikel <a href="/wissen/linkedin-kmu-inhaber-thought-leadership-30-minuten">LinkedIn für KMU-Inhaber: Thought Leadership in 30 Minuten pro Woche</a> zeigt, wie Sie mit geringem Zeitaufwand kontinuierlich Sichtbarkeit aufbauen. Dieser Beitrag erklärt, warum Ihr LinkedIn-Profil die Grundlage dafür bildet – und wie Sie es Schritt für Schritt richtig aufbauen.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "zahlen-vergleich",
      title: "Die Zahlen: Personenprofil vs. Firmenseite im direkten Vergleich",
    },
    {
      type: "table",
      headers: ["Kennzahl", "Personenprofil", "Firmenseite", "Quelle"],
      rows: [
        ["Median Engagement-Rate", "4,7 %", "1–2 %", "Sprout Social Q1 2026"],
        ["Anteil am LinkedIn-Feed", "65 %", "5 %", "DSMN8, 2026"],
        [
          "Organischer Reichweiten-Rückgang 2024–2026",
          "-50 %",
          "-60 bis -66 %",
          "AuthoredUp / Entrepreneur",
        ],
        [
          "Reichweite bei gleichem Content",
          "Basis",
          "5–8× weniger",
          "blueberry-media.co.uk, 2026",
        ],
        [
          "Kommentarverhalten der Leser",
          "Hoch (Peer-to-Peer)",
          "Niedrig (Brand-Posts)",
          "van der Blom, 1,8 Mio. Posts",
        ],
      ],
    },
    {
      type: "image",
      src: "/images/blog/linkedin-personal-branding-profil-vs-firmenseite-kmu/infographic.jpg",
      alt: "LinkedIn Personenprofil vs. Firmenseite — Reichweite und Engagement-Rate im Vergleich 2026",
      caption:
        "Personenprofile dominieren den Feed: 65 % vs. 5 % für Firmenseiten (DSMN8, 2026).",
    },
    {
      type: "richText",
      html: "<p>Die Zahlen sprechen eine klare Sprache: Firmenseiten auf LinkedIn sind 2026 ein strukturell benachteiligter Kanal für organische Reichweite. Das ist kein temporärer Trend, sondern eine algorithmische Entscheidung, die LinkedIn seit 2022 schrittweise umgesetzt hat.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "algorithmus-grund",
      title: "Der Algorithmus-Grund: Warum LinkedIn so entschieden hat",
    },
    {
      type: "richText",
      html: "<p>LinkedIn hat sich als Plattform neu positioniert: weg vom Unternehmenskanal, hin zum professionellen Netzwerk von Menschen. Die Logik dahinter ist einfach — und sie erklärt den Algorithmus vollständig.</p>",
    },
    {
      type: "sectionHeading",
      heading: "Der 3-Phasen-Algorithmus",
    },
    {
      type: "richText",
      html: "<p>LinkedIn verteilt jeden Post in drei Phasen:</p>",
    },
    {
      type: "list",
      items: [
        "Phase 1: Kleines initiales Segment aus dem direkten Netzwerk (erste 60 Minuten entscheidend)",
        "Phase 2: Bei starken Engagement-Signalen (≥3 substanzielle Kommentare in 60 Min.) erhält der Post 5,2× mehr Reichweite (van der Blom, 1,8 Mio. Posts)",
        "Phase 3: Verteilung an thematisch interessierte Nutzer ausserhalb des Netzwerks",
      ],
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Der entscheidende Unterschied",
      body: "Personen kommentieren Beiträge von Personen. Firmenseiten erhalten in Phase 1 strukturell weniger Kommentare, weil niemand seine Verbindungen durch «Guter Beitrag, [Firmenname]!» anspricht. Das verhindert Phase 2 — und damit den grössten Reichweitenschub.",
    },
    {
      type: "sectionHeading",
      heading: "Dwell Time als neuer Schlüsselfaktor",
    },
    {
      type: "richText",
      html: "<p>Seit 2026 ist Dwell Time das stärkste Einzelsignal im LinkedIn-Algorithmus: Ein Post, der mindestens 15 Sekunden gelesen wird, erhält rund 40 % mehr Reichweite. Personenprofil-Posts werden länger gelesen als Firmenposts — weil Menschen anderen Menschen mehr Aufmerksamkeit schenken als Markenlogos.</p>",
    },
    {
      type: "callout",
      variant: "navy",
      title: "Das 60-Minuten-Fenster",
      body: "Die ersten 60 Minuten nach dem Posting entscheiden über die Gesamtreichweite. Wer direkt nach dem Veröffentlichen verfügbar ist, Kommentare beantwortet und das Netzwerk aktiv einbindet, vervielfacht seine Reichweite. Das funktioniert für Personenprofil-Posts strukturell besser — weil das persönliche Netzwerk schneller reagiert als Firmenseiten-Follower.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "bedeutung-kmu",
      title: "Was das für Schweizer KMU-Inhaber bedeutet",
    },
    {
      type: "richText",
      html: "<p>Die Konsequenz ist eindeutig, aber für viele Inhaber ein Perspektivenwechsel:</p>",
    },
    {
      type: "callout",
      variant: "navy",
      title: "Das neue LinkedIn-Modell für KMU",
      body: "Personenprofil des Inhabers = Primärer Kanal → Organischer Content, Thought Leadership, Netzwerk-Aufbau. Firmenseite = Unterstützungsinfrastruktur → Glaubwürdigkeit, Stellenausschreibungen, bezahlte Werbung, Weiterteilen von Top-Posts.",
    },
    {
      type: "richText",
      html: "<p>Das bedeutet nicht: Firmenseite löschen. Es bedeutet: Energie priorisieren. Wer 80 % seiner LinkedIn-Energie in die Firmenseite steckt und 20 % ins persönliche Profil, hat die Gewichtung falsch. Das optimale Verhältnis für organische Reichweite: 80 % Personenprofil, 20 % Firmenseite.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "profil-elemente",
      title: "8 Profil-Elemente, die den Unterschied machen",
    },
    {
      type: "richText",
      html: "<p>Das Profil ist das Fundament. Wer viel postet, aber ein schwaches Profil hat, verliert die Hälfte des Effekts: Wer auf einen Post klickt und ein unvollständiges Profil sieht, folgt nicht und fragt nicht an. Die 8 wichtigsten Profil-Elemente:</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 01",
      heading: "Profilfoto",
    },
    {
      type: "richText",
      html: "<p>Professionelles Foto, nicht Selfie. Hintergrund einfarbig oder dezent. Kleidung entspricht dem Berufsfeld. Keine Urlaubsfotos, keine Gruppenbilder.</p><p><strong>Warum es zählt:</strong> LinkedIn zeigt Profile mit Foto bis zu 21× häufiger in Suchergebnissen als ohne. Das Foto ist der erste Eindruck — in 2–3 Sekunden entschieden.</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 02",
      heading: "Headline (die wichtigste Zeile)",
    },
    {
      type: "richText",
      html: "<p>Die Headline ist das einzige Profil-Element, das im Feed sichtbar ist — unter jedem Post, in jeder Suchanfrage. Sie ist keine Jobbeschreibung, sondern ein Nutzenversprechen.</p>",
    },
    {
      type: "table",
      headers: ["Schwache Headline", "Starke Headline"],
      rows: [
        [
          "CEO Bexolutions",
          "Ich helfe Schweizer KMU, bei Google und LinkedIn sichtbar zu werden | CEO Bexolutions",
        ],
        [
          "Treuhänder",
          "Steuerberatung für KMU in der Region Aarau — 25 Jahre Praxiserfahrung | Zofingen Treuhand AG",
        ],
        [
          "Geschäftsführer",
          "Wir bauen Hochbauprojekte im Kanton Aargau, die termingerecht fertig werden | GF Muster Bau AG",
        ],
      ],
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Formel",
      body: "[Was ich tue] + [für wen] + [Alleinstellungsmerkmal oder Standort] | [Firmenname]",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 03",
      heading: "About-Sektion (2.000 Zeichen nutzen)",
    },
    {
      type: "richText",
      html: "<p>Die About-Sektion ist der einzige Ort, wo man länger über sich und seinen Ansatz sprechen kann. Die meisten Inhaber lassen sie leer oder schreiben drei Sätze. Das ist verschenktes Potenzial.</p><p>Struktur, die funktioniert:</p>",
    },
    {
      type: "list",
      items: [
        "Erster Satz: Wer sind Sie, wem helfen Sie, womit?",
        "Absätze 2–3: Ihr Ansatz, Ihre Erfahrung, warum Sie das tun",
        "Konkrete Ergebnisse: «Wir haben X KMU geholfen, Y zu erreichen»",
        "Abschluss: Klare Handlungsaufforderung (Kontakt, Website, Kalender)",
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Wichtig:</strong> Die About-Sektion wird nach den ersten 3 Zeilen abgeschnitten. Der erste Satz entscheidet, ob jemand auf «mehr anzeigen» klickt.</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 04",
      heading: "Featured-Sektion als Showcase",
    },
    {
      type: "richText",
      html: "<p>Die Featured-Sektion (oben im Profil, gut sichtbar) ist der wertvollste Immobilien-Platz im LinkedIn-Profil. Hier können Sie bis zu 5 Inhalte pinnen:</p>",
    },
    {
      type: "list",
      items: [
        "Ihr bisher bester Post (mit höchstem Engagement)",
        "Link zu Ihrer Website oder einem Referenzprojekt",
        "Eine Fallstudie oder ein PDF-Dokument",
        "Ein Video oder Interview",
      ],
    },
    {
      type: "richText",
      html: "<p>Für Bexolutions-Beispiel: Artikel über Zofingen Treuhand AG (1'704 Besucher) als Featured-Beitrag einpinnen — direkter Social-Proof-Anker.</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 05",
      heading: "Creator-Modus aktivieren",
    },
    {
      type: "richText",
      html: "<p>Der Creator-Modus ersetzt den «Vernetzen»-Button durch einen «Folgen»-Button. Das klingt nach einem Nachteil — ist aber ein Vorteil: Folgen hat keine Limits (Verbindungen sind auf 30.000 begrenzt), und der Creator-Modus aktiviert zusätzliche Features:</p>",
    },
    {
      type: "list",
      items: [
        "Hashtag-Themen in der Profilübersicht (signalisiert Expertise)",
        "LinkedIn Live und Newsletter",
        "Analytics-Zugang für Posts",
      ],
    },
    {
      type: "richText",
      html: "<p>Laut meet-lea.com wächst die Follower-Basis im Creator-Modus 3× schneller als ohne. Aktivierung: Einstellungen &gt; Sichtbarkeit &gt; Creator-Modus.</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 06",
      heading: "Empfehlungen und Fähigkeiten",
    },
    {
      type: "richText",
      html: "<p>Empfehlungen von echten Kunden oder Partnern sind starke Social-Proof-Elemente. Drei bis fünf qualitative Empfehlungen überwiegen hundert bedeutungslose.</p><p>Fähigkeiten: Top 5 auswählen und bestätigen lassen. Irrelevante Fähigkeiten entfernen. LinkedIn zeigt die Top 3 in der Übersicht — diese müssen zum Ziel-Keyword passen.</p><p>Für Treuhänder: «Steuerberatung», «Buchhaltung», «KMU-Beratung» — nicht «Microsoft Excel» oder «Teamarbeit».</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 07",
      heading: "Berufserfahrung: Erfolge statt Aufgaben",
    },
    {
      type: "richText",
      html: "<p>Die meisten Inhaber listen Aufgaben auf. Was zählt, sind Ergebnisse.</p>",
    },
    {
      type: "table",
      headers: ["Aufgaben-Orientiert (schwach)", "Ergebnis-Orientiert (stark)"],
      rows: [
        [
          "Verantwortlich für SEO und Content-Strategie",
          "Aufgebaut: organischer Traffic für 3 Treuhand-Kunden von 0 auf 1'700+ Besucher/Monat",
        ],
        [
          "Leitung des Treuhandteams",
          "Team von 3 auf 8 Personen gewachsen, Mandatsbasis verdoppelt in 5 Jahren",
        ],
      ],
    },
    {
      type: "richText",
      html: "<p>Zahlen wo möglich. Kontext wenn nötig. Nie länger als 3–5 Bullet-Points je Position.</p>",
    },
    {
      type: "sectionHeading",
      eyebrow: "PROFIL-ELEMENT 08",
      heading: "URL personalisieren und Kontakt-Infos vollständig ausfüllen",
    },
    {
      type: "richText",
      html: "<p>Die LinkedIn-URL ist standardmässig ein unleserlicher String. Anpassen auf: linkedin.com/in/vorname-nachname. Das verbessert Google-Ranking des Profils und macht Sharing einfacher.</p><p>Kontaktinfos: E-Mail-Adresse, Website-URL und idealerweise eine Buchungs-URL (Microsoft Bookings oder Calendly) einpflegen. Wer aus LinkedIn heraus Kontakt aufnehmen will, soll das mit einem Klick tun können.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "strategie-kombinieren",
      title: "Die richtige Strategie: Profil und Firmenseite kombinieren",
    },
    {
      type: "richText",
      html: "<p>Die Firmenseite ist nicht wertlos — sie hat spezifische Stärken, die das Personenprofil nicht hat. Der optimale Mix:</p>",
    },
    {
      type: "table",
      headers: ["Aufgabe", "Bester Kanal", "Warum"],
      rows: [
        [
          "Organischer Content, Thought Leadership",
          "Personenprofil",
          "4,7 % vs. 1–2 % Engagement-Rate",
        ],
        [
          "Paid Advertising (LinkedIn Ads)",
          "Firmenseite",
          "Ads laufen nur von Firmenseiten",
        ],
        [
          "Stellenausschreibungen",
          "Firmenseite",
          "Karriereseite ist Firmenseiten-exklusiv",
        ],
        [
          "Glaubwürdigkeit / Erstcheck",
          "Firmenseite",
          "Wer jemanden recherchiert, prüft die Firma",
        ],
        [
          "Reichweite vervielfachen",
          "Post vom Profil → Firmenseite teilt",
          "Firmenseite verstärkt beste Profil-Posts",
        ],
      ],
    },
    {
      type: "richText",
      html: "<p>Die wirksamste Kombination: Inhaber postet vom persönlichen Profil, Mitarbeitende und Firmenseite teilen den Post innerhalb der ersten 60 Minuten. Das verstärkt das initiale Engagement-Signal und erhöht die Gesamtreichweite — ohne Werbebudget.</p>",
    },
    {
      type: "callout",
      variant: "navy",
      title: "Erkenntnis aus der Praxis",
      body: "«Viele KMU-Inhaber haben die LinkedIn-Betreuung an jemanden delegiert, der die Firmenseite bespielt. Das fühlt sich wie Tun an — erzeugt aber kaum Wirkung. Was wirklich funktioniert, lässt sich nicht vollständig delegieren: die persönliche Stimme des Inhabers. Ein Post von Ihnen, mit Ihrer Meinung, aus Ihrer Erfahrung, erreicht Entscheider auf eine Art, die kein Firmenseiten-Post je erreichen wird.» — Balaram Furrer, CEO Bexolutions",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "haeufige-fragen",
      title: "Häufige Fragen",
    },
    {
      type: "richText",
      html: '<p><strong>Soll ich die Firmenseite noch befüllen oder komplett aufgeben?</strong><br>Nicht aufgeben — aber die Energie stark reduzieren. Die Firmenseite erfüllt weiterhin zwei wichtige Funktionen: Glaubwürdigkeit (wer Ihr Profil sieht, prüft die verlinkte Firma) und LinkedIn Ads (die nur von Firmenseiten geschaltet werden können). Empfehlung: 1–2 Posts pro Monat auf der Firmenseite, hauptsächlich Weiterteilen der besten Personalprofil-Posts. Den Rest der Energie ins persönliche Profil.</p><p><strong>Wie viele Verbindungen brauche ich, bevor das Profil Wirkung zeigt?</strong><br>Die Süsswasser-Zone liegt bei 500–5.000 Verbindungen: gross genug für organische Verteilung, klein genug für hohes Engagement-Verhältnis. Unter 200 Verbindungen ist die initiale Phase 1 zu schwächlich. Aber: Die Qualität der Verbindungen zählt mehr als die Quantität. 500 relevante Entscheider in Ihrer Zielbranche übertreffen 5.000 zufällige Verbindungen. Netzwerk-Aufbau gezielt angehen — siehe auch <a href="/wissen/linkedin-outreach-schweiz-b2b-leads-kmu">LinkedIn Outreach für Schweizer KMU</a>.</p><p><strong>Was ist der Social Selling Index (SSI) und ist er wichtig?</strong><br>Der SSI ist ein Wert von 0–100, den LinkedIn jedem Profil gibt — basierend auf vier Dimensionen: Profil-Vollständigkeit, Netzwerk-Qualität, Engagement und Netzwerk-Aufbau. Ein höherer SSI korreliert mit höherer Sichtbarkeit. Einsehbar unter: linkedin.com/sales/ssi (kostenlos). Realistische Ziele: SSI über 60 für gute Sichtbarkeit, über 70 für exzellente. Die Massnahmen in diesem Artikel verbessern den SSI automatisch.</p>',
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "fazit",
      title:
        "Fazit: Ihr Profil ist Ihr stärkster LinkedIn-Kanal — nutzen Sie ihn",
    },
    {
      type: "richText",
      html: '<p>Firmenseiten auf LinkedIn verlieren organische Reichweite. Personenprofile gewinnen sie — relativ. Der LinkedIn-Algorithmus hat 2024–2026 klar entschieden, welchem Inhalt er vertraut: Menschen, nicht Marken.</p><p>Für Schweizer KMU-Inhaber bedeutet das eine Chance: Ihre persönliche Expertise, Ihre Praxiserfahrung, Ihre Meinung sind das Rohmaterial für einen LinkedIn-Kanal, den keine Agentur und kein Wettbewerber kopieren kann. Ein vollständiges, optimiertes Profil ist der erste Schritt.</p><p><strong>Ihr nächster Schritt:</strong> Öffnen Sie jetzt Ihr LinkedIn-Profil. Prüfen Sie: Ist Ihre Headline ein Nutzenversprechen oder eine Jobbeschreibung? Ist die About-Sektion ausgefüllt? Haben Sie ein Featured-Element? Drei Korrekturen — und Ihr Profil arbeitet für Sie.</p><p>LinkedIn-Profil-Optimierung durch Bexolutions: <a href="/kontakt">Kontakt aufnehmen</a></p>',
    },
  ],
} satisfies IBlog
