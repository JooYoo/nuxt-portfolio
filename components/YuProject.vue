<template>
  <div class="grey darken-4">
    <v-container class="py-15">
      <h3 class="text-h3 font-weight-thin mb-10">Project</h3>

      <v-row>
        <!-- TODO: in small display cols is 12 -->
        <v-col
          v-for="(post, index) in projectPosts"
          :key="post.title"
          :cols="calcCols(index)"
        >
          <v-card elevation="8" outlined hover class="rounded-lg">
            <v-img
              :src="post.overviewImg"
              class="white--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="post.title"></v-card-title>
            </v-img>

            <v-card-actions class="justify-center">
              <v-btn
                v-for="iconName of icons"
                :key="iconName"
                icon
                class="mx-3"
              >
                <v-icon v-text="iconName">mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-10">
        <v-btn rounded x-large elevation="7">
          <v-icon left>mdi-flask-empty-outline</v-icon>
          more
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    projectPosts: [],
    cols: [],
    // TODO: display each Project tech logo
    icons: ['mdi-heart', 'mdi-bookmark', 'mdi-share-variant']
  }),
  computed: {
    calcCols() {
      return (index) => (index === 0 ? 12 : 6)
    }
  },
  async beforeCreate() {
    const posts = await this.$content('project')
      .only(['title', 'description', 'overviewImg', 'slug'])
      .sortBy('createAt', 'asc')
      .limit(3)
      .fetch()
    this.projectPosts = posts
  }
}
</script>
