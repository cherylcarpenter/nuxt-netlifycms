<template>
  <Tutorial/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
})
</script>
