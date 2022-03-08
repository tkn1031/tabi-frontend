<template>
  <div class="l-wrap">
    <SvgInclude />
    <div class="l-bg-lines">
      <div class="l-bg-lines__line01"></div>
      <div class="l-bg-lines__line02"></div>
      <div class="l-bg-lines__line03"></div>
      <div class="l-bg-lines__line04"></div>
      <div class="l-bg-lines__line05"></div>
    </div>
    <TheHeader />
    <main class="l-main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout'
})
</script>
