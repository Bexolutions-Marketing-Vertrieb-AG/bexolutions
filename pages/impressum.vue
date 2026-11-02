<script setup lang="ts">
  import { definePageMeta, useHead } from "#imports"
  import LegalPage from "~/components/bexo/LegalPage.vue"
  import { useMarketingPageSeo } from "~/composables/useMarketingPageSeo"
  import { impressumHtml, impressumTitle } from "~/data/legal/impressum"

  definePageMeta({ layout: false })

  useHead({
    title: "Impressum — Bexolutions",
    htmlAttrs: { lang: "de-CH" },
  })

  useMarketingPageSeo({
    path: "/impressum",
    title: "Impressum — Bexolutions",
    description:
      "Impressum der Bexolutions Marketing und Vertrieb AG, Fabrikweg 1a, 5502 Hunzenschwil.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Impressum", path: "/impressum" },
    ],
  })
</script>

<template>
  <LegalPage :title="impressumTitle" :html="impressumHtml" />
</template>
