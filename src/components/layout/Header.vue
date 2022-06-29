<template>
  <header ref="header" class="l-header" :class="{'is-scroll': isScroll}">
    <div class="l-header__inner">
      <h1 class="l-header__heading">tabi360</h1>
      <nav class="l-header__nav">
        <ul class="l-header__navList">
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/"><span>HOME</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/blog/"><span>ブログを読む</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/photo/"><span>写真を見る</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/movie/"><span>動画を見る</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/about/"><span>サイトについて</span></nuxt-link></li>
          <li class="l-header__navList__item"><nuxt-link class="l-header__navList__link" to="/contact/"><span>お問い合わせ</span></nuxt-link></li>
        </ul>
      </nav>
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
