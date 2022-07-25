<template>
  <div class="top-section-header" :class="modifierClasses">
    <h2 class="top-section-header__title"><span>{{ title }}</span></h2>
    <div class="top-section-header__subtitle"><span>{{ subtitle }}</span></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TopSectionHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    modifierClasses: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
