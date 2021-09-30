<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <img :src="post.img" />
          <div>
            <h2>{{ post.title }}</h2>
            <!-- <p>by {{ post.author.name }}</p> -->
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
          <div>
    <!-- <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li> -->
  </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
 const posts = await $content('blog')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        posts
      }
  },
};
</script>