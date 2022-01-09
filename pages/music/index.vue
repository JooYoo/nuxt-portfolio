<template>
  <v-main>
    <v-container>
      <h1 class="my-10 text-h3 font-weight-thin">Music</h1>
      <WidgetsMdMusicLink></WidgetsMdMusicLink>
      <v-row class="mb-5">
        <v-col
          v-for="post in musicPosts"
          :key="post.title"
          class="d-flex child-flex"
          cols="4"
        >
          <NuxtLink
            :to="`music/${post.slug}`"
            class="no-deco album-cover-container"
          >
            <v-img
              :src="require(`~/assets/img/music/${post.cover}`)"
              aspect-ratio="1"
              class="grey lighten-2 album-cover-img"
            />
            <div class="pt-5 album-cover-txt">
              <div class="text-h6">{{ post.title }}</div>
              <span class="text-h6 text--disabled">Lofi Coder・</span>
              <span class="text-h6 font-weight-regular text--disabled">
                {{ post.time }}
              </span>
            </div>
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
      musicPosts,
    }
  },
}
</script>

<style lang="scss" scoped>
.album-cover-container {
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
}
.album-cover-img {
  border-radius: 8px;
}
</style>
