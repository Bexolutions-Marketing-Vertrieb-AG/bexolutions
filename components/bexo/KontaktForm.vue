<script setup lang="ts">
  import { reactive, ref } from "vue"
  import type { IKontaktForm } from "~/types/dto/IKontaktForm"
  import { getAttribution } from "~/utils/attribution"
  import { pushEvent } from "~/utils/tracking"

  const salutations = ["Herr / Frau", "Herr", "Frau"]

  const topics = [
    "Sichtbarkeitsanalyse",
    "SEO & Online Marketing",
    "Webseite / Relaunch",
    "Allgemeine Anfrage",
  ]

  const form = reactive<IKontaktForm>({
    salutation: salutations[0],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    topic: topics[0],
    message: "",
  })

  const status = ref<"idle" | "loading" | "success" | "error">("idle")
  const errorMessage = ref("")

  // Topic as a short key for analytics; the free text never leaves the form.
  function topicKey(topic: string) {
    const keys: Record<string, string> = {
      Sichtbarkeitsanalyse: "sichtbarkeitsanalyse",
      "SEO & Online Marketing": "seo",
      "Webseite / Relaunch": "webseite",
      "Allgemeine Anfrage": "allgemein",
    }
    return keys[topic] ?? "andere"
  }

  function resetForm() {
    form.salutation = salutations[0]
    form.firstName = ""
    form.lastName = ""
    form.email = ""
    form.phone = ""
    form.company = ""
    form.topic = topics[0]
    form.message = ""
  }

  async function onSubmit() {
    status.value = "loading"
    errorMessage.value = ""

    try {
      await $fetch("/api/forms/kontakt", {
        method: "POST",
        body: { ...form, attribution: getAttribution() },
      })
      pushEvent("generate_lead", {
        form_id: "kontakt",
        form_topic: topicKey(form.topic),
      })
      status.value = "success"
      resetForm()
    } catch (error: unknown) {
      status.value = "error"
      const fetchError = error as { data?: { statusMessage?: string } }
      errorMessage.value =
        fetchError.data?.statusMessage ||
        "Senden fehlgeschlagen. Bitte versuchen Sie es erneut."
    }
  }
</script>

<template>
  <div>
    <h2
      class="text-2xl font-semibold text-black md:text-[30px] md:leading-[42px]"
    >
      Nachricht senden.
    </h2>

    <p
      v-if="status === 'success'"
      class="mt-4 rounded-[20px] bg-[#ecf6ff] px-5 py-4 text-base text-[#0e2138]"
      role="status"
    >
      Vielen Dank! Wir melden uns innerhalb von 1 Werktag bei Ihnen.
    </p>

    <form v-else class="mt-6 flex flex-col gap-5" @submit.prevent="onSubmit">
      <label class="block">
        <span class="mb-2 block text-base text-black">Ansprache</span>
        <select
          v-model="form.salutation"
          class="field-control"
          :disabled="status === 'loading'"
        >
          <option v-for="s of salutations" :key="s" :value="s">{{ s }}</option>
        </select>
      </label>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label class="block">
          <span class="mb-2 block text-base text-black">Vorname</span>
          <input
            v-model="form.firstName"
            type="text"
            required
            autocomplete="given-name"
            class="field-control"
            :disabled="status === 'loading'"
          />
        </label>
        <label class="block">
          <span class="mb-2 block text-base text-black">Nachname</span>
          <input
            v-model="form.lastName"
            type="text"
            required
            autocomplete="family-name"
            class="field-control"
            :disabled="status === 'loading'"
          />
        </label>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label class="block">
          <span class="mb-2 block text-base text-black">E-Mail</span>
          <input
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            class="field-control"
            :disabled="status === 'loading'"
          />
        </label>
        <label class="block">
          <span class="mb-2 block text-base text-black">Telefonnummer</span>
          <input
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            class="field-control"
            :disabled="status === 'loading'"
          />
        </label>
      </div>

      <label class="block">
        <span class="mb-2 block text-base text-black">Unternehmen</span>
        <input
          v-model="form.company"
          type="text"
          autocomplete="organization"
          placeholder="Unternehmen"
          class="field-control"
          :disabled="status === 'loading'"
        />
      </label>

      <label class="block">
        <span class="mb-2 block text-base text-black">Thema</span>
        <select
          v-model="form.topic"
          class="field-control"
          :disabled="status === 'loading'"
        >
          <option v-for="t of topics" :key="t" :value="t">{{ t }}</option>
        </select>
      </label>

      <label class="block">
        <span class="mb-2 block text-base text-black">Nachricht</span>
        <textarea
          v-model="form.message"
          rows="5"
          required
          placeholder="Ziel in 1–2 Sätzen"
          class="field-control min-h-[140px] py-3"
          :disabled="status === 'loading'"
        ></textarea>
      </label>

      <p v-if="status === 'error'" class="text-red-700 text-base" role="alert">
        {{ errorMessage }}
      </p>

      <button
        type="submit"
        class="bexo-btn-primary w-full sm:w-[237px]"
        :disabled="status === 'loading'"
      >
        {{ status === "loading" ? "Wird gesendet…" : "Nachricht senden" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
  .field-control {
    @apply h-12 w-full rounded-[20px] border border-black bg-transparent px-5 text-base text-black;
  }

  textarea.field-control {
    @apply h-auto;
  }

  .field-control:disabled {
    @apply opacity-60;
  }
</style>
