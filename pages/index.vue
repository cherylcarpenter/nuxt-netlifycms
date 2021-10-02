<template>
<div>
  <Tutorial/>
  <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
type Data = {
  title: string
}
export default Vue.extend({
  data: ():Data => ({
    title: 'My Title'
  })
})
</script>
