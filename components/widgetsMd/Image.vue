<template>
  <v-container>
    <img :src="imgSrc">
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['imgPath', 'imgName'],
  computed: {
    imgSrc() {
      return require(`~/assets/img/${this.imgPath}/${this.imgName}`)
    },
  },
}
</script>

<style scoped>
img {
  width: -webkit-fill-available;
}
</style>