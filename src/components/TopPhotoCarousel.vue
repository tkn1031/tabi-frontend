<template>
  <div class="top-photo-carousel">
    <div class="top-photo-carousel__country">
      <div v-for="(carousel, idx) in carousels" :key="idx" class="top-photo-carousel__country__item" :class="{'is-active' : idx === activeCarouselIndex}">{{ carousel.countryEn }}</div>
    </div>
    <swiper
      ref="photoCarousel"
      class="swiper top-photo-carousel__body"
      :options="option"
      @ready="ready"
      @slideChangeTransitionStart="getActiveCarouselIndex"
    >
      <swiper-slide v-for="(carousel, idx) in carousels" :key="idx" class="top-photo-carousel__body__item">
        <div class="top-photo-card">
          <div class="top-photo-card__img">
            <div class="top-photo-card__img__body" :style="{ backgroundImage: `url(${carousel.imgUrl})`}"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="top-photo-carousel-switch">
      <button slot="button-prev" class="swiper-button-prev"></button>
      <button slot="button-next" class="swiper-button-next"></button>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TopPhotoCarousel',
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
    }
  },
  computed: {
    swiper() {
      // @ts-ignore
      return this.$refs.photoCarousel.$swiper
    }
  },
  methods: {
    ready() {
      // @ts-ignore
      this.$emit('ready')
    },
    getActiveCarouselIndex() {
      // @ts-ignore
      this.$emit('getActivePhotoCarouselIndex', this.swiper.realIndex)
      // @ts-ignore
      this.activeCarouselIndex = this.swiper.realIndex
    }
  }
})
</script>
