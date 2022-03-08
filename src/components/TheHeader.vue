<template>
  <header ref="header" class="l-header" :class="{'is-scroll': isScroll}">
    <div class="l-header__inner">
      <div class="pageHeader">
        <div class="pageHeader__title">
          <h1 class="pageHeader-logo">tabi<span>ing</span></h1>
        </div>
        <nav class="pageHeader-nav">
          <ul class="pageHeader-navList">
            <li class="pageHeader-navList__item"><nuxt-link class="pageHeader-navList__link" to="/">Home</nuxt-link></li>
            <li class="pageHeader-navList__item"><nuxt-link class="pageHeader-navList__link" to="/blog/">Blog</nuxt-link></li>
            <li class="pageHeader-navList__item"><nuxt-link class="pageHeader-navList__link" to="/photo/">Photo</nuxt-link></li>
            <li class="pageHeader-navList__item"><nuxt-link class="pageHeader-navList__link" to="/movie/">Movie</nuxt-link></li>
            <li class="pageHeader-navList__item"><nuxt-link class="pageHeader-navList__link" to="/about/">About</nuxt-link></li>
            <li class="pageHeader-navList__item"><nuxt-link class="pageHeader-navList__link" to="/contact/">Contact</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',
  data() {
    return {
      isScroll: false,
      headerTop: 0
    }
  },
  mounted() {
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    })
    document.dispatchEvent(new Event('scroll'))
  }
})
</script>
