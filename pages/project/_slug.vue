<template>
  <v-main>
    <nuxt-content :document="projectPost" />
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projectPost = await $content('project', params.slug).fetch()

    return { projectPost }
  }
}
</script>
