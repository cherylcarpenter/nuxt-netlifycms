<template>

      <div class="flex flex-wrap">
        <card-icon-paragraph v-for="box in content.boxes" :key="box.header" :box="box" :box-count="content.boxes.length"/>
      </div>

</template>

<script>
import CardIconParagraph from './../Cards/CardIconParagraph.vue'

export default {
  components: { CardIconParagraph },
  props:{
    content: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {

  }
}
</script>
