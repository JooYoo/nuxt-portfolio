<template>
  <div class="d-flex justify-space-between flex-wrap mt-10 mb-3">
    <a
      v-for="link of musicLinks"
      :key="link.name"
      target="_blank"
      :href="link.url"
      class="
        d-flex
        .justify-center
        align-center
        mb-5
        no-deco
        music-link
        link-card
      "
    >
      <v-img
        :src="require(`~/assets/icon/music/${link.logo}`)"
        width="25"
        height="25"
        class="mr-5 link-card__img"
      />
      <span class="link-card__txt">
        {{ link.name }}
      </span>
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
.link-card {
  padding: 10px 60px;
  width: 260px;
  border-radius: 5px;
  border: 1px solid rgb(78, 78, 78);
  background-color: #282828;

  &__img {
    // text-align: center;
  }

  &__txt {
    width: 100%;
    text-align: center;
  }
}

.music-link {
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
