<template>
  <v-main>
    <v-container>
      <nuxt-content :document="projectPost" />
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projectPost = await $content('project', params.slug).fetch()

    return { projectPost }
  },

  head() {
    return {
      title: this.projectPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.projectPost.description
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
