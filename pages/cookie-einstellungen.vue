<script setup lang="ts">
  import { definePageMeta, useHead } from "#imports"
  import LegalPage from "~/components/bexo/LegalPage.vue"
  import { useMarketingPageSeo } from "~/composables/useMarketingPageSeo"
  import {
    cookieEinstellungenHtml,
    cookieEinstellungenTitle,
  } from "~/data/legal/cookie-einstellungen"

  definePageMeta({ layout: false })

  useHead({
    title: "Cookie-Einstellungen — Bexolutions",
    htmlAttrs: { lang: "de-CH" },
  })

  useMarketingPageSeo({
    path: "/cookie-einstellungen",
    title: "Cookie-Einstellungen — Bexolutions",
    description:
      "Cookie-Einstellungen für die Website der Bexolutions Marketing und Vertrieb AG.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Cookie-Einstellungen", path: "/cookie-einstellungen" },
    ],
  })
</script>

<template>
  <LegalPage
    :title="cookieEinstellungenTitle"
    :html="cookieEinstellungenHtml"
    show-cookie-cta
  />
</template>
