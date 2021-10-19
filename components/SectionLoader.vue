<template>
  <section :class="[sectionType, sectionBkg, paddingTopLg, paddingBottomLg, paddingTopSm, paddingBottomSm]">
    <div class="container">
        <feature-three-boxes v-if="sectionType==='featureThreeBoxes'" :content="sectionContent"/>
    </div>
  </section>
</template>

<script>
import FeatureThreeBoxes from '@/components/Sections/FeatureThreeBoxes.vue'

export default {
name: 'SectionLoader',
components: {
FeatureThreeBoxes
},
props: {
    sectionType:{
        type: String,
        default: ''
    },
    sectionContent: {
        type: Object,
        default(){
            return {}
        }
    },
    content: {
      type: Object,
      default(){
        return {}
      }
    }
},
computed:{
    sectionBkg(){
     if (this.sectionContent.sectionSettings.hasBackground) return this.sectionContent.sectionSettings.sectionBkgColor
      return 'bg-white'
    },
    paddingTopLg(){
      return "lg:"+this.sectionContent.sectionSettings.paddingTop
    },
    paddingBottomLg(){
      return "lg:"+this.sectionContent.sectionSettings.paddingBottom
    },
      paddingTopSm(){
      return this.sectionContent.sectionSettings.paddingTop
    },
    paddingBottomSm(){
      return this.sectionContent.sectionSettings.paddingBottom
    }
}

}
</script>