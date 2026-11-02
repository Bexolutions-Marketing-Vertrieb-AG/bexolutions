import type { IBlog } from "~/types/dto/IBlog"

export default {
  slug: "warum-kmu-bei-google-unsichtbar-ursachen-fixes",
  category: "SEO für KMU",
  readTime: "8 Min. Lesezeit",
  date: "Juli 2026",
  datePublished: "2026-07-10",
  title: "Warum Ihr KMU bei Google unsichtbar ist — und wie Sie das ändern",
  subtitle:
    "Die 7 häufigsten Ursachen — mit Selbst-Check und sofort umsetzbaren Fixes",
  tagline:
    "7 Ursachen, Selbst-Check und sofort umsetzbare Fixes für fehlende Google-Sichtbarkeit",
  heroImage:
    "/images/blog/warum-kmu-bei-google-unsichtbar-ursachen-fixes/hero.jpg",
  audioUrl: "/audio/blog/warum-kmu-bei-google-unsichtbar-ursachen-fixes.m4a",
  tldr: {
    title: "TL;DR — Das Wichtigste in 60 Sekunden",
    body: "Rund 80 % der Schweizer Websites haben grundlegende SEO-Probleme, die ihre Sichtbarkeit beeinträchtigen (hyperpage.ch, 2026). Die häufigsten Ursachen sind: Google kann die Seite nicht indexieren, die Seite lädt zu langsam, die Inhalte beantworten nicht, was Kunden suchen, Title Tags und Meta Descriptions fehlen oder sind falsch, kein Google Business Profile, keine Backlinks — und der unterschätzteste Grund: ein Personalisierungseffekt, der dazu führt, dass Sie Ihre eigene Website besser finden als Ihre Kunden. Dieser Artikel zeigt alle sieben Ursachen mit Selbst-Check und sofort umsetzbarem Fix.",
  },
  author: {
    name: "Balaram Furrer",
    bio: "Balaram Furrer ist CEO von Bexolutions Marketing und Vertrieb AG. Er begleitet Schweizer KMU bei der digitalen Sichtbarkeit im Zeitalter der KI-Suche.",
  },
  toc: [
    {
      id: "30-minuten-selbst-check",
      label: "Der 30-Minuten-Selbst-Check",
    },
    { id: "ursache-01", label: "Ursache 1: Keine Indexierung" },
    { id: "ursache-02", label: "Ursache 2: Zu langsame Ladezeit" },
    { id: "ursache-03", label: "Ursache 3: Inhalte ohne Kundenfokus" },
    { id: "ursache-04", label: "Ursache 4: Title Tags / Meta Descriptions" },
    { id: "ursache-05", label: "Ursache 5: Kein Google Business Profile" },
    { id: "ursache-06", label: "Ursache 6: Keine Backlinks" },
    { id: "ursache-07", label: "Ursache 7: Falsche Keywords" },
    {
      id: "haeufigste-ursachen",
      label: "Was die häufigsten Ursachen bei Schweizer KMU sind",
    },
    { id: "haeufige-fragen", label: "Häufige Fragen" },
    { id: "fazit", label: "Fazit und nächster Schritt" },
  ],
  seo: {
    description:
      "Website nicht auf Google Seite 1? Die 7 häufigsten Ursachen bei Schweizer KMU — mit Selbst-Check, konkreten Fixes und einem Diagnose-Plan in 30 Minuten.",
    ogImage:
      "/images/blog/warum-kmu-bei-google-unsichtbar-ursachen-fixes/hero.jpg",
  },
  blocks: [
    {
      type: "richText",
      html: "<p>Sie geben bei Google Ihren Firmennamen ein — und finden ihn. Ihre Kunden tippen «Elektriker Winterthur» ein — und finden Ihre Mitbewerber. Das ist keine Ausnahme. Das ist der Alltag von tausenden Schweizer KMU.</p><p>Die gute Nachricht: In fast allen Fällen steckt eine von sieben bekannten Ursachen dahinter. Und fast alle sind behebbar — manche in 10 Minuten, manche brauchen mehr Zeit, aber alle haben einen klaren Fix.</p><p>Bevor wir zu den Ursachen kommen: ein wichtiger Hinweis, der oft für Verwirrung sorgt.</p>",
    },
    {
      type: "richText",
      html: '<p>Dieser Artikel gehört zu Cluster 3 (SEO für KMU). Den vollständigen Überblick gibt der <a href="/wissen/seo-schweizer-kmu-einstiegsguide-2026">SEO-Einstiegsguide für Schweizer KMU</a>; wie Sie ohne laufendes Werbebudget nachhaltig sichtbar werden, zeigt <a href="/wissen/seo-ohne-werbebudget-organische-sichtbarkeit-kmu">organische Sichtbarkeit ohne Werbebudget</a>.</p>',
    },
    {
      type: "callout",
      variant: "navy",
      title: "Der Personalisierungseffekt",
      body: "Google zeigt nicht allen Menschen dasselbe. Wer die eigene Website regelmässig besucht, bekommt sie höher angezeigt — weil Google sich merkt, welche Seiten man kennt und mag. Das täuscht über die echte Sichtbarkeit hinweg. Prüfen Sie Ihre Rankings immer im Inkognito-Modus (Chrome: Ctrl+Shift+N / Cmd+Shift+N), und wenn möglich von einem anderen Gerät oder Netzwerk. Nur dann sehen Sie, was Ihre Kunden wirklich sehen.",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "30-minuten-selbst-check",
      title: "Der 30-Minuten-Selbst-Check — zuerst durchführen",
    },
    {
      type: "richText",
      html: "<p>Bevor Sie Ursachen analysieren, brauchen Sie Ausgangsdaten. Dieser Check dauert 30 Minuten und gibt Ihnen ein klares Bild.</p>",
    },
    {
      type: "callout",
      variant: "highlight",
      title: "30-MINUTEN SELBST-CHECK",
      body: "Schritt 1 (5 Min.): Indexierungs-Check — site:ihreDomain.ch in Google. 0 Seiten = nicht indexiert. Unter 10 = mögliche Probleme.\nSchritt 2 (5 Min.): Ladezeit-Check — pagespeed.web.dev, Mobile-Score notieren. Unter 50 kritisch, 50–79 verbesserungswürdig, 80+ gut.\nSchritt 3 (5 Min.): Mobile-Check — Telefonnummer in 10 Sekunden finden? Formular in 15 Sekunden?\nSchritt 4 (5 Min.): Content-Check — Enthält die H1 Leistung und Standort, oder nur «Herzlich willkommen»?\nSchritt 5 (5 Min.): GBP-Check — Erscheint ein Google Business Profile mit Adresse, Öffnungszeiten und Bewertungen?\nSchritt 6 (5 Min.): Keyword-Check — Im Inkognito «[Leistung] [Ort]» suchen. Seite 1? Local Pack?",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "die-7-ursachen",
      title: "Die 7 Ursachen im Detail",
    },
    {
      type: "sectionHeading",
      id: "ursache-01",
      eyebrow: "URSACHE 01",
      heading: "Google kann Ihre Website nicht indexieren",
      body: "Schwere: Kritisch — sofort handeln",
    },
    {
      type: "richText",
      html: "<p>Wenn Google Ihre Website nicht indexiert, existiert sie für die Suchmaschine schlicht nicht. Keine Rankings, kein Traffic, kein Feedback — komplette Unsichtbarkeit.</p><p>Häufigste Ursachen:</p>",
    },
    {
      type: "list",
      items: [
        "robots.txt blockiert Google: Eine falsch konfigurierte robots.txt-Datei kann Google den Zugang zu Ihrer gesamten Website sperren",
        "noindex-Tag auf wichtigen Seiten: Entwickler setzen diesen Tag manchmal während der Entwicklung und vergessen, ihn zu entfernen",
        "Website neu lanciert: Neue Seiten brauchen Tage bis Wochen, um indexiert zu werden",
        "Fehlerhafte URL-Parameter: Ein Küchenbauer aus Winterthur verlor Anfang 2026 40 % seiner indexierten Seiten durch einen falschen URL-Parameter (hyperpage.ch, 2026)",
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Selbst-Check:</strong><br>site:ihreDomain.ch in Google eingeben. 0 Ergebnisse = Indexierungsproblem. Google Search Console (kostenlos) einrichten und den «Abdeckungsbericht» prüfen.</p><p><strong>Fix:</strong></p>",
    },
    {
      type: "list",
      items: [
        "Google Search Console einrichten und URL-Überprüfung für Hauptseiten durchführen",
        "robots.txt unter ihreDomain.ch/robots.txt aufrufen und auf «Disallow: /» prüfen",
        "Source-Code der Homepage öffnen und nach «noindex» suchen",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "ursache-02",
      eyebrow: "URSACHE 02",
      heading: "Ihre Website lädt zu langsam",
      body: "Schwere: Hoch — direkter Ranking-Faktor",
    },
    {
      type: "richText",
      html: "<p>Ladezeit ist seit 2021 offiziell ein Google-Rankingfaktor. 53 % der mobilen Nutzer verlassen eine Seite, wenn sie länger als 3 Sekunden lädt (Google). Bei einem KMU mit 500 monatlichen Besuchern sind das potenziell 265 verlorene Kontakte pro Monat (0ggi.ch, April 2026).</p><p>Die meisten Schweizer KMU-Websites liegen laut unabhängigen Website-Audits zwischen 35 und 55 von 100 Punkten im PageSpeed-Score auf Mobile (OOTOlab, April 2026). Das ist kein Ausreisser — das ist der Standard.</p><p>Häufigste Ursachen:</p>",
    },
    {
      type: "list",
      items: [
        "Bilder in Originalgrösse: Fotos direkt von der Kamera (3–5 MB) statt komprimiert (50–150 KB)",
        "WordPress mit 15+ Plugins: Jedes aktive Plugin lädt Code, auch wenn es auf der Seite nicht gebraucht wird",
        "Günstig-Hosting auf überlasteten Shared-Servern: Langsame Server-Antwortzeiten sind ein häufiger, aber unsichtbarer Bremser",
        "Baukasten-Websites (Wix, Jimdo): Oft strukturell langsam durch aufgeblähten Code",
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Selbst-Check:</strong><br>pagespeed.web.dev — Ihre Domain eingeben — Mobile-Score notieren. Unter 50: kritisch.</p><p><strong>Quick Win Fix:</strong></p>",
    },
    {
      type: "list",
      items: [
        "Alle Bilder komprimieren: squoosh.app (kostenlos), WebP-Format, Zielgrösse 50–150 KB",
        "Dauert 30 Minuten, bringt häufig 20–40 Punkte im PageSpeed-Score",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "ursache-03",
      eyebrow: "URSACHE 03",
      heading: "Ihre Inhalte beantworten nicht, was Kunden suchen",
      body: "Schwere: Hoch — häufigste Inhalts-Schwäche",
    },
    {
      type: "richText",
      html: "<p>«Herzlich willkommen auf unserer Website. Wir sind ein traditionsreiches Unternehmen mit langjähriger Erfahrung.» Dieser Satz steht auf tausenden Schweizer KMU-Websites. Und er ist für SEO wertlos (webgearing.ch, 2026).</p><p>Google rankt Seiten, die Fragen beantworten und Leistungen beschreiben, die Kunden suchen. Konkret, nützlich, spezifisch. Texte, die nur über das Unternehmen sprechen (statt über die Kundenprobleme), werden von Google nicht für Kunden-Suchanfragen ausgespielt.</p><p>Häufige Inhalts-Schwächen:</p>",
    },
    {
      type: "list",
      items: [
        "Kein standortspezifischer Inhalt: «Malerarbeiten» rankt nicht für «Maler Aarau»",
        "Leistungen nicht einzeln beschrieben: Alles auf einer Seite statt je eine Seite pro Leistung",
        "Fachbegriffe statt Kundensprache: «Gebäudehülle» statt «Fassade streichen», «Sanitärinstallation» statt «Wasserhahn ersetzen»",
        "Kein FAQ-Bereich: Fragen, die Kunden stellen, sind das wichtigste Content-Signal für informationsbasierte Suchen",
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Selbst-Check:</strong><br>Notieren Sie Ihre drei wichtigsten Leistungen — mit den Worten, die Kunden am Telefon benutzen (nicht mit Ihren Fachbegriffen). Suchen Sie diese Begriffe im Inkognito-Modus. Erscheinen Sie? Wenn nein: Ihre Inhalte verwenden die falschen Wörter.</p><p><strong>Fix:</strong></p>",
    },
    {
      type: "list",
      items: [
        "Je eine eigene Seite pro Hauptleistung mit standortspezifischem Keyword erstellen",
        "FAQ-Sektion am Ende jeder Leistungsseite einfügen (3–5 häufige Kundenfragen)",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "ursache-04",
      eyebrow: "URSACHE 04",
      heading: "Title Tags und Meta Descriptions fehlen oder sind falsch",
      body: "Schwere: Mittel–Hoch — häufigster Einzelfehler in Website-Audits",
    },
    {
      type: "richText",
      html: "<p>Der Title Tag ist der blaue Link-Text, den Google in den Suchergebnissen anzeigt. Er ist der erste Eindruck, den potenzielle Kunden von Ihrer Seite bekommen — noch bevor sie sie besucht haben. Wenn dort «Home» oder «Willkommen» steht, ist dieser erste Eindruck verloren.</p><p>Laut unabhängigen Website-Audits ist «fehlende oder falsche Title Tags und Meta Descriptions» der häufigste Einzelfehler bei KMU-Websites — und gleichzeitig einer der einfachsten zu beheben (OOTOlab, April 2026).</p><p>Häufige Fehler:</p>",
    },
    {
      type: "list",
      items: [
        "Title Tag sagt «Home» oder «Willkommen» statt «Steuerberatung Aarau | Muster Treuhand»",
        "Meta Description fehlt: Google generiert dann einen zufälligen Textausschnitt, meistens nicht den besten",
        "Identische Title Tags auf mehreren Seiten: Google kann nicht unterscheiden, welche Seite für welche Suchanfrage relevant ist",
        "Zu lang oder zu kurz: Title Tags über 60 Zeichen werden abgeschnitten, unter 30 Zeichen sind zu vage",
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Selbst-Check:</strong><br>Öffnen Sie Ihre Website, klicken Sie mit der rechten Maustaste — «Seitenquelltext anzeigen» — und suchen Sie nach «&lt;title&gt;». Was steht dort? Wenn nichts Aussagekräftiges: sofortiger Handlungsbedarf.</p><p><strong>Fix:</strong></p>",
    },
    {
      type: "list",
      items: [
        "Formel: [Primäre Leistung] [Ort] | [Firmenname] (max. 60 Zeichen)",
        "Beispiel: «Steuerberatung KMU Aarau | Muster Treuhand AG»",
        "In WordPress: mit dem Plugin Yoast SEO oder RankMath (beide kostenlos) direkt bearbeitbar",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "ursache-05",
      eyebrow: "URSACHE 05",
      heading: "Kein oder unvollständiges Google Business Profile",
      body: "Schwere: Hoch für lokale KMU — schnell behebbar",
    },
    {
      type: "richText",
      html: "<p>Für lokale KMU mit Kundenstamm in einer Region ist das Google Business Profile (GBP) der wichtigste Einzelhebel für Sichtbarkeit. Wer es nicht hat oder unvollständig ausfüllt, erscheint nicht im Local Pack — dem Bereich mit Karte und drei Einträgen, der 44 % aller Klicks bei lokalen Suchen auf sich zieht.</p><p>Häufige Situationen:</p>",
    },
    {
      type: "list",
      items: [
        "Kein GBP: Das Unternehmen hat noch nie eines erstellt",
        "GBP vorhanden, aber nicht verifiziert: Ohne Verifizierung ist das Profil eingeschränkt sichtbar",
        "GBP unvollständig: Fehlende Öffnungszeiten, Beschreibung, Kategorien oder Fotos",
        "GBP nicht gepflegt: Keine aktuellen Beiträge, keine Bewertungsantworten",
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Selbst-Check:</strong><br>Google: «[Ihr Firmenname] [Ihre Stadt]» eingeben. Erscheint rechts (Desktop) ein Profil mit Adresse, Öffnungszeiten, Bewertungen? Wenn nein oder unvollständig: sofortiger Handlungsbedarf.</p><p><strong>Fix:</strong></p>",
    },
    {
      type: "list",
      items: [
        "business.google.com — Profil anlegen oder beanspruchen",
        "Vollständig ausfüllen: Alle Felder, Beschreibung 750 Zeichen, Fotos, Öffnungszeiten",
        "Detaillierten Leitfaden: Cluster 2, Artikel 5 dieser Blog-Serie (GBP 10 Massnahmen)",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "ursache-06",
      eyebrow: "URSACHE 06",
      heading: "Keine Backlinks — Google fehlt das Vertrauen",
      body: "Schwere: Mittel — langsamster Fix, grösste Wirkung",
    },
    {
      type: "richText",
      html: "<p>Backlinks — Links von anderen Websites auf Ihre — sind für Google Vertrauensbeweise. Eine Website ohne Backlinks ist wie ein Restaurant ohne Empfehlungen: vielleicht gut, aber Google hat keinen Grund, es weit oben anzuzeigen.</p><p>Die meisten KMU haben null aktive Backlink-Strategie (webgearing.ch, 2026). Dabei reichen für Schweizer KMU oft 5 bis 10 hochwertige lokale Links, um in der Region die Nase vorn zu haben.</p><p><strong>Häufige Situation:</strong><br>Eine Website, die in keinem Verzeichnis eingetragen, in keinem Branchenverband gelistet und in keiner lokalen Medien erwähnt wird, hat einen Backlink-Score nahe null. Google rankt sie, weil sie existiert — aber nicht, weil sie vertrauenswürdig ist.</p><p><strong>Selbst-Check:</strong><br>Suchen Sie Ihr Unternehmen auf local.ch, search.ch und Zefix.ch (für AG/GmbH). Finden Sie Einträge? Wenn nicht: Das sind die ersten Backlink-Quellen.</p><p><strong>Fix — Priorität:</strong></p>",
    },
    {
      type: "list",
      items: [
        "Sofort (kostenlos): local.ch, search.ch, Zefix.ch mit konsistenten NAP-Daten eintragen",
        "Mittelfristig: BNI-Mitgliedschaft nutzen (bni.ch verlinkt auf Mitgliederprofile)",
        "Mittelfristig: Branchenverband-Mitgliedschaft mit Online-Präsenz prüfen",
        "Langfristig: Gastbeitrag oder Pressemitteilung in lokalen Medien (nau.ch, regionaler Zeitung)",
      ],
    },
    { type: "divider" },

    {
      type: "sectionHeading",
      id: "ursache-07",
      eyebrow: "URSACHE 07",
      heading: "Sie konkurrieren mit den falschen Keywords",
      body: "Schwere: Mittel — strategischer Fehler",
    },
    {
      type: "richText",
      html: "<p>Wer «CRM Software» ranken will, konkurriert mit Salesforce und HubSpot — mit tausenden von Backlinks und millionenschweren Content-Budgets. Wer «CRM für Treuhandbüros Aargau» ranken will, hat möglicherweise keine direkte Konkurrenz auf Seite 1.</p><p>Viele Schweizer KMU optimieren auf zu breite, zu kompetitive Keywords und vergessen dabei die lokalen und nischenspezifischen Begriffe, bei denen sie realistisch auf Seite 1 kommen könnten.</p><p>Häufige Muster:</p>",
    },
    {
      type: "list",
      items: [
        "Zu breit: «Treuhand» statt «Treuhand Aargau» oder «Jahresabschluss Aarau»",
        "Zu technisch: Fachbegriffe, die kein Kunde tippt («Gebäudehülle» statt «Fassade streichen»)",
        "Zu national: Nationale Suchen, obwohl das Einzugsgebiet lokal ist",
      ],
    },
    {
      type: "richText",
      html: "<p><strong>Selbst-Check:</strong><br>Notieren Sie Ihre fünf wichtigsten Leistungen mit dem Wortlaut, den Kunden am Telefon oder per E-Mail verwenden. Fügen Sie Ihren Kanton oder Ort hinzu. Das sind Ihre realistischen Ziel-Keywords.</p><p><strong>Fix:</strong></p>",
    },
    {
      type: "list",
      items: [
        "Keyword-Strategie auf lokale und nischenspezifische Begriffe ausrichten",
        "Für jedes Ziel-Keyword eine eigene, optimierte Leistungsseite erstellen",
        "Google Search Console (nach 2–3 Monaten): Welche Begriffe bringen bereits Traffic? Davon mehr produzieren.",
      ],
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "haeufigste-ursachen",
      title: "Was die häufigsten Ursachen bei Schweizer KMU sind",
    },
    {
      type: "richText",
      html: "<p>Basierend auf eigenen Website-Audits bei Schweizer KMU sowie den Befunden von OOTOlab (April 2026), webgearing.ch und 0ggi.ch zeigen sich klare Muster:</p>",
    },
    {
      type: "table",
      headers: ["Ursache", "Häufigkeit bei KMU", "Schwere", "Fix-Aufwand"],
      rows: [
        [
          "Fehlende/falsche Title Tags",
          "Sehr häufig (>70 %)",
          "Mittel–Hoch",
          "Niedrig (1–2 Std.)",
        ],
        [
          "Zu langsame Ladezeit",
          "Sehr häufig (>60 %)",
          "Hoch",
          "Niedrig–Mittel",
        ],
        ["Inhalt ohne Kunden-Keywords", "Häufig (>50 %)", "Hoch", "Mittel"],
        [
          "Kein oder unvollständiges GBP",
          "Häufig (>50 %)",
          "Hoch (lokal)",
          "Niedrig (1–2 Std.)",
        ],
        ["Keine Backlinks / Citations", "Sehr häufig", "Mittel", "Mittel–Hoch"],
        ["Falsche Keywords", "Häufig", "Mittel", "Mittel"],
        [
          "Indexierungsprobleme",
          "Weniger häufig",
          "Kritisch",
          "Niedrig–Mittel",
        ],
      ],
    },
    {
      type: "image",
      src: "/images/blog/warum-kmu-bei-google-unsichtbar-ursachen-fixes/infographic.jpg",
      alt: "7 Ursachen warum KMU bei Google nicht gefunden werden — mit Schwere und Fix",
      caption:
        "Überblick: Die sieben häufigsten Ursachen für fehlende Google-Sichtbarkeit bei Schweizer KMU.",
    },
    {
      type: "callout",
      variant: "highlight",
      title: "Die gute Nachricht",
      body: "Alle sieben Ursachen sind behebbar. Die ersten drei (Title Tags, Ladezeit, Inhalte) lassen sich mit internen Ressourcen und kostenlosen Tools angehen. Die restlichen vier brauchen etwas mehr Zeit, aber keinen Spezialisten. In 90 Tagen konsequenter Arbeit ist eine messbare Verbesserung realistisch — ein Schweizer Dienstleistungsunternehmen erzielte nach Website-Relaunch und SEO-Massnahmen +310 % organischer Traffic in 4 Monaten und Platz 1–3 für 9 lokale Keywords (webtree.ch, 2025).",
    },
    {
      type: "callout",
      variant: "navy",
      title: "Erkenntnis aus der Praxis",
      body: "«Wenn ein KMU-Inhaber zu uns kommt und sagt ‹wir werden bei Google nicht gefunden›, dann ist in 8 von 10 Fällen eine Kombination aus drei Ursachen die Antwort: Die Seite lädt zu langsam auf dem Handy, die Inhalte beschreiben das Unternehmen statt die Kundenprobleme, und das Google Business Profile ist entweder nicht vorhanden oder nie gepflegt worden. Das sind drei Dinge, die man in einem Nachmittag starten kann — ohne Agentur, ohne Budget.» — Balaram Furrer, CEO Bexolutions",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "haeufige-fragen",
      title: "Häufige Fragen",
    },
    {
      type: "richText",
      html: "<p><strong>Wie lange dauert es, bis ich nach Korrekturen bei Google auftauche?</strong><br>Technische Korrekturen (Indexierung, Ladezeit) werden von Google in Tagen bis wenigen Wochen erkannt. Inhaltliche Verbesserungen (neue Texte, neue Seiten) brauchen 4–8 Wochen, bis Google sie neu bewertet. Rankings auf Seite 1 für kompetitive Begriffe brauchen 3–6 Monate konsequenter Arbeit. Der 30-Minuten-Selbst-Check zeigt Ihnen, wo die grössten Hebel sind.</p><p><strong>Muss ich eine Agentur beauftragen, um diese Probleme zu beheben?</strong><br>Für Ursachen 2 (Ladezeit), 3 (Inhalte), 4 (Title Tags) und 5 (GBP) brauchen Sie keine Agentur. Das sind Massnahmen, die Sie mit kostenlosen Tools und etwas Zeit intern umsetzen können. Für Ursache 1 (Indexierungsprobleme) und 7 (Keyword-Strategie) kann ein erfahrener SEO-Spezialist Zeit sparen. Ursache 6 (Backlinks) ist eine laufende Aufgabe — intern möglich, aber systematischer mit Unterstützung.</p><p><strong>Was ist der erste Schritt, den ich jetzt tun soll?</strong><br>Führen Sie den 30-Minuten-Selbst-Check durch, der oben beschrieben ist. Er zeigt Ihnen, welche der sieben Ursachen auf Ihre Website zutreffen. Dann priorisieren: Indexierungsprobleme zuerst (kritisch), dann Ladezeit (grosste Hebel), dann Title Tags (schnell umsetzbar), dann GBP (lokal entscheidend). Beginnen Sie mit dem Quick Win, der die grösste Wirkung bei kleinstem Aufwand hat.</p><p><strong>Kann meine Website auf Seite 2 oder 3 stehen und trotzdem Kunden bringen?</strong><br>Kaum. Über 64 % aller Klicks gehen an die ersten drei organischen Suchergebnisse (hyperpage.ch, 2026). Seite 2 erhält oft weniger als 5 % der Klicks. Das Local Pack (Google Maps, drei Einträge mit Karte) ist dabei eine Ausnahme: Es erscheint vor den organischen Ergebnissen und ist für lokale Suchanfragen oft wirksamer als Seite-1-Rankings. Deshalb: Für lokale KMU hat GBP-Optimierung Priorität.</p>",
    },
    { type: "divider" },

    {
      type: "sectionTitle",
      id: "fazit",
      title: "Fazit: Diagnose ist der erste Schritt",
    },
    {
      type: "richText",
      html: '<p>Die meisten Schweizer KMU-Websites sind bei Google unsichtbar — nicht weil das Produkt oder die Dienstleistung schlecht ist, sondern weil eine oder mehrere der sieben Ursachen unbemerkt blockieren. Der 30-Minuten-Selbst-Check zeigt Ihnen, wo Sie stehen. Die Fixes in diesem Artikel zeigen, wie Sie starten.</p><p>Wichtig: Fangen Sie mit der Ursache an, die für Ihr Unternehmen am kritischsten ist, nicht mit der, die am einfachsten klingt. Ein Indexierungsproblem zu ignorieren und stattdessen Texte zu optimieren bringt nichts — wenn Google die Seite sowieso nicht sieht.</p><p><strong>Ihr nächster Schritt</strong><br>Führen Sie jetzt den 30-Minuten-Selbst-Check durch. Richten Sie Google Search Console ein (wenn noch nicht geschehen) und öffnen Sie PageSpeed Insights für Ihre Domain. Diese zwei Schritte dauern zusammen 15 Minuten und liefern mehr Klarheit als jeder weitere Artikel.</p><p>Wenn Sie Unterstützung bei der Diagnose oder Umsetzung wünschen: <a href="/kontakt">Kontakt aufnehmen</a></p>',
    },
  ],
} satisfies IBlog
