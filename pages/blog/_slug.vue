<template>
  <article>
    <nuxt-content :document="post" />
    <pre>{{ post }}</pre>
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      // fetch our article here
    const post = await $content('blog', params.slug).fetch()
    return { post }
    }
  }
</script>
