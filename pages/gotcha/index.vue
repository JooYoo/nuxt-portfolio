<template>
  <v-main>
    <v-container>
      <h1>Gotcha page</h1>

      <v-list>
        <v-list-item v-for="post of gotchaPosts" :key="post.title">
          {{ post.title }}
        </v-list-item>
      </v-list>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const gotchaPosts = await $content('gotcha', params.slug)
      .only(['title', 'date', 'keyword', 'slug'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      gotchaPosts
    }
  }
}
</script>
