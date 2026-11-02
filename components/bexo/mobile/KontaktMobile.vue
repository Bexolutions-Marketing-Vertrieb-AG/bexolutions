<script setup lang="ts">
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import KontaktForm from "~/components/bexo/KontaktForm.vue"
  import { BEXO_CTA_TERMIN } from "~/constants/bexoNav"

  const IMG = "/images/kontakt"

  const offices = [
    {
      flag: "🇨🇭",
      name: "Schweiz — Hauptsitz",
      addr: ["Fabrikweg 1a", "5502 Hunzenschwil, Aargau"],
    },
  ]

  const badges = [
    {
      title: "Vertraulich",
      body: "Ihre Daten werden nicht an Dritte weitergegeben.",
      icon: "lock",
    },
    {
      title: "Schnell",
      body: "Antwort innerhalb von 1 Werktag.",
      icon: "bolt",
    },
    {
      title: "Kostenlos",
      body: "Die Sichtbarkeitsanalyse ist 100% unverbindlich.",
      icon: "rocket",
    },
    {
      title: "Lokal",
      body: "Bexolutions, Kanton Aargau — seit 2019.",
      icon: "pin",
    },
  ]

  const links = [
    {
      to: "/referenz-zofingen",
      pre: "Lesen Sie unsere Fallstudie:",
      strong: "Zofingen Treuhand AG — +200% Klicks in 16 Monaten",
    },
    {
      to: "/leistungen",
      pre: "",
      strong: "Entdecken Sie unsere Leistungen",
    },
    {
      to: "/wissen",
      pre: "",
      strong: "Besuchen Sie unser Wissen — praxisnahes Marketing für KMU",
    },
  ]
</script>

<template>
  <div>
    <BexoSection compact-top>
      <h1 class="text-3xl font-semibold leading-tight text-black">
        Wir sind für Sie da.
        <br />
        Schreiben Sie uns — oder buchen Sie direkt.
      </h1>
      <p class="mt-4 text-base leading-relaxed text-black">
        Ob Frage, Projekt oder Sichtbarkeitsanalyse: Wir antworten innerhalb von
        1 Werktag. Keine Verpflichtung, kein Verkaufsdruck.
      </p>
      <p class="mt-4 text-base leading-relaxed text-black">
        Den schnellsten Einstieg bietet die kostenlose 20-minütige
        Sichtbarkeitsanalyse — buchen Sie direkt via Kalender. Oder schreiben
        Sie uns kurz, was Sie beschäftigt — wir melden uns.
      </p>
    </BexoSection>

    <BexoSection>
      <div class="rounded-[24px] bg-[#f9f9f9] p-6">
        <KontaktForm />
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Oder direkt buchen.</h2>
      <div class="mt-6 rounded-[24px] border border-[#c4c4c4] p-5">
        <p class="text-lg font-medium text-black">
          Kostenlose Sichtbarkeitsanalyse — 20 Minuten
        </p>
        <p class="mt-3 text-base leading-relaxed text-black">
          Wählen Sie einen Termin, der Ihnen passt — online, ohne Vorbereitung.
          Wir analysieren Ihre aktuelle Sichtbarkeit und zeigen Ihnen, wo der
          grösste Hebel liegt.
        </p>
        <a
          :href="BEXO_CTA_TERMIN.href"
          class="bexo-btn-primary bexo-btn-block mt-6"
        >
          Termin vereinbaren
        </a>
      </div>
      <div class="mt-6 overflow-hidden rounded-[24px]">
        <NuxtImg
          :src="`${IMG}/photo.jpg`"
          class="aspect-[4/3] w-full object-cover"
          alt="Bexolutions Team bei der Arbeit"
        />
      </div>
      <div class="mt-8 space-y-2 text-base text-black">
        <p>+41 62 897 22 44</p>
        <a href="mailto:info@bexolutions.ch" class="block min-h-11 py-1">
          info@bexolutions.ch
        </a>
        <p class="pt-2">
          Fabrikweg 1a
          <br />
          5502 Hunzenschwil
          <br />
          Kanton Aargau, CH
        </p>
      </div>
    </BexoSection>

    <section class="bg-[#f9f9f9] px-4 py-12">
      <div class="max-w-xl mx-auto">
        <div class="overflow-hidden rounded-[24px]">
          <NuxtImg
            :src="`${IMG}/mapwidget.jpg`"
            class="aspect-video w-full object-cover"
            alt="Karte — Bexolutions Standort"
          />
        </div>
        <ul class="mt-8 space-y-6">
          <li v-for="o of offices" :key="o.name">
            <p class="text-lg font-semibold text-black">
              {{ o.flag }} {{ o.name }}
            </p>
            <p class="mt-1 text-base text-[#4b4c56]">
              <template v-for="(ln, i) of o.addr" :key="i">
                {{ ln }}
                <br v-if="i < o.addr.length - 1" />
              </template>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <BexoSection>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div v-for="b of badges" :key="b.title" class="flex items-start gap-4">
          <span
            class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#bde0fe]"
          >
            <svg
              v-if="b.icon === 'lock'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0e2138"
              stroke-width="1.6"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            <svg
              v-else-if="b.icon === 'bolt'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#0e2138"
            >
              <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
            </svg>
            <svg
              v-else-if="b.icon === 'rocket'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0e2138"
              stroke-width="1.6"
            >
              <path d="M5 16c-1.2 1-1.6 4-1.6 4s3-.4 4-1.6" />
              <path d="M9 15c5-2 9-7 9.5-11.5C14 4 9 8 7 13z" />
              <circle cx="14" cy="9.5" r="1.4" fill="#0e2138" />
            </svg>
            <svg
              v-else
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0e2138"
              stroke-width="1.6"
            >
              <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.4" />
            </svg>
          </span>
          <div>
            <p class="text-lg font-semibold text-[#0c0c0c]">{{ b.title }}</p>
            <p class="mt-1 text-base leading-snug text-[#0c0c0c]">
              {{ b.body }}
            </p>
          </div>
        </div>
      </div>
    </BexoSection>

    <BexoSection>
      <div class="rounded-[24px] bg-[#f9f9f9] p-6">
        <h2 class="text-2xl font-semibold text-black">
          Noch nicht sicher? Kein Problem.
        </h2>
        <div class="mt-6 flex flex-col gap-4">
          <a
            v-for="l of links"
            :key="l.strong"
            :href="l.to"
            class="flex min-h-11 items-center gap-4 rounded-[20px] border border-[#4b4c56] px-4 py-4 transition hover:bg-black/[0.02]"
          >
            <span
              class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e6eafb] text-[#2f45c8]"
            >
              →
            </span>
            <span class="text-base leading-snug">
              <span v-if="l.pre" class="text-black">{{ l.pre }}</span>
              <span
                :class="
                  l.pre
                    ? 'font-semibold text-[#2f45c8]'
                    : 'font-normal text-black'
                "
              >
                {{ l.strong }}
              </span>
            </span>
          </a>
        </div>
      </div>
    </BexoSection>
  </div>
</template>
