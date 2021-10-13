<template>
  <div>
    <h1>{{ home.title }}</h1>
      <section-loader v-for="(section, index) in home.sections" :key="`${section}${index}`" :section-type="section.type" :section-content="section.boxes"/>
  </div>
</template>

<script>
import SectionLoader from '@/components/SectionLoader'
export default {
  name: 'Home', 
  components:{
    SectionLoader
  },
  async asyncData({ $content }) {
    const home = await $content('pages/home').fetch()

    return {
      home
    }
  },
  head() {
    return {
      title: this.home.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'descripton',
          conent: this.home.seo.description
        }
      ]
    }
  }
}
</script>
