<script setup lang="ts">
  import { definePageMeta, useHead } from "#imports"
  import LegalPage from "~/components/bexo/LegalPage.vue"
  import { useMarketingPageSeo } from "~/composables/useMarketingPageSeo"
  import { datenschutzHtml, datenschutzTitle } from "~/data/legal/datenschutz"

  definePageMeta({ layout: false })

  useHead({
    title: "Datenschutzerklärung — Bexolutions",
    htmlAttrs: { lang: "de-CH" },
  })

  useMarketingPageSeo({
    path: "/datenschutz",
    title: "Datenschutzerklärung — Bexolutions",
    description:
      "Datenschutzerklärung der Bexolutions Marketing und Vertrieb AG.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Datenschutz", path: "/datenschutz" },
    ],
  })
</script>

<template>
  <LegalPage :title="datenschutzTitle" :html="datenschutzHtml" />
</template>
