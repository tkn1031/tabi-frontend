<template>
  <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="arrowUp" symbol viewBox="0 0 24 24">
        <path
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19V6M5 12l7-7 7 7"
        />
      </symbol>
      <symbol id="arrowLineRight" symbol viewBox="0 0 200 21.259">
        <path d="M186.376,273.726a3.077,3.077,0,0,0-2.094,5.419l11.066,9.683H9.692a3.078,3.078,0,1,0,0,6.155H203.539a3.077,3.077,0,0,0,2.026-5.392l-17.23-15.077a3.077,3.077,0,0,0-1.958-.788Z" transform="translate(-6.615 -273.724)" />
      </symbol>
    </defs>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SvgInclude'
})
</script>
