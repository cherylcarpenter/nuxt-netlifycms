<template>

<feature-three-boxes v-if="sectionType==='featureThreeBoxes'" :content="sectionContent"/>

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
    }
}

}
</script>