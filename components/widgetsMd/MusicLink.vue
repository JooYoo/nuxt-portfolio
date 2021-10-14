<template>
  <div class="d-flex justify-space-between my-15">
    <a
      v-for="link of musicLinks"
      :key="link.name"
      target="_blank"
      :href="link.url"
      class="d-flex align-center no-deco music-link"
    >
      <v-img
        :src="require(`~/assets/icon/music/${link.logo}`)"
        width="25"
        class="mr-2"
      />
      {{ link.name }}
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    musicLinks: [
      {
        name: 'Spotify',
        logo: 'spotify.svg',
        url: 'https://open.spotify.com/artist/0pzeFK0JIwNYbAXiItjGB3'
      },
      {
        name: 'SoundCloud',
        logo: 'soundcloud.svg',
        url: 'https://soundcloud.com/joo-yoo-965283946'
      },
      {
        name: 'AppleMusic',
        logo: 'applemusic.svg',
        url: 'https://music.apple.com/us/artist/lofi-coder/1584127276'
      },
      {
        name: 'AmazonMusic',
        logo: 'amazonmusic.svg',
        url: 'https://music.amazon.de/artists/B09F9ZRQY6/lofi-coder'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.music-link {
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
}
</style>
