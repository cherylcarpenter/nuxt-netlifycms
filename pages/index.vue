<template>
  <div>
    <!-- <Tutorial /> -->
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    title: 'My Title'
  })
})
</script>
