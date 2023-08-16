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
    abouts: JsonAbouts,
  }),
}
</script>

<style lang="scss">
.external-link {
  font-weight: bold;
  text-decoration: none;

  &--liebherr {
    border-bottom: 1px dotted #ffd000;
    color: #ffd000 !important;
  }

  &--spotify {
    border-bottom: 1px dotted #1db954;
    color: #1db954 !important;
  }

  &--apple {
    border-bottom: 1px dotted #c2cad7;
    color: #c2cad7 !important;
  }

  &--soundcloud {
    border-bottom: 1px dotted #fe5000;
    color: #fe5000 !important;
  }
}

.emphasize-text {
  font-weight: bold;
  text-decoration: none;

  &--vue {
    color: #40b883 !important;
  }

  &--flutter {
    color: #5cc6f8 !important;
  }

  &--ios {
    color: #c2cad7 !important;
  }
}
</style>
