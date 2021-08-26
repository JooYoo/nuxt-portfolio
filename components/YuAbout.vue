<template>
  <v-container class="mt-10">
    <h3 class="text-h3 font-weight-thin">About</h3>
    <p v-for="(about, index) in abouts" :key="index" class="my-9 text-body-1">
      {{ about }}
    </p>
  </v-container>
</template>

<script>
import JsonAbouts from '~/static/about.json'

export default {
  name: 'YuAbout',

  data: () => ({
    abouts: JsonAbouts
  })
}
</script>
