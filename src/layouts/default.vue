<template>
  <div class="l-wrap">
    <PartsSvgInclude />
    <LayoutBgLine />
    <LayoutHeader />
    <main class="l-main">
      <Nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout'
})
</script>
