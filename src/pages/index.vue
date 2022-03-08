<template>
  <div>
    <div class="current-page">Home</div>
    <TheHero :option="swiperHeroOption" :carousels="heroCarousels" />
    <section id="intro" class="top-intro-section">
      <div class="top-intro-section-inner">
        <div class="top-intro-content">
          <div class="top-intro-content__text">
            <div class="top-intro-textbox">
              <p class="c-mask top-intro-textbox__heading js-intersection">なぜ旅する？</p>
              <p class="c-mask top-intro-textbox__body js-intersection">シンプルに面白いから。Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id dolorem eveniet hic! Quisquam ut distinctio hic veniam ipsum excepturi deleniti minus nemo eos fugit et repellat, sint ipsam modi?</p>
            </div>
          </div>
          <div class="top-intro-content__bg">
            <p class="top-intro-bgText">Why travel?</p>
            <div class="top-intro-bgUnion">
              <div class="c-mask top-intro-bg top-intro-bg--01 js-intersection" style="background-image: url('/img/top_bg_intro_01.jpg')"></div>
              <div class="c-mask top-intro-bg top-intro-bg--02 js-intersection" style="background-image: url('/img/top_bg_intro_02.jpg')"></div>
            </div>
            <div class="c-mask top-intro-bg top-intro-bg--03 js-intersection" style="background-image: url('/img/top_bg_intro_03.jpg')"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- /#intro -->

    <section id="blog" class="top-blog-section">
      <div class="top-blog-section-inner">
        <div class="top-blog-section-header">
          <h2 class="c-mask top-blog-heading js-intersection">旅のブログ</h2>
          <div class="top-blog-heading-en">Blog</div>
          <nuxt-link class="c-mask c-line-button top-more-button js-intersection" to="/blog/">View list<span class="c-line-button__icon"><svg class="c-icon-arrowLineRight"><use xlink:href="#arrowLineRight"></use></svg></span></nuxt-link>
        </div>
        <div class="top-blog-content">
          <div class="c-blog-list top-blog-list">
            <article v-for="(blog, idx) in blogList" :key="idx" class="c-blog-list__item">
              <a href="#" class="c-blog-card c-fadeInUp js-intersection">
                <div class="c-blog-card__header">
                  <time class="c-blog-card__date" :datetime="blog.date">{{ blog.date }}</time>
                  <h3 class="c-blog-card__heading">{{ blog.title }}</h3>
                </div>
                <div class="c-blog-card__content">
                  <div class="c-blog-card__img" :class="{'c-blog-card__img--vertical' : isVerticalImage(blog.imgWidth, blog.imgHeight)}">
                    <div class="c-blog-card__img__body" :style="{ backgroundImage: `url(${blog.imgUrl})`}"></div>
                  </div>
                  <div class="c-blog-card__category">{{ blog.category }}</div>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- /#blog -->

    <!-- <section id="photo" class="top-section top-section--photo">
      <div class="top-section-photo-heading-wrap">
        <div class="top-photo-bg-wrap">
          <div class="c-mask top-photo-bg top-photo-bg--01 js-intersection" style="background-image: url('/img/bg_photo_01.jpg')"></div>
          <div class="c-mask top-photo-bg top-photo-bg--02 js-intersection" style="background-image: url('/img/bg_photo_02.jpg')"></div>
        </div>
        <div class="c-fadeInUp top-section-heading--photo js-intersection">
          <div class="top-section-heading__en">Photo</div>
          <h2 class="top-section-heading__jp">旅の写真</h2>
        </div>
      </div>
      <div class="top-photo-inner">
        <div class="top-section-content top-section-content--photo">
          <div class="top-photo-carousel-wrap">
            <div class="c-fadeInUp top-photo-carousel-switch js-intersection">
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div>
            </div>
            <swiper
              v-show="showPhoto"
              ref="photoCarousel"
              class="swiper top-photo-carousel js-intersection"
              :options="photoSwiperOption"
              @ready="initphoto"
            >
              <swiper-slide v-for="(carousel, idx) in photoCarousels" :key="idx" class="top-photo-carousel__item">
                <a class="c-photo-card" href="#">
                  <div class="c-photo-card__img">
                    <div class="c-photo-card__img__body" :style="{ backgroundImage: `url(${carousel.imgUrl})`}"></div>
                  </div>
                  <div class="c-photo-card__content">
                    <h3 class="c-photo-card__heading">{{ carousel.title }}</h3>
                    <time class="c-photo-card__date" :datetime="carousel.visitYear">{{ carousel.visitYear }}</time>
                  </div>
                  <div class="c-photo-card__country">{{ carousel.countryEn }}</div>
                </a>
              </swiper-slide>
            </swiper>
          </div>
          <div class="top-photo-toList">
            <a class="c-fadeInUp c-line-button top-more-button js-intersection" href="#">View List</a>
          </div>
        </div>
      </div>
    </section> -->
    <section id="photo" class="top-photo-section">
      <div class="top-photo-section-inner">
        <div class="top-photo-contentContainer">
          <div class="top-photo-contentContainer__text">
            <div class="top-photo-section-header">
              <h2 class="c-mask top-photo-heading js-intersection">旅の写真</h2>
              <div class="top-photo-heading-en">Photo</div>
              <nuxt-link class="c-mask c-line-button top-more-button js-intersection" to="/photo/">View list<span class="c-line-button__icon"><svg class="c-icon-arrowLineRight"><use xlink:href="#arrowLineRight"></use></svg></span></nuxt-link>
            </div>
            <ul class="top-photo-detailHeadingList">
              <li v-for="(carousel, idx) in photoCarousels" :key="idx" class="top-photo-detailHeadingList__item">
                <a class="top-photo-detailText" href="#" :class="{'is-active' : idx === activePhotoCarouselIndex}" @mouseover="changeSlideTo(idx, swiperPhotoOption.speed)">
                  <h3 class="top-photo-detailText__heading">{{ carousel.title }}</h3>
                  <time class="top-photo-detailText__date">{{ carousel.visitYear }}</time>
                </a>
              </li>
            </ul>
          </div>
          <div class="top-photo-contentContainer__image">
            <TopPhotoCarousel id="photoCarousel" ref="photoCarousel" :option="swiperPhotoOption" :carousels="photoCarousels" @getActivePhotoCarouselIndex="setActivePhotoCarouselIndex" />
          </div>
        </div>
      </div>
    </section>
    <!-- /#photo -->

    <section id="movie" class="top-movie-section">
      <div class="top-movie-section-inner">
        <div class="top-movie-section-header">
          <h2 class="c-mask top-movie-heading js-intersection">旅の動画</h2>
          <div class="top-movie-heading-en">Movie</div>
          <nuxt-link class="c-mask c-line-button top-more-button js-intersection" to="/movie/">View list<span class="c-line-button__icon"><svg class="c-icon-arrowLineRight"><use xlink:href="#arrowLineRight"></use></svg></span></nuxt-link>
        </div>
        <div class="top-movie-content">
          <div class="c-movie-list top-movie-list">
            <div v-for="(movie, idx) in movieList" :key="idx" class="c-movie-list__item">
              <a :href="movie.url" class="c-movie-card c-fadeInUp js-intersection">
                <div class="c-movie-card__img">
                  <div class="c-movie-card__img__body" :style="{ backgroundImage: `url(${movie.imgUrl})`}"></div>
                </div>
                <div class="c-movie-card__content">
                  <h3 class="c-movie-card__heading">{{ movie.title }}</h3>
                  <div class="c-movie-card__info">
                    <time class="c-movie-card__info__date" :datetime="movie.shootingDate">{{ movie.shootingDate }}</time>
                    <div class="c-movie-card__info__place">{{ movie.place }}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IntersectionObserver from '@/assets/js/modules/intersectionObserve'

export default Vue.extend({
  name: 'Index',
  asyncData() {
    return {
      heroCarousels: [
        '/img/slide_01.jpg',
        '/img/slide_02.jpg',
        '/img/slide_03.jpg',
        '/img/slide_04.jpg',
        '/img/slide_05.jpg',
        '/img/slide_06.jpg',
      ],
      photoCarousels: [
        {
          id: '1',
          date: '2021.01.01',
          visitYear: '2021',
          title: 'インド',
          countryJp: 'インド',
          countryEn: 'India',
          countryCode: 'THA',
          imgUrl: '/img/img_photo_thumb_01.jpg',
          imgAlt: 'サムネ01'
        },
        {
          id: '2',
          date: '2021.01.01',
          visitYear: '2021',
          title: 'スリランカ',
          countryJp: 'スリランカ',
          countryEn: 'Srilanka',
          countryCode: 'KHM',
          imgUrl: '/img/img_photo_thumb_02.jpg',
          imgAlt: 'サムネ02'
        },
        {
          id: '3',
          date: '2021.01.01',
          visitYear: '2021',
          title: 'ラオス',
          countryJp: 'ラオス',
          countryEn: 'Laos',
          countryCode: 'VNM',
          imgUrl: '/img/img_photo_thumb_03.jpg',
          imgAlt: 'サムネ03'
        },
        {
          date: '2021.01.01',
          visitYear: '2021',
          title: '沖縄・石垣島',
          countryJp: '沖縄・石垣島',
          countryEn: 'Japan',
          countryCode: 'IND',
          imgUrl: '/img/img_photo_thumb_04.jpg',
          imgAlt: 'サムネ04'
        },
        {
          date: '2021.01.01',
          visitYear: '2021',
          title: 'トルコ',
          countryJp: 'トルコ',
          countryEn: 'Turkey',
          countryCode: 'NPL',
          imgUrl: '/img/img_photo_thumb_05.jpg',
          imgAlt: 'サムネ05'
        },
        // {
        //   date: '2021.01.01',
        //   visitYear: '2021',
        //   title: '世界最大の鮫に出会うために',
        //   countryJp: 'フィリピン',
        //   countryEn: 'Philippines',
        //   countryCode: 'PHL',
        //   imgUrl: '/img/img_photo_thumb_06.jpg',
        //   imgAlt: 'サムネ06'
        // },
      ],
      blogList: [
        {
          date: '2022.01.10',
          category: 'フィリピン',
          title: 'フィリピンへジンベイザメに会いに行ってきたよー',
          body: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります...',
          imgUrl: '/img/img_blog_01.jpg',
          imgAlt: 'ブログ01',
          imgWidth: '400',
          imgHeight: '300',
        },
        {
          date: '2022.01.10',
          category: 'モロッコ',
          title: '初めてのアフリカ',
          body: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります...',
          imgUrl: '/img/img_blog_04.jpg',
          imgAlt: 'ブログ01',
          imgWidth: '300',
          imgHeight: '400',
        },
        {
          date: '2022.01.10',
          category: 'その他',
          title: 'サイトを公開しました',
          body: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります...',
          imgUrl: '/img/img_blog_03.jpg',
          imgAlt: 'ブログ01',
          imgWidth: '400',
          imgHeight: '300',
        },
      ],
      movieList: [
        {
          shootingDate: '2020.01.01',
          place: 'ニューヨーク・タイムズスクエア',
          title: 'ニューヨーク年越し',
          url: 'https://youtu.be/I5Ba8-33vPY',
          imgUrl: '/img/img_movie_01.jpg',
          imgAlt: '動画01',
          imgWidth: '1600',
          imgHeight: '900',
        },
        {
          shootingDate: '2020.01.01',
          place: 'ニューヨーク・タイムズスクエア',
          title: 'ニューヨーク年越し',
          url: 'https://youtu.be/I5Ba8-33vPY',
          imgUrl: '/img/img_movie_01.jpg',
          imgAlt: '動画02',
          imgWidth: '1600',
          imgHeight: '900',
        },
      ]
    }
  },
  data() {
    return {
      swiperHeroOption: {
        init: false,
        grabCursor: true,
        speed: 800,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        loop: true,
      },
      swiperPhotoOption: {
        grabCursor: true,
        speed: 800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },
      activePhotoCarouselIndex: 0,
    }
  },
  mounted() {
    const io = new IntersectionObserver('.js-intersection', {
      root: null,
      rootMargin: '-60px 0px',
      threshold: 0.3
    })
  },
  methods: {
    /**
     * 縦画像かを判定する
     * @param {Number} width 幅
     * @param {Number} height 高さ
     * @return {Boolean} 縦画像か
     */
    isVerticalImage(width: number, height: number) {
      return width / height < 1
    },

    /**
     * 指定したインデックスのスライドに遷移する
     * @param {Number} index インデックス
     * @param {Number} speed 遷移速度(ms)
     */
    changeSlideTo(index: number, speed: number) {
      // @ts-ignore
      this.$refs.photoCarousel.swiper.slideToLoop(index, speed)
    },

    /**
     * フォトカルーセルのアクティブなインデックスをデータにセットする
     * @param {Number} index インデックス
     */
    setActivePhotoCarouselIndex(index: number) {
      this.activePhotoCarouselIndex = index
    }
  }
})
</script>
