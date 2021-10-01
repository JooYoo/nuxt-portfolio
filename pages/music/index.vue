<template>
  <v-main>
    <v-container>
      <div class="d-flex justify-space-around my-15">
        <a
          v-for="link of musicLinks"
          :key="link.name"
          target="_blank"
          :href="link.url"
          class="d-flex align-center no-deco"
        >
          <v-img
            :src="require(`~/assets/icon/music/${link.logo}`)"
            width="25"
            class="mr-2"
          />
          {{link.name}}
        </a>

      </div>
      <v-row>
        <v-col
          v-for="post in musicPosts"
          :key="post.title"
          class="d-flex child-flex"
          cols="4"
        >
          <NuxtLink
            :to="`music/${post.slug}`"
            class="no-deco music-cover"
          >
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
      musicPosts,
    }
  },
  data: () => ({
    musicLinks: [
      {
        name: 'Spotify',
        logo: 'spotify.svg',
        url: 'https://open.spotify.com/artist/0pzeFK0JIwNYbAXiItjGB3',
      },
      {
        name: 'SoundCloud',
        logo: 'soundcloud.svg',
        url: 'https://soundcloud.com/joo-yoo-965283946',
      },
      {
        name: 'AppleMusic',
        logo: 'applemusic.svg',
        url: 'https://music.apple.com/us/artist/lofi-coder/1584127276',
      },
      {
        name: 'AmazonMusic',
        logo: 'amazonmusic.svg',
        url: 'https://music.amazon.de/artists/B09F9ZRQY6/lofi-coder',
      },
    ],
  }),
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
