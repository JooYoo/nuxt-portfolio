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
  }
}
</script>
