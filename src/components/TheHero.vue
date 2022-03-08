<template>
  <div class="hero">
    <div class="hero__wrap">
      <div ref="catch" class="hero__catch">
        <div class="hero__catch__en">
          <div class="hero-catch-line">
            <div class="c-mask hero-catch-text hero-catch-text--en">What a</div>
          </div>
          <div class="hero-catch-line">
            <div class="c-mask hero-catch-text hero-catch-text--en">wonderful</div>
          </div>
          <div class="hero-catch-line">
            <div class="c-mask hero-catch-text hero-catch-text--en">world</div>
          </div>
        </div>
        <div class="hero__catch__jp">
          <div class="hero-catch-line">
            <div class="c-mask hero-catch-text hero-catch-text--jp">素晴らしきこの世界</div>
          </div>
        </div>
      </div>
      <div class="hero__carousel">
        <swiper
          ref="carousel"
          class="swiper hero-carousel"
          :class="{'show': showHero}"
          :options="option"
          @ready="ready"
          @slideChangeTransitionEnd="getActiveCarouselIndex"
        >
          <swiper-slide v-for="(carousel, idx) in carousels" :key="idx" class="hero-carousel__item">
            <div class="hero-carousel__img" :class="{'is-active' : idx === activeCarouselIndex}" :style="{ backgroundImage: `url(${carousel})`}"></div>
          </swiper-slide>
          <!-- <div slot="pagination" class="swiper-pagination" /> -->
        </swiper>
      </div>
      <div class="hero__progressbar"><div ref="progressbar" class="hero__progressbar__body"></div></div>
    </div>
    <div class="hero__scrolldown">
      <scroll-down />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHero',
  props: {
    option: {
      type: Object,
      required: true,
    },
    carousels: {
      type: Array,
      default() {
        return []
      },
      required: true
    }
  },
  data() {
    return {
      activeCarouselIndex: 0,
      showHero: false
    }
  },
  computed: {
    swiper() {
      // @ts-ignore
      return this.$refs.carousel.$swiper
    }
  },
  methods: {
    showCatch() {
      let delay: number = 0
      // @ts-ignore
      this.$refs.catch.querySelectorAll('.c-mask').forEach((elem: any, idx: number) => {
        delay = idx === 0 ? 0 : 200 * idx
        setTimeout(() => {
          elem.classList.add('is-inview')
        }, delay)
      })
    },
    ready() {
      // @ts-ignore
      this.$emit('ready')
      // @ts-ignore
      this.swiper.on('slideChangeTransitionStart', () => {
        // @ts-ignore
        this.$refs.progressbar.style.transitionDuration = '0s'
        // @ts-ignore
        this.$refs.progressbar.style.transform = 'scaleX(0)'
      })
      // @ts-ignore
      this.swiper.on('slideChangeTransitionEnd', () => {
        // @ts-ignore
        this.$refs.progressbar.style.transitionDuration = `${this.option.autoplay.delay}ms`
        // @ts-ignore
        this.$refs.progressbar.style.transform = 'scaleX(1)'
      })
      // @ts-ignore
      this.swiper.init()
      // @ts-ignore
      this.showHero = true
      // @ts-ignore
      setTimeout(this.showCatch, 800)
    },
    getActiveCarouselIndex() {
      // @ts-ignore
      this.activeCarouselIndex = this.swiper.realIndex
    }
  }
})
</script>
