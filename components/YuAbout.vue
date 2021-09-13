<template>
  <v-container class="my-10">
    <h3 class="text-h3 font-weight-thin">About</h3>
    <!-- eslint-disable vue/no-v-html -->
    <p
      v-for="(about, index) in abouts"
      :key="index"
      class="my-6 text-body-1"
      v-html="about"
    />
    <!--eslint-enable-->
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

<style lang="scss">
.external-link {
  font-weight: bold;
  text-decoration: none;
}

.external-link--liebherr {
  border-bottom: 1px dotted #c2cad7;
  color: #c2cad7 !important;
}

.external-link--spotify {
  border-bottom: 1px dotted #1db954;
  color: #1db954 !important;
}

.external-link--apple {
  border-bottom: 1px dotted #c2cad7;
  color: #c2cad7 !important;
}

.external-link--soundcloud {
  border-bottom: 1px dotted #fe5000;
  color: #fe5000 !important;
}
</style>
