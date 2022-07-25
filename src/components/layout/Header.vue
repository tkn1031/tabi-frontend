<template>
  <header ref="header" class="l-header" :class="{'is-scroll': isScroll, 'is-menuOpen': isMenuOpen}">
    <div class="l-header__inner">
      <h1 class="l-header__heading">tabi360</h1>
      <nav class="l-header__nav">
        <ul class="l-header__navList">
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/"><span>Home</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/blog/"><span>Blog</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/photo/"><span>Photo</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/movie/"><span>Movie</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/about/"><span>About</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/contact/"><span>Contact</span></nuxt-link></li>
        </ul>
      </nav>
      <button class="l-header__menuBtn" :class="{'active': isMenuOpen}" @click="toggleMenu">
        <span class="l-header__menuBtn__bar"></span>
        <span class="l-header__menuBtn__bar"></span>
        <span class="l-header__menuBtn__bar"></span>
      </button>
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
      isMenuOpen: false
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
  },
  methods: {
    toggleMenu() {
      // @ts-ignore
      document.querySelector('body').classList.toggle('hidden')
      this.isMenuOpen = !this.isMenuOpen
    }
  }
})
</script>
