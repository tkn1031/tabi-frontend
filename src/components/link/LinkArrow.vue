<template>
  <component
    :is="isInternalLink(link) ? 'nuxt-link' : 'a'"
    class="c-link-arrow"
    :class="modifierClasses"
    :to="isInternalLink(link) ? link : ''"
    :href="isInternalLink(link) ? '' : link"
    :target="isInternalLink(link) ? '_blank' : ''"
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
    isInternalLink (url: string) {
      return !/^https?:\/\//.test(url)
    }
  }
})
</script>
