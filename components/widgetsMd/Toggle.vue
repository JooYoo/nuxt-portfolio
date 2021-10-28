<template>
  <v-alert
    class="mt-2"
    border="right"
    color="grey darken-4"
    dark
  >

    <details>
      <summary>{{title}}</summary>
      <slot />
    </details>
  </v-alert>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title'],
}
</script>

