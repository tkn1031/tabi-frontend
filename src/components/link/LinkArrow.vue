<template>
  <component
    :is="isInternal(link) ? 'nuxt-link' : 'a'"
    class="c-link-arrow"
    :class="modifierClasses"
    :to="isInternal(link) ? link : null"
    :href="isInternal(link) ? null : link"
    :target="isInternal(link) ? null : '_blank'"
  >
    <span class="c-link-arrow__text">{{ text }}</span><span class="c-link-arrow__icon"><svg class="c-icon-arrowRight"><use xlink:href="#arrowRight"></use></svg></span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LinkArrow',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    modifierClasses: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /**
     * 内部リンクかを判定する
     * @param {string} link リンク
     * @return {boolean} 内部リンクか
     */
    isInternal (link: string) {
      return !/^https?:\/\//.test(link)
    }
  }
})
</script>
