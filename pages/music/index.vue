<template>
  <v-main>
    <v-container>
      <WidgetsMdMusicLink></WidgetsMdMusicLink>
      <v-row class="mb-5">
        <v-col
          v-for="post in musicPosts"
          :key="post.title"
          class="d-flex child-flex"
          cols="4"
        >
          <NuxtLink :to="`music/${post.slug}`" class="no-deco music-cover">
            <v-img
              :src="require(`~/assets/album/${post.cover}`)"
              aspect-ratio="1"
              class="grey lighten-2"
            >
            </v-img>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const musicPosts = await $content('music', params.slug)
      .only(['title', 'time', 'cover', 'slug'])
      .sortBy('create', 'asc')
      .fetch()

    return {
      musicPosts
    }
  }
}
</script>

<style lang="scss" scoped>
.music-cover {
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.95);
    // TODO: hover to add a darkner to display Album-title, Album-time
  }
}
</style>
