<template>
  <div class="about-bg">
    <v-container>
      <h3 class="text-h3 font-weight-thin mt-10">About</h3>
      <p v-for="(about, index) in abouts" :key="index" class="my-9 text-body-1">
        {{ about }}
      </p>
    </v-container>
  </div>
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

<style>
.about-bg {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
