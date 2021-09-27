<template>
  <v-main>
    <v-container>
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        :src="src"
      ></iframe>
    </v-container>
  </v-main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['src'],
}
</script>
