<template>
  <v-parallax
    dark
    height="600"
    :src="bg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="xiaowei title-name text-h2 font-weight-medium mb-12">
          Z h u Y u
        </h1>
        <h4 class="xiaowei title-slogan text-h6 font-weight-thin">
          between Code and Design
        </h4>
        <hr class="divider my-6" />
        <h4 class="xiaowei title-job">Software Developer</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  data: () => ({
    bg: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
  }),
}
</script>

<style lang="scss" scoped>
.xiaowei {
  font-family: 'ZCOOL XiaoWei', sans-serif !important;
}

.title-name {
  font-size: 65px !important;
}

.divider {
  margin: auto;
  border: none;
  height: 1px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.5);
}

.title-job {
  text-shadow: 2px 2px 4px #000;
}
</style>
