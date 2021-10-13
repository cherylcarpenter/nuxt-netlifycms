<template>

<feature-three-boxes v-if="sectionType==='featureThreeBoxes'"/>

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
    }
}

}
</script>