<template>
  <v-main>
    <h3>Project page</h3>

    <v-card v-for="post of projectPosts" :key="post.title">
      <NuxtLink class="no-deco" :to="`project/${post.slug}`">
        <v-card-title>
          {{ post.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ post.description }}
        </v-card-subtitle>
      </NuxtLink>
    </v-card>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projectPosts = await $content('project', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      projectPosts
    }
  }
}
</script>
