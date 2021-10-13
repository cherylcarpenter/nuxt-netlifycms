<template>
  <div>
    <!-- <Tutorial /> -->
    <h1>{{ home.title }}</h1>
    {{home}}
    <div v-for="section in home.sections" :key="section">
      <section-loader :section-type="section.type"/>
    </div>
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
