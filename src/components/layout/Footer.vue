<template>
  <footer class="l-footer">
    <div class="l-footer__inner">
      <div class="l-footer__main">
        <div class="l-footer__logo">tabi360</div>
        <nav class="l-footer__sitenav">
          <ul class="l-footer__navList">
            <li class="l-footer__navList__item"><nuxt-link class="l-footer__navList__link" to="/"><span>HOME</span></nuxt-link></li>
            <li class="l-footer__navList__item"><nuxt-link class="l-footer__navList__link" to="/blog/"><span>ブログを読む</span></nuxt-link></li>
            <li class="l-footer__navList__item"><nuxt-link class="l-footer__navList__link" to="/photo/"><span>写真を見る</span></nuxt-link></li>
            <li class="l-footer__navList__item"><nuxt-link class="l-footer__navList__link" to="/movie/"><span>動画を見る</span></nuxt-link></li>
            <li class="l-footer__navList__item"><nuxt-link class="l-footer__navList__link" to="/about/"><span>サイトについて</span></nuxt-link></li>
            <li class="l-footer__navList__item"><nuxt-link class="l-footer__navList__link" to="/contact/"><span>お問い合わせ</span></nuxt-link></li>
          </ul>
        </nav>
      </div>
      <div class="l-footer__copyright">
        <small class="c-copyright">&copy; 2022 tabi360</small>
      </div>
      <div class="l-footer__pagetop">
        <button class="c-button-pagetop" @click.prevent="scrollTop"><span class="c-button-pagetop__icon"><svg class="c-icon-arrowUp c-icon-arrowUp--white"><use xlink:href="#arrowUp"></use></svg></span></button>
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
