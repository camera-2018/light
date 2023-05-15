<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink icon-btn to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </RouterLink>

    <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-carbon-language />
    </a>

    <RouterLink icon-btn to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a icon-btn rel="noreferrer" href="https://github.com/camera-2018/light" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
  <div class="main_logo p-5 text-3xl">
    @2023 <span class="logo">🐍🈵🈲⛰️</span> TEAM
  </div>
</template>

<style scoped>
.logo {
  text-shadow: 0 -6px 4px #da2424,
  /*上*/ 4px -4px 4px #54c42b,
  /*右上*/ 6px 0 4px #5d046e,
  /*右*/ 4px 4px 4px #f3e6e6,
  /*右下*/ 0 6px 4px #dab70d,
  /*下*/ -4px 4px 4px #d917e7,
  /*左下*/ -6px 0 4px #213be9,
  /*左*/ -4px -4px 4px #131212;
}
</style>
