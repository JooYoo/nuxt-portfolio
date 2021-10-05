<template>
  <v-container class="mb-10">
    <iframe
      width="100%"
      height="450"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="src"
    ></iframe>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['src']
}
</script>
