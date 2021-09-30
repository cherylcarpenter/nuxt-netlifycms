<template>
  <div>
    <h1>{{ home }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const home = await $content('pages/home').fetch()

    return {
      home,
    }
  },
  head(){
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
