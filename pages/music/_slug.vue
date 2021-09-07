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
  }
}
</script>
