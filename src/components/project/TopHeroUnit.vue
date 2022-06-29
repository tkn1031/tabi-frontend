<template>
  <div class="top-heroUnit">
    <div class="top-heroUnit__container">
      <div ref="catch" class="top-heroUnit__catch">
        <div class="top-heroUnit__catch__en">
          <div class="top-heroUnit__catchLine">
            <div class="c-mask top-heroUnit__catchText top-heroUnit__catchText--en">Our planet is</div>
          </div>
          <div class="top-heroUnit__catchLine">
            <div class="c-mask top-heroUnit__catchText top-heroUnit__catchText--en">beyond our</div>
          </div>
          <div class="top-heroUnit__catchLine">
            <div class="c-mask top-heroUnit__catchText top-heroUnit__catchText--en">imagination</div>
          </div>
        </div>
        <div class="top-heroUnit__catch__jp">
          <div class="top-heroUnit__catchLine">
            <div class="c-mask top-heroUnit__catchText top-heroUnit__catchText--jp">僕らの星は想像以上だ</div>
          </div>
        </div>
      </div>
      <swiper
        ref="carousel"
        class="swiper top-heroUnit__carousel"
        :class="{'show': show}"
        :options="option"
        @ready="ready"
        @slideChangeTransitionEnd="getActiveCarouselIndex"
      >
        <swiper-slide v-for="(item, idx) in data" :key="idx" class="top-heroUnit__carousel__item">
          <picture class="top-heroUnit__carousel__pic" :class="{'is-active' : idx === activeCarouselIndex}">
            <source media="(min-width: 1025px)" :srcset="item">
            <img :src="item" alt="">
          </picture>
        </swiper-slide>
        <!-- <div slot="pagination" class="swiper-pagination" /> -->
      </swiper>
      <div class="top-heroUnit__progressbar"><div ref="progressbar" class="top-heroUnit__progressbar__body"></div></div>
    </div>
    <div class="top-heroUnit__scrolldown">
      <ComponentScrollDown />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TopHero',
  props: {
    option: {
      type: Object,
      required: true,
    },
    data: {
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
      show: false
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
      this.show = true
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
