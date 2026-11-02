import type { NuxtConfig } from "nuxt/config"
import { defineNuxtConfig } from "nuxt/config"

const gtmId = process.env.NUXT_PUBLIC_GTM_ID ?? ""

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-28",
  ssr: true,
  devtools: { enabled: true },
  imports: {
    autoImport: false,
    global: false,
    dirs: [],
  },
  components: {
    global: false,
    dirs: [],
  },
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/i18n"],
  css: ["~/assets/css/style.css", "~/assets/css/bexo.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    domains: ["localhost", "s3.eu-central-2.amazonaws.com"],
  },
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    strategy: "no_prefix",
    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  runtimeConfig: {
    brevoApiKey: process.env.BREVO_API_KEY ?? "",
    brevoFromEmail: process.env.BREVO_FROM_EMAIL ?? "",
    brevoFromName: process.env.BREVO_FROM_NAME ?? "Bexolutions",
    brevoToEmail: process.env.BREVO_TO_EMAIL ?? "",
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? "https://www.bexolutions.ch",
      siteName:
        process.env.NUXT_PUBLIC_SITE_NAME ??
        "Bexolutions Marketing und Vertrieb AG",
      siteDescription:
        process.env.NUXT_PUBLIC_SITE_DESCRIPTION ??
        "Bexolutions — Ihre Digitalagentur im Kanton Aargau. SEO, Online Marketing und Vertriebsoptimierung für KMU in der Schweiz und im DACH-Raum.",
      organizationName:
        process.env.NUXT_PUBLIC_ORGANIZATION_NAME ??
        "Bexolutions Marketing und Vertrieb AG",
      organizationLogo:
        process.env.NUXT_PUBLIC_ORGANIZATION_LOGO ?? "/favicon.png",
      defaultLocale:
        process.env.NUXT_PUBLIC_DEFAULT_LOCALE ??
        process.env.NUXT_PUBLIC_SITE_LOCALE ??
        "de_CH",
      twitterSite: process.env.NUXT_PUBLIC_TWITTER_SITE ?? "",
      twitterCreator: process.env.NUXT_PUBLIC_TWITTER_CREATOR ?? "",
      ogImageEnabled: process.env.NUXT_PUBLIC_OG_IMAGE_ENABLED !== "false",
      commentsEnabled: process.env.NUXT_PUBLIC_COMMENTS_ENABLED === "true",
      gtmId,
      ogLogoPath: process.env.NUXT_PUBLIC_OG_LOGO_PATH ?? "/favicon.png",
      preferredSourceEnabled:
        process.env.NUXT_PUBLIC_PREFERRED_SOURCE_ENABLED !== "false",
    },
  },
  nitro: {
    compressPublicAssets: true,
    headers: [
      {
        key: "X-Robots-Tag",
        value: "index,follow",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
  },
  experimental: {
    typedPages: true,
  },
  build: {
    transpile: [],
  },
  hooks: {
    "pages:extend"(pages) {
      // exclude _widget components
      pages = pages.filter((x) => !x.path.includes("_"))
    },
  },
  app: {
    head: {
      script: gtmId
        ? [
            {
              innerHTML: `
              (function () {
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag(){dataLayer.push(arguments);}
                window.gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'analytics_storage': 'denied'
                });
              })()
            `,
            },
            {
              innerHTML: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
            `,
            },
          ]
        : [],
    },
  },
} as NuxtConfig)
