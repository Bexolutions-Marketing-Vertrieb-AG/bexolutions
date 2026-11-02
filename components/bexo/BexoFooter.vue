<script setup lang="ts">
  import {
    BEXO_FOOTER_H,
    BEXO_FOOTER_LINKS,
    BEXO_FOOTER_WORDMARK,
    BEXO_LEGAL_LINKS,
    BEXO_SOCIAL_LINKS,
  } from "~/constants/bexoFooter"

  const p = defineProps<{
    top?: number
  }>()
</script>

<template>
  <footer
    class="bg-[#0e2138]"
    :class="p.top != null ? 'absolute' : 'relative'"
    :style="{
      width: '1512px',
      height: `${BEXO_FOOTER_H}px`,
      ...(p.top != null ? { left: '0', top: `${p.top}px` } : {}),
    }"
  >
    <h2
      class="absolute whitespace-pre-line text-[56px] font-semibold leading-[55px] tracking-[1.12px] text-white"
      style="left: 120px; top: 140px; width: 491px"
    >
      Better than yesterday.
    </h2>

    <div class="absolute" style="left: 787px; top: 96px; width: 160px">
      <p class="text-[14px] font-bold leading-[21px] text-white">Social:</p>
      <ul class="mt-3 flex flex-col" style="gap: 12px">
        <li v-for="s of BEXO_SOCIAL_LINKS" :key="s.l">
          <a
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[14px] font-medium leading-[18px] text-white underline transition hover:opacity-80"
          >
            {{ s.l }}
          </a>
        </li>
      </ul>
    </div>

    <ul
      class="absolute flex flex-col"
      style="left: 987px; top: 96px; gap: 12px"
    >
      <li v-for="l of BEXO_FOOTER_LINKS" :key="l.l">
        <a
          :href="l.to"
          class="text-[14px] font-medium leading-[18px] text-white transition hover:opacity-80"
        >
          {{ l.l }}
        </a>
      </li>
    </ul>

    <div class="absolute" style="left: 1207px; top: 96px; width: 189px">
      <p class="text-[14px] font-bold leading-[21px] text-white">Adresse:</p>
      <p class="text-[14px] font-medium leading-[21px] text-white">
        Fabrikweg 1a
        <br />
        5502 Hunzenschwil
      </p>
      <p class="mt-[20px] text-[14px] font-bold leading-[20px] text-white">
        Kontakt:
      </p>
      <p class="footer-mono text-[14px] font-medium leading-[21px] text-white">
        062 897 22 44
      </p>
      <a
        href="mailto:info@bexolutions.ch"
        class="footer-mono block text-[16px] font-medium leading-[22px] text-white hover:opacity-80"
      >
        info@bexolutions.ch
      </a>
    </div>

    <NuxtImg
      :src="BEXO_FOOTER_WORDMARK"
      class="absolute opacity-90"
      style="left: 120px; top: 322px; width: 1272px; height: 108px"
      alt="BEXOLUTIONS"
      :width="1272"
      :height="108"
      loading="lazy"
    />

    <div
      class="absolute bg-white/20"
      style="left: 120px; top: 482px; width: 1272px; height: 1px"
    ></div>

    <p
      class="footer-legal absolute text-[16px] leading-[24px] text-white"
      style="left: 120px; top: 534px"
    >
      © 2026 Bexolutions. Alle Rechte vorbehalten.
    </p>
    <div class="absolute flex" style="left: 907px; top: 534px; gap: 24px">
      <a
        v-for="legal of BEXO_LEGAL_LINKS"
        :key="legal.l"
        :href="legal.to"
        class="footer-legal text-[16px] leading-[24px] text-white underline hover:opacity-80"
      >
        {{ legal.l }}
      </a>
    </div>
  </footer>
</template>

<style scoped>
  .footer-mono {
    font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  }

  .footer-legal {
    font-family: "Jost", ui-sans-serif, system-ui, sans-serif;
  }
</style>
