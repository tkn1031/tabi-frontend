<template>
  <footer class="l-footer">
    <div class="l-footer__inner">
      <div class="pageFooter">
        <div class="pageFooter__main">
          <div class="pageFooter__main__siteTitle"><div class="pageFooter-logo">tabiing</div></div>
          <nav class="pageFooter__main__sitemap">
            <ul class="pageFooter-navList">
              <li class="pageFooter-navList__item"><nuxt-link class="pageFooter-navList__link" to="/">Home</nuxt-link></li>
              <li class="pageFooter-navList__item"><nuxt-link class="pageFooter-navList__link" to="/blog/">Blog</nuxt-link></li>
              <li class="pageFooter-navList__item"><nuxt-link class="pageFooter-navList__link" to="/photo/">Photo</nuxt-link></li>
              <li class="pageFooter-navList__item"><nuxt-link class="pageFooter-navList__link" to="/movie/">Movie</nuxt-link></li>
              <li class="pageFooter-navList__item"><nuxt-link class="pageFooter-navList__link" to="/about/">About</nuxt-link></li>
              <li class="pageFooter-navList__item"><nuxt-link class="pageFooter-navList__link" to="/contact/">Contact</nuxt-link></li>
            </ul>
          </nav>
        </div>
        <div class="pageFooter__pagetop">
          <button class="c-pagetop-button" @click.prevent="scrollTop"><span class="c-pagetop-button__icon"><svg class="c-icon-arrowUp c-icon-arrowUp--white"><use xlink:href="#arrowUp"></use></svg></span></button>
        </div>
        <div class="pageFooter__copyright">
          <small class="c-copyright">&copy; 2022 tabiing</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheFooter',
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
</script>
