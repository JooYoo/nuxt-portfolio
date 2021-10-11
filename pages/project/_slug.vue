<template>
  <v-main>
    <v-container>
      <nuxt-content :document="post" />
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('project', params.slug).fetch()

    return { post }
  },

  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ],
      link: [
        {
          hid: 'yuprojectpost',
          rel: 'yuprojectpost',
          href: `https://zhuyu.netlify.app/project/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
