<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="post of projectPosts" :key="post.title" cols="6">
          <v-card>
            <NuxtLink class="no-deco" :to="`project/${post.slug}`">
              <v-img :src="post.overviewImg" height="200px">
                <v-card-title>
                  {{ post.title }}
                </v-card-title>
              </v-img>

              <v-card-subtitle>
                {{ post.description }}
              </v-card-subtitle>
            </NuxtLink>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projectPosts = await $content('project', params.slug)
      .only(['title', 'description', 'overviewImg', 'slug'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      projectPosts
    }
  }
}
</script>

<style lang="scss" scoped>
.project-overview__card-img {
  height: 200px;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}
</style>
