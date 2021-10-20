<template>
  <v-main class="pb-10">
    <h1
      class="text-center"
      v-text="title"
    />
    <div
      class="text-center"
      v-text="time"
    />

    <br />

    <p class="text-center">
      <strong>
        <a
          v-for="link of links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="no-deco link-gap link-underline"
        >
          {{link.name}}
        </a>
      </strong>
    </p>

    <v-divider></v-divider>
  </v-main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'time', 'links'],
}
</script>

<style lang="scss" scoped>
.link-gap:not(:last-child) {
  margin-right: 10px;
}

.link-underline {
  border-bottom: 1px dotted #c2cad7;
}
</style>
