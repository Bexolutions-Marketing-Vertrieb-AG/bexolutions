<script setup lang="ts">
  import { ref } from "vue"
  import { definePageMeta, useHead } from "#imports"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import BexoPageShell from "~/components/bexo/BexoPageShell.vue"
  import UeberUnsMobile from "~/components/bexo/mobile/UeberUnsMobile.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { useCanvasScale } from "~/composables/useCanvasScale"
  import { useMarketingPageSeo } from "~/composables/useMarketingPageSeo"
  import { BEXO_CTA_TERMIN } from "~/constants/bexoNav"
  import { BEXO_VIDEOS } from "~/constants/bexoVideos"

  definePageMeta({ layout: false })

  const canvasRef = ref<HTMLElement | null>(null)
  useCanvasScale(canvasRef)

  const IMG = "/images/ueber-uns"
  const HOME = "/images/startseite"

  useHead({
    title: "Über uns — Bexolutions",
    htmlAttrs: { lang: "de-CH" },
  })

  useMarketingPageSeo({
    path: "/ueber-uns",
    title: "Über uns — Bexolutions",
    description:
      "Lernen Sie Bexolutions kennen — die Digitalagentur aus dem Kanton Aargau für SEO, Marketing und Vertrieb für Schweizer KMU.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Über uns", path: "/ueber-uns" },
    ],
  })

  const navLinks = [
    { l: "Über uns", to: "/ueber-uns" },
    { l: "Leistungen", to: "/leistungen" },
    { l: "Wissen", to: "/wissen" },
    { l: "Treuhänder", to: "/treuhaender" },
  ]

  const team = [
    "team-1",
    "team-2",
    "team-3",
    "team-4",
    "team-5",
    "team-6",
    "team-7",
    "team-8",
    "team-10",
    "team-12",
  ].map((img, i) => ({
    img: `${IMG}/${img}.png`,
    left: 120 + (i % 4) * 276,
    top: 2832 + Math.floor(i / 4) * 348,
  }))

  const principles = [
    {
      title: "100% Digital & ortsunabhängig",
      body: "Wir sind vollständig cloudbasiert — ohne analoge Altlasten. Maximale Effizienz für uns, maximale Flexibilität für Sie. Egal ob Hunzenschwil, Zürich oder Tokio.",
      img: `${IMG}/principle-1.jpg`,
      imgTop: true,
      bg: "#ecf6ff",
      left: 131,
    },
    {
      title: "KI-gestützt, aber \nmenschlich geführt",
      body: "Wir setzen KI ein, wo sie Arbeit beschleunigt und verbessert. Strategie, Beziehung und Verantwortung bleiben beim Menschen. Immer.",
      img: `${IMG}/principle-2.jpg`,
      imgTop: false,
      bg: "#ffffff",
      left: 565,
    },
    {
      title: "Daten statt Bauchgefühl",
      body: "Zahlen, Daten, Fakten sind unsere Navigationssysteme. Keine Marketingentscheidung ohne Evidenz — und monatlich genau das Reporting, das zählt.",
      img: `${IMG}/principle-3.jpg`,
      imgTop: true,
      bg: "#ecf6ff",
      left: 999,
    },
  ]

  const stats = [
    {
      label: "mehr Klicks — Zofingen Treuhand AG",
      value: "+200%",
      left: -3,
      w: 510,
    },
    { label: "mehr Google-Impressionen", value: "+302%", left: 507, w: 505 },
    { label: "organische Besucher", value: "1'704", left: 1012, w: 502 },
    { label: "Engagement-Rate", value: "60%", left: -3, w: 510 },
    {
      label: "Google-Rankings (Kernbegriffe)",
      value: "Top 3",
      left: 507,
      w: 505,
    },
    { label: "bis zur Teamvergrösserung", value: "16 Mt.", left: 1012, w: 502 },
  ]
</script>

<template>
  <BexoPageShell>
    <template #mobile>
      <UeberUnsMobile />
    </template>
    <template #desktop>
      <div ref="canvasRef" class="canvas">
        <!-- ============================= NAV (light) ============================= -->
        <header
          class="absolute"
          style="left: 0; top: 0; width: 1512px; height: 180px"
        >
          <a href="/" aria-label="Bexolutions Startseite">
            <span
              class="nav-logo absolute"
              style="left: 120px; top: 64px; width: 107px; height: 107px"
            ></span>
          </a>
          <nav
            class="absolute flex items-center"
            style="left: 572px; top: 95px; height: 44px; gap: 24px"
          >
            <a
              v-for="n of navLinks"
              :key="n.l"
              :href="n.to"
              class="text-[16px] font-medium leading-5 text-[#0e2138] transition hover:opacity-70"
            >
              {{ n.l }}
            </a>
          </nav>
          <div
            class="absolute flex items-center"
            style="left: 993px; top: 95px; gap: 10px"
          >
            <a href="/kontakt" class="btn-navy" style="width: 153px">Kontakt</a>
            <a
              :href="BEXO_CTA_TERMIN.href"
              class="btn-primary"
              style="width: 237px"
            >
              Termin vereinbaren
            </a>
          </div>
        </header>

        <!-- ============================= HERO BANNER ============================= -->
        <section
          class="absolute overflow-hidden rounded-[120px]"
          style="left: 71px; top: 237px; width: 1361px; height: 485px"
        >
          <BackgroundMedia
            :poster="`${IMG}/hero-bg.jpg`"
            :video="BEXO_VIDEOS.ueberUnsHero"
            poster-alt="Bexolutions Team und Agentur im Kanton Aargau"
            class="absolute inset-0 h-full w-full"
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.75)"
          ></div>
          <div
            role="heading"
            aria-level="1"
            class="absolute text-[40px] font-semibold leading-[48px] text-white"
            style="left: 114px; top: 108px; width: 858px"
          >
            Wir leben Marketing.
            <br />
            Jeden Tag besser als gestern.
          </div>
          <p
            class="absolute text-[18px] font-normal leading-[25px] text-white"
            style="left: 114px; top: 226px; width: 697px"
          >
            Marketing löst — radikal gedacht — das Problem, dass Wert und
            Bedürfnis sich ohne zielgerichtete Aufmerksamkeit niemals begegnen
            würden. Wir sind das Team, das diese Verbindung für Schweizer KMU
            täglich herstellt.
          </p>
          <a
            :href="BEXO_CTA_TERMIN.href"
            class="btn-primary absolute"
            style="left: 114px; top: 323px; width: 279px"
          >
            Beratungstermin sichern
          </a>
        </section>

        <!-- ============================= INTRO ============================= -->
        <section
          class="absolute overflow-hidden rounded-t-[60px] bg-[#ecf6ff]"
          style="left: 0; top: 786px; width: 1512px; height: 775px"
        >
          <div
            class="absolute rounded-full opacity-80"
            style="
              left: 381px;
              top: 64px;
              width: 773px;
              height: 647px;
              background: radial-gradient(
                closest-side,
                #bde0fe 0%,
                rgba(189, 224, 254, 0) 100%
              );
            "
          ></div>
          <p
            class="absolute text-center text-[24px] font-normal leading-[38px] text-[#0e2138]"
            style="left: 348px; top: 268px; width: 816px"
          >
            Bexolutions wurde 2019 in Hunzenschwil, Kanton Aargau gegründet —
            mit einem klaren Ziel: KMU in der Deutschschweiz eine faire Chance
            auf digitales Wachstum zu geben. Heute sind wir ein Team aus 12
            Spezialisten mit Hauptsitz in Hunzenschwil; ein Teil des Teams
            arbeitet remote aus Mexiko und Bali.
          </p>
        </section>

        <!-- ============================= WARUM / VISION + MISSION ============================= -->
        <section
          class="absolute bg-[#f8f8f8]"
          style="left: 0; top: 1561px; width: 1512px; height: 920px"
        >
          <h2
            class="absolute whitespace-nowrap text-center text-[40px] font-semibold leading-[44px] tracking-[0.8px] text-black"
            style="left: 426px; top: 144px; width: 660px"
          >
            Warum wir tun, was wir tun.
          </h2>

          <!-- Vision card: image top, text bottom -->
          <article
            class="absolute flex flex-col rounded-[30px] bg-[#ecf6ff] p-[21px]"
            style="left: 228px; top: 260px; width: 514px; height: 516px"
          >
            <NuxtImg
              :src="`${IMG}/vision.jpg`"
              class="w-full rounded-[22px] object-cover"
              style="height: 255px"
              alt="Unsere Vision — faire Chancen für Schweizer KMU"
            />
            <div
              class="mt-[6px] flex flex-1 flex-col rounded-[22px] border border-[#c4c4c4] p-[12px]"
            >
              <h3 class="text-[24px] font-semibold leading-[34px] text-black">
                Unsere Vision
              </h3>
              <div class="my-[14px] h-px w-full bg-black/70"></div>
              <p class="text-[16px] font-medium leading-[22px] text-black">
                Bexolutions wurde mit dem Ziel gegründet, KMU in der
                Deutschschweiz eine faire Chance auf Erfolg zu ermöglichen —
                unabhängig von Grösse oder Werbebudget.
              </p>
            </div>
          </article>

          <!-- Mission card: text top, image bottom -->
          <article
            class="absolute flex flex-col rounded-[30px] bg-white p-[21px]"
            style="left: 768px; top: 260px; width: 516px; height: 516px"
          >
            <div
              class="flex flex-col rounded-[22px] border border-[#c4c4c4] p-[12px]"
            >
              <h3 class="text-[24px] font-semibold leading-[34px] text-black">
                Unsere Mission
              </h3>
              <div class="my-[14px] h-px w-full bg-black/70"></div>
              <p class="text-[16px] font-medium leading-[22px] text-black">
                Exzellente Marketingergebnisse für kleine und mittlere
                Unternehmen — durch budgetbewusste, wirkungsvolle und auf KMU
                zugeschnittene Systeme. Messbar. Transparent. Nachhaltig.
              </p>
            </div>
            <NuxtImg
              :src="`${IMG}/mission.jpg`"
              class="mt-[6px] w-full rounded-[22px] object-cover"
              style="height: 211px"
              alt="Unsere Mission — messbares Marketing für KMU"
            />
          </article>
        </section>

        <!-- ============================= TEAM ============================= -->
        <p
          class="absolute text-[32px] font-semibold leading-[45px] tracking-[0.6px] text-black"
          style="left: 120px; top: 2645px; width: 692px"
        >
          Die Menschen hinter Bexolutions.
        </p>
        <p
          class="absolute text-[20px] font-normal leading-[28px] tracking-[0.4px] text-[#0e2138]"
          style="left: 120px; top: 2707px; width: 575px"
        >
          Lernen Sie die Köpfe kennen, die Ihr Marketingsystem aufbauen,
          betreiben und täglich optimieren.
        </p>
        <NuxtImg
          v-for="(m, i) of team"
          :key="i"
          :src="m.img"
          class="absolute"
          :style="{
            left: m.left + 'px',
            top: m.top + 'px',
            width: '245px',
            height: '300px',
          }"
          alt="Teammitglied von Bexolutions"
        />
        <p
          class="absolute text-[20px] font-normal leading-[28px] tracking-[0.4px] text-[#0e2138]"
          style="left: 120px; top: 3897px; width: 575px"
        >
          Wir wachsen weiter. Wenn Sie Teil eines ambitionierten Teams sein
          möchten, das Schweizer KMU systematisch wachsen lässt — melden Sie
          sich.
        </p>
        <a
          href="#"
          class="btn-outline absolute"
          style="left: 707px; top: 3917px; width: 307px"
        >
          Spontanbewerbung senden
        </a>

        <!-- ============================= PRINZIPIEN ============================= -->
        <section
          class="absolute bg-[#f8f8f8]"
          style="left: 0; top: 4084px; width: 1512px; height: 866px"
        >
          <h2
            class="absolute text-[32px] font-semibold leading-[45px] tracking-[0.6px] text-black"
            style="left: 986px; top: 96px; width: 426px"
          >
            Nicht Versprechen.
            <br />
            Prinzipien.
          </h2>

          <article
            v-for="p of principles"
            :key="p.title"
            class="absolute flex flex-col rounded-[30px] p-[19px]"
            :style="{
              left: p.left + 'px',
              top: '254px',
              width: '408px',
              height: '516px',
              background: p.bg,
            }"
          >
            <NuxtImg
              v-if="p.imgTop"
              :src="p.img"
              class="w-full rounded-[22px] object-cover"
              style="height: 255px"
              :alt="p.title.replace(/\n/g, ' ')"
            />
            <div
              class="flex flex-1 flex-col rounded-[22px] border border-[#c4c4c4] p-[12px]"
              :class="p.imgTop ? 'mt-[6px]' : ''"
            >
              <h3
                class="whitespace-pre-line text-[24px] font-semibold leading-[34px] text-black"
              >
                {{ p.title }}
              </h3>
              <div class="my-[14px] h-px w-full bg-black/70"></div>
              <p class="text-[16px] font-medium leading-[22px] text-black">
                {{ p.body }}
              </p>
            </div>
            <NuxtImg
              v-if="!p.imgTop"
              :src="p.img"
              class="mt-[6px] w-full rounded-[22px] object-cover"
              style="height: 211px"
              :alt="p.title.replace(/\n/g, ' ')"
            />
          </article>
        </section>

        <!-- ============================= STATS GRID ============================= -->
        <h2
          class="absolute text-[40px] font-semibold leading-[56px] tracking-[0.8px] text-black"
          style="left: 768px; top: 5074px; width: 621px"
        >
          Keine Screenshots.
          <br />
          Echte Zahlen.
        </h2>
        <div
          v-for="(s, i) of stats"
          :key="s.value"
          class="absolute flex flex-col items-end justify-between border border-black/40"
          :style="{
            left: s.left + 'px',
            top: (i < 3 ? 5282 : 5625) + 'px',
            width: s.w + 'px',
            height: '343px',
            padding: '30px 36px',
          }"
        >
          <span
            class="text-right text-[20px] font-semibold leading-[26px] tracking-[-0.6px] text-black"
          >
            {{ s.label }}
          </span>
          <span class="stat-num text-[#13315c]">{{ s.value }}</span>
        </div>

        <!-- ============================= QUOTE ============================= -->
        <div
          class="absolute rounded-full opacity-90"
          style="
            left: 366px;
            top: 5952px;
            width: 773px;
            height: 647px;
            background: radial-gradient(
              closest-side,
              #bde0fe 0%,
              rgba(189, 224, 254, 0) 100%
            );
          "
        ></div>
        <p
          class="absolute text-center text-[20px] font-semibold leading-[28px] tracking-[0.4px] text-black"
          style="left: 362px; top: 6116px; width: 788px"
        >
          «Die Anzahl der Anfragen über unsere Website und unser
          Google-Unternehmensprofil hat sich in den vergangenen 16 Monaten
          substanziell erhöht. Wir mussten infolgedessen unser Team personell
          verstärken, um die zusätzlichen Mandate ordnungsgemäss bearbeiten zu
          können.»
        </p>
        <p
          class="absolute text-center text-[16px] font-normal leading-[22px] tracking-[0.32px] text-black"
          style="left: 362px; top: 6250px; width: 788px"
        >
          — Philippe Bally, Zofingen Treuhand AG
        </p>
        <a
          href="/referenz-zofingen"
          class="btn-outline absolute"
          style="left: 607px; top: 6294px; width: 299px"
        >
          Zur vollständigen Fallstudie
        </a>

        <!-- ============================= LOGOS ============================= -->
        <section
          class="absolute overflow-hidden rounded-t-[60px] bg-white"
          style="left: 0; top: 6506px; width: 1512px; height: 480px"
        >
          <h2
            class="absolute text-center text-[32px] font-semibold leading-[44px] tracking-[0.6px] text-[#0e2138]"
            style="left: 120px; top: 49px; width: 1272px"
          >
            Unternehmen, die uns vertrauen.
          </h2>
          <p
            class="absolute text-center text-[20px] font-normal leading-[31px] tracking-[0.4px] text-[#0e2138]"
            style="left: 312px; top: 105px; width: 889px"
          >
            Langjährige Kunden aus der Deutschschweiz und dem DACH-Raum — von
            der inhabergeführten Treuhandkanzlei bis zum Gastronomiebetrieb.
          </p>
          <div class="marquee" style="top: 231px">
            <div class="marquee-track marquee-left">
              <NuxtImg
                :src="`${HOME}/logos-row1.png`"
                class="marquee-img"
                alt="Referenzen Bexolutions: Coca-Cola HBC, Thomas Sabo, Biotronik, REMAX, BELL Helmets"
                :width="3192"
                :height="160"
                loading="lazy"
              />
              <NuxtImg
                :src="`${HOME}/logos-row1.png`"
                class="marquee-img"
                alt=""
                :width="3192"
                :height="160"
                loading="lazy"
              />
            </div>
          </div>
          <div class="marquee" style="top: 351px">
            <div class="marquee-track marquee-right">
              <NuxtImg
                :src="`${HOME}/logos-row2.png`"
                class="marquee-img"
                alt="Referenzen Bexolutions: weitere Schweizer und internationale Markenkunden"
                :width="2899"
                :height="160"
                loading="lazy"
              />
              <NuxtImg
                :src="`${HOME}/logos-row2.png`"
                class="marquee-img"
                alt=""
                :width="2899"
                :height="160"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <!-- ============================= NETZWERK ============================= -->
        <section
          class="absolute bg-[#f9f9f9]"
          style="left: 0; top: 7077px; width: 1512px; height: 1016px"
        >
          <span
            class="absolute grid place-items-center rounded-[16px] bg-[#ecf6ff] text-[20px] font-normal leading-[28px] tracking-[0.4px] text-[#0e2138]"
            style="left: 119px; top: 64px; width: 189px; height: 48px"
          >
            Unser Vorgehen
          </span>
          <h2
            class="absolute text-[32px] font-semibold leading-[45px] tracking-[0.6px] text-black"
            style="left: 119px; top: 129px; width: 878px"
          >
            Ein Netzwerk, das für Sie arbeitet.
          </h2>
          <p
            class="absolute text-[20px] font-normal leading-[28px] tracking-[0.4px] text-black"
            style="left: 119px; top: 191px; width: 710px"
          >
            Ausgewählte Partner und Technologien, mit denen wir gemeinsam
            Leistungen erbringen, die weit über eine einzelne Agentur
            hinausgehen.
          </p>

          <!-- Orbitype (big, dark) -->
          <article
            class="absolute overflow-hidden rounded-[26px]"
            style="left: 119px; top: 303px; width: 840px; height: 399px"
          >
            <NuxtImg
              :src="`${IMG}/orbitype-bg.jpg`"
              class="absolute inset-0 h-full w-full object-cover"
              alt="Orbitype — Agentic Cloud OS Hintergrund"
            />
            <div
              class="absolute inset-0"
              style="background: rgba(0, 0, 0, 0.7)"
            ></div>
            <NuxtImg
              :src="`${IMG}/logo-orbitype.png`"
              class="absolute"
              style="left: 47px; top: 138px; width: 201px; height: 52px"
              alt="Orbitype"
            />
            <h3
              class="absolute text-[20px] font-semibold leading-[28px] tracking-[0.4px] text-white"
              style="left: 47px; top: 202px; width: 366px"
            >
              Webentertainer GmbH, Basel
              <br />
              Offizieller Reseller-Partner
            </h3>
            <p
              class="absolute text-[16px] font-medium leading-[22px] tracking-[0.3px] text-white"
              style="left: 47px; top: 267px; width: 726px"
            >
              Das weltweit erste Agentic Cloud OS — die KI-Technologie, auf der
              unsere systembasierten Marketinglösungen aufbauen. Von
              automatisierter Content-Produktion über intelligentes CRM bis zur
              Multi-Plattform-Distribution. Als offizieller Reseller-Partner
              setzen wir Orbitype für Schweizer KMU ein, die mit KI-Technologie
              systematisch wachsen wollen.
            </p>
          </article>

          <!-- Mauch.biz (bottom-left, white) -->
          <article
            class="absolute rounded-[26px] border border-[#939191] bg-white p-[45px]"
            style="left: 119px; top: 722px; width: 840px; height: 230px"
          >
            <NuxtImg
              :src="`${IMG}/mauch-logo.png`"
              class="object-contain"
              style="width: 76px; height: 75px"
              alt="Mauch.biz"
            />
            <h3
              class="mt-[12px] text-[20px] font-semibold leading-[28px] tracking-[0.4px] text-[#262424]"
            >
              Mauch.biz
            </h3>
            <p
              class="mt-[6px] text-[16px] font-medium leading-[22px] tracking-[0.3px] text-[#262424]"
            >
              Strategische Unternehmensberatung und Geschäftsentwicklung.
              <br />
              Enger strategischer Partner für komplexe Wachstumsprojekte.
            </p>
          </article>

          <!-- BNI (top-right, white) -->
          <article
            class="absolute rounded-[26px] border border-[#939191] bg-white p-[28px]"
            style="left: 983px; top: 303px; width: 408px; height: 303px"
          >
            <NuxtImg
              :src="`${IMG}/logo-bni.png`"
              class="object-contain object-left"
              style="height: 38px; width: auto"
              alt="BNI"
            />
            <h3
              class="mt-[12px] text-[20px] font-semibold leading-[28px] tracking-[0.4px] text-[#262424]"
            >
              BNI Schweiz
              <br />
              Business Network International
            </h3>
            <p
              class="mt-[10px] text-[16px] font-medium leading-[22px] tracking-[0.3px] text-[#262424]"
            >
              Das grösste Unternehmensnetzwerk der Schweiz. Balaram Furrer ist
              BNI Area Director Kanton Aargau — vier aktive Chapters mit Zugang
              zu hunderten von Unternehmerinnen und Unternehmern in der Region.
            </p>
          </article>

          <!-- Antarius (bottom-right, dark) -->
          <article
            class="absolute overflow-hidden rounded-[26px]"
            style="left: 983px; top: 628px; width: 410px; height: 324px"
          >
            <NuxtImg
              :src="`${IMG}/antarius-bg.jpg`"
              class="absolute inset-0 h-full w-full object-cover"
              alt="Antarius — digitale Infrastruktur"
            />
            <div
              class="absolute inset-0"
              style="background: rgba(0, 0, 0, 0.6)"
            ></div>
            <NuxtImg
              :src="`${IMG}/logo-antarius.png`"
              class="absolute"
              style="left: 28px; top: 166px; width: 165px; height: 32px"
              alt="Antarius"
            />
            <h3
              class="absolute text-[20px] font-semibold leading-[28px] tracking-[0.4px] text-white"
              style="left: 28px; top: 210px; width: 366px"
            >
              Antarius
            </h3>
            <p
              class="absolute text-[16px] font-medium leading-[22px] tracking-[0.3px] text-white"
              style="left: 28px; top: 250px; width: 269px"
            >
              Spezialist für digitale Infrastruktur und Systemintegration.
            </p>
          </article>
        </section>

        <!-- ============================= WIE WIR DENKEN ============================= -->
        <p
          class="absolute text-center text-[18px] font-semibold leading-[25px] tracking-[0.36px] text-black"
          style="left: 120px; top: 8157px; width: 1272px"
        >
          Wie wir denken
        </p>
        <h2
          class="absolute text-center text-[28px] font-semibold leading-[39px] tracking-[0.56px] text-black"
          style="left: 120px; top: 8190px; width: 1272px"
        >
          Wir bauen heute, was morgen Standard ist.
        </h2>
        <p
          class="absolute whitespace-pre-line text-center text-[16px] font-normal leading-[22px] tracking-[0.32px] text-black"
          style="left: 349px; top: 8251px; width: 814px"
        >
          51% der B2B-Käufer starten ihre Recherche heute mit einem KI-Chatbot
          statt bei Google. 93% der KI-Suchen enden ohne einen einzigen Klick
          auf eine Website. Die Art, wie Menschen Unternehmen finden, verändert
          sich fundamental — und schneller als die meisten Agenturen reagieren.
          Wir haben GEO Readiness — Generative Engine Optimization — als festen
          Bestandteil unserer Systeme integriert. Unsere Klienten sind nicht nur
          heute bei Google sichtbar, sondern erscheinen morgen in ChatGPT,
          Google AI Mode und Perplexity. Ermöglicht durch Orbitype, unsere
          KI-Technologieplattform, und getragen von einer Methodik, die wir seit
          2019 kontinuierlich verfeinern. Das ist kein Trend, dem wir
          nachlaufen. Es ist die logische Weiterentwicklung dessen, was wir tun:
          systematische, messbare Sichtbarkeit für Schweizer KMU.
        </p>

        <!-- ============================= MAP / LOCATIONS ============================= -->
        <section
          class="absolute bg-[#f9f9f9]"
          style="left: 0; top: 8513px; width: 1512px; height: 799px"
        >
          <NuxtImg
            :src="`${IMG}/worldmap.png`"
            class="absolute opacity-40"
            style="left: 106px; top: 55px; width: 1300px; height: 689px"
            alt="Weltkarte mit Bexolutions-Standorten"
          />

          <p
            class="absolute text-center text-[28px] font-semibold leading-[39px] tracking-[0.56px] text-black"
            style="left: 540px; top: 333px; width: 430px"
          >
            Wir sind wo Sie uns brauchen.
          </p>

          <div
            class="absolute text-center"
            style="left: 678px; top: 144px; width: 360px"
          >
            <p
              class="whitespace-nowrap text-[22px] font-semibold leading-[30px] text-black"
            >
              🇨🇭 Schweiz — Hauptsitz
            </p>
            <p class="mt-1 text-[18px] font-normal leading-[25px] text-black">
              Fabrikweg 1a
              <br />
              5502 Hunzenschwil, Aargau
            </p>
          </div>
          <div
            class="absolute text-center"
            style="left: 228px; top: 317px; width: 195px"
          >
            <p class="text-[20px] font-semibold leading-[28px] text-black">
              🇲🇽 Mexiko
            </p>
            <p class="mt-1 text-[16px] font-normal leading-[23px] text-black">
              Remote-Team
            </p>
          </div>
          <div
            class="absolute text-center"
            style="left: 921px; top: 455px; width: 220px"
          >
            <p class="text-[20px] font-semibold leading-[28px] text-black">
              🇮🇩 Indonesien — Bali
            </p>
            <p class="mt-1 text-[16px] font-normal leading-[23px] text-black">
              Remote-Team
            </p>
          </div>
        </section>

        <!-- ============================= CTA BILLBOARD ============================= -->
        <section
          class="absolute overflow-hidden rounded-t-[200px]"
          style="left: 0; top: 9141px; width: 1512px; height: 679px"
        >
          <NuxtImg
            :src="`${HOME}/billboard.jpg`"
            class="absolute inset-0 h-full w-full object-cover object-top"
            alt="Digitales Bexolutions-Werbeplakat in einer Bahnhofsumgebung"
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.5)"
          ></div>
          <h2
            class="absolute text-[40px] font-semibold leading-[56px] text-white"
            style="left: 122px; top: 402px; width: 701px"
          >
            Sie haben Ziele. Wir sind interessiert.
          </h2>
          <p
            class="absolute text-[20px] font-normal leading-[28px] text-white"
            style="left: 122px; top: 482px; width: 639px"
          >
            Nehmen Sie Kontakt mit uns auf — wir zeigen Ihnen in 20 Minuten, was
            für Ihr Unternehmen möglich ist.
          </p>
          <a
            :href="BEXO_CTA_TERMIN.href"
            class="btn-primary absolute"
            style="left: 122px; top: 562px; width: 318px"
          >
            Beratungstermin vereinbaren
          </a>
        </section>

        <BexoFooter :top="9820" />
      </div>
    </template>
  </BexoPageShell>
</template>

<style scoped>
  .bexo {
    font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
    background: #ffffff;
  }
  .canvas {
    position: relative;
    width: 1512px;
    height: 10474px;
    flex: none;
    background: #ffffff;
  }
  /* navy logo mark (recolour shared white asset via mask) */
  .nav-logo {
    background-color: #0e2138;
    -webkit-mask: url("/images/startseite/logo-mark.png") center / contain
      no-repeat;
    mask: url("/images/startseite/logo-mark.png") center / contain no-repeat;
  }

  /* buttons */
  .btn-primary,
  .btn-navy,
  .btn-outline {
    display: inline-grid;
    place-items: center;
    height: 44px;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    transition:
      filter 0.15s ease,
      background 0.15s ease;
    white-space: nowrap;
  }
  .btn-primary {
    background: #bde0fe;
    color: #0e2138;
  }
  .btn-primary:hover {
    filter: brightness(0.96);
  }
  .btn-navy {
    background: #13315c;
    color: #ffffff;
  }
  .btn-navy:hover {
    filter: brightness(1.1);
  }
  .btn-outline {
    background: transparent;
    color: #0e2138;
    border: 1px solid rgba(19, 49, 92, 0.5);
  }
  .btn-outline:hover {
    background: rgba(19, 49, 92, 0.05);
  }

  .stat-num {
    font-size: 90px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -3px;
  }

  .marquee {
    position: absolute;
    left: 0;
    width: 1512px;
    height: 80px;
    overflow: hidden;
  }
  .marquee-track {
    display: flex;
    width: max-content;
    height: 80px;
    align-items: center;
    will-change: transform;
  }
  .marquee-img {
    height: 80px;
    width: auto;
    flex: none;
    margin-right: 20px;
  }
  .marquee-left {
    animation: marquee-left 45s linear infinite;
  }
  .marquee-right {
    animation: marquee-right 45s linear infinite;
  }
  @keyframes marquee-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @keyframes marquee-right {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
