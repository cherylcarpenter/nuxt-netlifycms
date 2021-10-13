<template>
  <section class="featureThreeBoxes container mx-auto px-4">
      <div class="flex flex-wrap">
        <card-icon-paragraph v-for="box in boxes" :key="box.header" :box="box" :box-count="boxes.length"/>
      </div>
  </section>
</template>

<script>
import CardIconParagraph from './../Cards/CardIconParagraph.vue'

export default {
  components: { CardIconParagraph },
  props:{
    boxes: {
      type: Array,
      default(){
        return []
      }
    }
  },
}
</script>
