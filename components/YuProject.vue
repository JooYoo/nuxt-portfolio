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
          <v-card elevation="8" outlined hover class="rounded-lg">
            <v-img
              :src="post.overviewImg"
              class="white--text pt-2 pl-2"
              gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="text-h5" v-text="post.title" />
              <v-card-subtitle v-text="post.description" />
            </v-img>

            <v-card-actions class="my-2">
              <img
                v-for="(tech, techIndex) in post.techs"
                :key="techIndex"
                :src="require(`~/assets/icon/tech/${techDir(tech.name)}`)"
                :title="tech.name"
                class="mx-4"
                height="30px"
              />
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
    projectPosts: []
  }),
  computed: {
    calcCols() {
      return (index) => (index === 0 ? 12 : 6)
    },
    techDir() {
      return (techName) => {
        if (techName === 'Vuepress') {
          return 'Vuepress.png'
        } else {
          return `${techName}.svg`
        }
      }
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
