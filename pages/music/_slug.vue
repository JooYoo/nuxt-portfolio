<template>
  <v-main>
    <v-container>
      <nuxt-content :document="musicPost" />
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const musicPost = await $content('music', params.slug).fetch()

    return { musicPost }
  },

  head() {
    return {
      title: this.musicPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.musicPost.description
        }
      ],
      link: [
        {
          hid: 'yumusicpost',
          rel: 'yumusicpost',
          href: `https://zhuyu.netlify.app/music/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
