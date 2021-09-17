<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="post of projectPosts" :key="post.title" sm="12" md="6">
          <WidgetsYuProjectCard :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projectPosts = await $content('project', params.slug)
      .only(['title', 'description', 'overviewImg', 'techs', 'slug'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      projectPosts
    }
  }
}
</script>
