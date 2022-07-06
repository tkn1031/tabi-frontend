<template>
  <div class="js-intersection top-movie-carouselUnit">
    <swiper
      ref="carousel"
      class="swiper top-movie-carouselUnit__carousel"
      :options="option"
      @ready="ready"
      @slideChangeTransitionEnd="getActiveCarouselIndex"
    >
      <swiper-slide v-for="(item, idx) in data" :key="idx" class="top-movie-carouselUnit__carousel__item">
        <a :href="item.url" class="c-card-movie top-movie-carouselUnit__carousel__link">
          <div class="c-card-movie__imgWrap">
            <div class="c-card-movie__imgWrap__icon"><svg class="c-icon-play"><use xlink:href="#play"></use></svg></div>
            <img class="c-card-movie__imgWrap__img" :src="item.imgUrl">
          </div>
          <div class="c-card-movie__content">
            <h3 class="c-card-movie__heading">{{ item.title }}</h3>
            <div class="c-card-movie__info">
              <div class="c-card-movie__info__item">
                <div class="c-card-movie__info__head">Location</div>
                <div class="c-card-movie__info__body">{{ item.place }}</div>
              </div>
              <div class="c-card-movie__info__item">
                <div class="c-card-movie__info__head">Date</div>
                <div class="c-card-movie__info__body">{{ item.shootingDate }}</div>
              </div>
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
    <button slot="button-prev" class="swiper-button-prev"><svg class="c-icon-arrowLeft"><use xlink:href="#arrowLeft"></use></svg></button>
    <button slot="button-next" class="swiper-button-next"><svg class="c-icon-arrowRight"><use xlink:href="#arrowRight"></use></svg></button>
    <!-- <div class="top-movie-carouselUnit__controller">
      <button slot="button-prev" class="swiper-button-prev"><svg class="c-icon-arrowLeft"><use xlink:href="#arrowLeft"></use></svg></button>
      <button slot="button-next" class="swiper-button-next"><svg class="c-icon-arrowRight"><use xlink:href="#arrowRight"></use></svg></button>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import IntersectionObserverWrapper from '@/assets/js/modules/intersectionObserverWrapper'

export default Vue.extend({
  name: 'TopMovieCarouselUnit',
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
  mounted() {
    const io = new IntersectionObserverWrapper({
      option: {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0
      },
    })
  },
  methods: {
    ready() {
      // @ts-ignore
      this.$emit('ready')
    },
    getActiveCarouselIndex() {
      // @ts-ignore
      this.activeCarouselIndex = this.swiper.realIndex
    }
  }
})
</script>
