<template>
  <section :class="['featureThreeBoxes mx-auto px-4', sectionBkg, paddingTopLg, paddingBottomLg, paddingTopSm, paddingBottomSm]">
    <div class="container">
      <div class="flex flex-wrap">
        <card-icon-paragraph v-for="box in content.boxes" :key="box.header" :box="box" :box-count="content.boxes.length"/>
      </div>
      </div>
  </section>
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
    sectionBkg(){
     if (this.content.sectionSettings.hasBackground) return this.content.sectionSettings.sectionBkgColor
      return ''
    },
    paddingTopLg(){
      return "lg:"+this.content.sectionSettings.paddingTop
    },
    paddingBottomLg(){
      return "lg:"+this.content.sectionSettings.paddingBottom
    },
      paddingTopSm(){
      return "lg:"+this.content.sectionSettings.paddingTop
    },
    paddingBottomSm(){
      return "lg:"+this.content.sectionSettings.paddingBottom
    }
  }
}
</script>
