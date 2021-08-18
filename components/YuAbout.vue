<template>
  <div class="about__bg">
    <v-container>
      <div class="about__title">About</div>
      <p v-for="(about, index) in abouts" :key="index" class="about__content">
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
.about__bg {
  background-color: rgba(255, 255, 255, 0.1);
}
.about__title {
  margin-top: 40px;
  font-size: 45px;
  font-weight: lighter;
  letter-spacing: 2px;
}

.about__content {
  margin: 40px 0;
  font-size: 14px;
}
</style>
