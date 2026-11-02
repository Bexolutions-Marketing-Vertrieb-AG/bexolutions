<script setup lang="ts">
  import {
    BEXO_FOOTER_LINKS,
    BEXO_FOOTER_WORDMARK,
    BEXO_LEGAL_LINKS,
    BEXO_SOCIAL_LINKS,
  } from "~/constants/bexoFooter"
</script>

<template>
  <footer
    class="box-border w-full min-w-0 max-w-full overflow-x-clip bg-[#0e2138] px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8 text-white"
  >
    <div class="max-w-xl mx-auto w-full min-w-0">
      <h2 class="text-2xl font-semibold leading-tight tracking-wide">
        Better than
        <br />
        yesterday.
      </h2>

      <div class="mt-6 grid grid-cols-3 gap-x-3 gap-y-4">
        <div class="min-w-0">
          <p class="text-sm font-bold leading-tight">Social:</p>
          <ul class="mt-2 flex flex-col gap-0.5">
            <li v-for="s of BEXO_SOCIAL_LINKS" :key="s.l">
              <a
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-10 items-center py-1 text-sm font-medium leading-tight underline transition hover:opacity-80"
              >
                {{ s.l }}
              </a>
            </li>
          </ul>
        </div>

        <ul class="flex min-w-0 flex-col gap-0.5">
          <li v-for="l of BEXO_FOOTER_LINKS" :key="l.l">
            <a
              :href="l.to"
              class="inline-flex min-h-10 items-center py-1 text-sm font-medium leading-tight transition hover:opacity-80"
            >
              {{ l.l }}
            </a>
          </li>
        </ul>

        <div class="min-w-0 space-y-3 text-sm">
          <div>
            <p class="font-bold leading-tight">Adresse:</p>
            <p class="mt-1 font-medium leading-snug">
              Fabrikweg 1a
              <br />
              5502 Hunzenschwil
            </p>
          </div>
          <div>
            <p class="font-bold leading-tight">Kontakt:</p>
            <a
              href="tel:+41628972244"
              class="font-mono mt-1 block font-medium leading-snug hover:opacity-80"
            >
              062 897 22 44
            </a>
            <a
              href="mailto:info@bexolutions.ch"
              class="font-mono mt-1 block break-all text-xs font-medium leading-snug hover:opacity-80"
            >
              info@bexolutions.ch
            </a>
          </div>
        </div>
      </div>

      <NuxtImg
        :src="BEXO_FOOTER_WORDMARK"
        class="mt-6 h-auto w-full max-w-full object-contain object-left opacity-90"
        alt="BEXOLUTIONS"
        sizes="100vw"
        loading="lazy"
      />

      <div class="mt-6 h-px w-full bg-white/20"></div>

      <p class="bexo-footer-legal mt-4 text-xs leading-5 sm:text-sm">
        © 2026 Bexolutions. Alle Rechte vorbehalten.
      </p>
      <div class="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
        <a
          v-for="legal of BEXO_LEGAL_LINKS"
          :key="legal.l"
          :href="legal.to"
          class="bexo-footer-legal inline-flex min-h-9 items-center text-xs leading-5 underline hover:opacity-80 sm:text-sm"
        >
          {{ legal.l }}
        </a>
      </div>
    </div>
  </footer>
</template>
