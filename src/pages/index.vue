<template>
  <div>
    <div class="current-page">Home</div>
    <ProjectTopHeroUnit :option="swiperHeroOption" :data="heroData" />
    <section id="intro" class="top-intro-section">
      <div class="l-inner">
        <div class="top-intro-content">
          <div class="top-intro-content__text">
            <p class="top-intro-catch"><span>Why</span><span>Travel?</span></p>
            <div class="top-intro-textbox">
              <h2 class="js-intersection c-mask top-intro-textbox__heading"><span>旅する理由</span></h2>
              <p class="js-intersection c-mask top-intro-textbox__body">シンプルに面白いから。Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id dolorem eveniet hic! Quisquam ut distinctio hic veniam ipsum excepturi deleniti minus nemo eos fugit et repellat, sint ipsam modi?</p>
            </div>
          </div>
          <div class="top-intro-content__bgs">
            <div class="top-intro-bgUnion">
              <div class="js-intersection c-fadeInUp top-intro-bg top-intro-bg--01" style="background-image: url('/img/top_bg_intro_01.jpg')"></div>
              <div class="js-intersection c-fadeInUp top-intro-bg top-intro-bg--02" style="background-image: url('/img/top_bg_intro_02.jpg')"></div>
            </div>
            <div class="js-intersection c-fadeInUp top-intro-bg top-intro-bg--03" style="background-image: url('/img/top_bg_intro_03.jpg')"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- /#intro -->

    <section id="blog" class="js-section-blog top-blog-section">
      <div class="l-inner">
        <ProjectTopSectionHeader
          title="Blog"
          subtitle="ブログ"
          :modifier-classes="['top-blog-section-header']"
        />
        <div class="top-blog-content">
          <div class="c-list-blog top-blog-list">
            <article v-for="(blog, idx) in blogList" :key="idx" class="c-list-blog__item top-blog-list__item">
              <a href="#" class="js-intersection c-fadeInUp c-card-blog top-blog-card" :class="{'c-card-blog--reverse': idx === 1}">
                <time class="c-card-blog__date" :datetime="blog.date">{{ blog.date }}</time>
                <div class="c-card-blog__imgWrap">
                  <img class="c-card-blog__imgWrap__img" :src="blog.imgUrl">
                </div>
                <div class="c-card-blog__content">
                  <h3 class="c-card-blog__heading">{{ blog.title }}</h3>
                  <p class="c-card-blog__body">{{ blog.body }}</p>
                  <ul class="c-card-blog__tags">
                    <li v-for="(tag, idx2) in blog.tags" :key="idx2" class="c-card-blog__tags__item"><span>{{ tag }}</span></li>
                  </ul>
                </div>
              </a>
            </article>
          </div>
          <div class="top-blog-more">
            <LinkArrow
              text="View More"
              link="/blog/"
              :modifier-classes="['top-more-button']"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- /#blog -->

    <section id="photo" class="js-section-photo top-photo-section">
      <div class="l-inner">
        <ProjectTopSectionHeader
          title="Photo"
          subtitle="写真"
          :modifier-classes="['top-photo-section-header']"
        />
        <div class="top-photo-content">
          <ul class="c-list-linkPhoto">
            <li v-for="photo in photos" :key="photo.id" class="c-list-linkPhoto__item">
              <nuxt-link ref="linkPhoto" class="c-link-photo" :to="`/photo/${photo.id}`">
                <div ref="linkPhotoContent" class="c-link-photo__content">
                  <span class="c-link-photo__year">{{ photo.visitYear }}</span>
                  <h3 class="c-link-photo__heading"><span class=" c-link-photo__heading__main" :style="`background-image: url(${photo.imgUrl})`">{{ photo.title }}</span><span class=" c-link-photo__heading__sub" :style="`background-image: url(${photo.imgUrl})`">{{ photo.visit | stringJoin('／') }}</span></h3>
                  <div ref="linkPhotoThumb" class="c-link-photo__img" :style="`background-image: url(${photo.imgUrl})`"></div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="top-photo-more">
          <LinkArrow
            text="View More"
            link="/photo/"
            :modifier-classes="['top-more-button']"
          />
        </div>
      </div>
    </section>
    <!-- /#photo -->

    <section id="movie" class="js-section-movie top-movie-section">
      <div class="l-inner">
        <ProjectTopSectionHeader
          title="Movie"
          subtitle="動画"
          :modifier-classes="['top-movie-section-header']"
        />
        <div class="top-movie-content">
          <div class="top-movie-carouselContainer">
            <ProjectTopMovieCarouselUnit :option="swiperMovieOption" :data="movieList" />
          </div>
          <div class="top-movie-more">
            <LinkArrow
              text="View More"
              link="/movie/"
              :modifier-classes="['top-more-button']"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { gsap } from 'gsap'
// @ts-ignore
import IntersectionObserverWrapper from '@/assets/js/modules/intersectionObserverWrapper'

export default Vue.extend({
  name: 'Index',
  filters: {
    // @ts-ignore
    stringJoin(values, separator) {
      return values.join(separator)
    },
    // @ts-ignore
    leftFillNum(num, targetLength) {
      return num.toString().padStart(targetLength, 0)
    }
  },
  asyncData() {
    return {
      heroData: [
        '/img/slide_01.jpg',
        '/img/slide_02.jpg',
        '/img/slide_03.jpg',
        '/img/slide_04.jpg',
        '/img/slide_05.jpg',
        '/img/slide_06.jpg',
      ],
      photos: [
        {
          id: '5',
          entryNo: '3',
          date: '2021.01.01',
          visitYear: '2021',
          title: 'インド',
          countryJp: 'インド',
          countryEn: 'India',
          countryCode: 'THA',
          visit: ['コルカタ'],
          imgUrl: '/img/img_photo_thumb_01.jpg',
          imgAlt: 'サムネ01'
        },
        {
          id: '4',
          entryNo: '2',
          date: '2021.01.01',
          visitYear: '2021',
          title: 'スリランカ',
          countryJp: 'スリランカ',
          countryEn: 'Srilanka',
          countryCode: 'KHM',
          visit: ['キャンディ', 'コロンボ', 'トリンコマリー'],
          imgUrl: '/img/img_photo_thumb_02.jpg',
          imgAlt: 'サムネ02'
        },
        {
          id: '3',
          entryNo: '1',
          date: '2021.01.01',
          visitYear: '2021',
          title: 'ラオス',
          countryJp: 'ラオス',
          countryEn: 'Laos',
          countryCode: 'VNM',
          visit: ['ビエンチャン', 'ルアンパバーン'],
          imgUrl: '/img/img_photo_thumb_03.jpg',
          imgAlt: 'サムネ03'
        },
        {
          id: '2',
          date: '2021.01.01',
          visitYear: '2021',
          title: '沖縄・石垣島',
          countryJp: '沖縄・石垣島',
          countryEn: 'Japan',
          countryCode: 'IND',
          visit: ['竹富島', '小浜島'],
          imgUrl: '/img/img_photo_thumb_04.jpg',
          imgAlt: 'サムネ04'
        },
        {
          id: '1',
          date: '2021.01.01',
          visitYear: '2021',
          title: 'トルコ',
          countryJp: 'トルコ',
          countryEn: 'Turkey',
          countryCode: 'NPL',
          visit: ['イスタンブール', 'アンカラ', 'カッパドキア'],
          imgUrl: '/img/img_photo_thumb_05.jpg',
          imgAlt: 'サムネ05'
        },
      ],
      blogList: [
        {
          date: '2022.1.10',
          category: 'フィリピン',
          tags: ['旅ログ', 'フィリピン'],
          title: 'フィリピンへジンベイザメに会いに行ってきたよー',
          body: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります...',
          imgUrl: '/img/img_blog_01.jpg',
          imgAlt: 'ブログ01',
          imgWidth: '400',
          imgHeight: '300',
        },
        {
          date: '2022.1.10',
          category: 'モロッコ',
          tags: ['旅ログ', 'モロッコ'],
          title: '初めてのアフリカ',
          body: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります...',
          imgUrl: '/img/img_blog_04.jpg',
          imgAlt: 'ブログ01',
          imgWidth: '300',
          imgHeight: '400',
        },
        {
          date: '2022.1.10',
          category: 'その他',
          tags: ['お知らせ'],
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
          shootingDate: '2020.1.1',
          place: 'ニューヨーク・タイムズスクエア',
          title: 'ニューヨーク年越し1',
          url: 'https://youtu.be/I5Ba8-33vPY',
          imgUrl: '/img/img_movie_01.jpg',
          imgAlt: '動画01',
          imgWidth: '1600',
          imgHeight: '900',
        },
        {
          shootingDate: '2020.1.1',
          place: 'ニューヨーク・タイムズスクエア',
          title: 'ニューヨーク年越し2',
          url: 'https://youtu.be/I5Ba8-33vPY',
          imgUrl: '/img/img_movie_01.jpg',
          imgAlt: '動画02',
          imgWidth: '1600',
          imgHeight: '900',
        },
        {
          shootingDate: '2020.1.1',
          place: 'ニューヨーク・タイムズスクエア',
          title: 'ニューヨーク年越し3',
          url: 'https://youtu.be/I5Ba8-33vPY',
          imgUrl: '/img/img_movie_01.jpg',
          imgAlt: '動画02',
          imgWidth: '1600',
          imgHeight: '900',
        },
        {
          shootingDate: '2020.1.1',
          place: 'ニューヨーク・タイムズスクエア',
          title: 'ニューヨーク年越し4',
          url: 'https://youtu.be/I5Ba8-33vPY',
          imgUrl: '/img/img_movie_01.jpg',
          imgAlt: '動画02',
          imgWidth: '1600',
          imgHeight: '900',
        },
        {
          shootingDate: '2020.1.1',
          place: 'ニューヨーク・タイムズスクエア',
          title: 'ニューヨーク年越し5',
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
        grabCursor: false,
        speed: 800,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        loop: true,
        preloadImages: true,
        pagination: {
          el: '.top-heroUnit .swiper-pagination',
          clickable: true
        }
      },
      swiperMovieOption: {
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: '0%',
        navigation: {
          nextEl: '.top-movie-carouselUnit .swiper-button-next',
          prevEl: '.top-movie-carouselUnit .swiper-button-prev'
        },
        breakpoints: {
          600: {
            slidesPerView: 1.25,
          }
        }
      },
    }
  },
  mounted() {
    const io1 = new IntersectionObserverWrapper({
      option: {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0
      },
    })
    const io2 = new IntersectionObserverWrapper({
      targetSelector: '.js-section-blog',
      option: {
        root: null,
        rootMargin: '-70% 0px 0px 0px',
        threshold: 0
      },
      isIntersectingCallback: () => {
        const body = document.querySelector('body')
        // @ts-ignore
        if (body.classList.contains('theme-black')) {
          // @ts-ignore
          body.classList.remove('theme-black')
        }
      },
    })
    const io3 = new IntersectionObserverWrapper({
      targetSelector: '.js-section-photo',
      option: {
        root: null,
        rootMargin: '0px 0px -30% 0px',
        threshold: 0
      },
      isIntersectingCallback: () => {
        const body = document.querySelector('body')
        // @ts-ignore
        if (!body.classList.contains('theme-black')) {
          // @ts-ignore
          body.classList.add('theme-black')
        }
      },
    })
    const io4 = new IntersectionObserverWrapper({
      targetSelector: '.js-section-movie',
      option: {
        root: null,
        rootMargin: '0px',
        threshold: 0
      },
      isIntersectingCallback: () => {
        const body = document.querySelector('body')
        // @ts-ignore
        if (!body.classList.contains('theme-black')) {
          // @ts-ignore
          body.classList.add('theme-black')
        }
      },
    })

    //  @ts-ignore
    this.$refs.linkPhoto.forEach((link, idx) => {
      //  @ts-ignore
      const thumbElem = this.$refs.linkPhotoThumb[idx]

      //  @ts-ignore
      link.$el.addEventListener('mouseenter', (eve) => {
        gsap.to(thumbElem, {
          opacity: 0.5,
          visibility: 'visible'
        })
      })

      link.$el.addEventListener('mouseleave', () => {
        gsap.to(thumbElem, {
          autoAlpha: 0
        })
      })

      //  @ts-ignore
      link.$el.addEventListener('mousemove', (eve) => {
        gsap.to(thumbElem, {
          duration: 2, // 単位:秒
          x: eve.clientX + 80,
          y: eve.clientY,
          ease: 'Power2.easeOut',
        })
      })
    })
  },
  methods: {}
})
</script>
