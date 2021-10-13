<template>

<feature-three-boxes v-if="sectionType==='featureThreeBoxes'" :boxes="sectionContent"/>

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
        type: Array,
        default(){
            return []
        }
    }
}

}
</script>