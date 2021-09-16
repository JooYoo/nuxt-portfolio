<template>
  <div class="grey darken-4">
    <v-container class="py-15">
      <h3 class="text-h3 font-weight-thin mb-10">Project</h3>

      <v-row>
        <v-col
          v-for="(post, index) in projectPosts"
          :key="post.title"
          sm="12"
          :md="calcCols(index)"
        >
          <WidgetsYuProjectCard :post="post" />
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-10">
        <v-btn rounded x-large elevation="7">
          <NuxtLink to="/project" class="no-deco">
            <v-icon left>mdi-flask-empty-outline</v-icon>
            more
          </NuxtLink>
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    projectPosts: []
  }),
  computed: {
    calcCols() {
      return (index) => (index === 0 ? 12 : 6)
    }
  },
  async beforeCreate() {
    const posts = await this.$content('project')
      .only(['title', 'description', 'overviewImg', 'techs', 'slug'])
      .sortBy('createAt', 'asc')
      .limit(3)
      .fetch()
    this.projectPosts = posts
  }
}
</script>
