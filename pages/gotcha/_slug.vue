<template>
  <v-main>
    <v-container>
      <nuxt-content :document="gotchaPost" />
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const gotchaPost = await $content('gotcha', params.slug).fetch()

    return { gotchaPost }
  },

  head() {
    return {
      title: this.gotchaPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.gotchaPost.description
        }
      ],
      link: [
        {
          hid: 'yugotchapost',
          rel: 'yugotchapost',
          href: `https://zhuyu.netlify.app/gotcha/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
