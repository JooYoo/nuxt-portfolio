<template>
  <div class="d-flex justify-center mb-10 md-screenshot__wrapper">
    <img
      v-for="shot of screenshots"
      :key="shot.url"
      :src="shot.url"
      class="md-screenshot__img"
    >
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['screenshots'],
}
</script>

<style lang="scss" scoped>
.md-screenshot__wrapper {
  & img:not(:last-child) {
    margin-right: 16px;
  }
}

.md-screenshot__img {
  border-radius: 2vw;
  border: 0.8vw solid rgba(255, 255, 255, 0.4);
  overflow-x: scroll;
}
</style>
