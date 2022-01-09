<template>
  <v-card
    elevation="10"
    outlined
    hover
    class="rounded-lg project-card"
  >
    <NuxtLink
      :to="`project/${post.slug}`"
      class="no-deco"
    >
      <v-img
        :src="post.overviewImg"
        class="white--text pt-2 pl-2 img-round-corner"
        gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title
          class="text-h5"
          v-text="post.title"
        />
        <v-card-subtitle v-text="post.description" />
      </v-img>

      <v-card-actions class="my-2 v-card__actions--overflow">
        <img
          v-for="(tech, techIndex) in post.techs"
          :key="techIndex"
          :src="require(`~/assets/icon/tech/${techDir(tech.name)}`)"
          :title="tech.name"
          class="mx-4"
          height="25px"
        />
      </v-card-actions>
    </NuxtLink>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['post'],
  computed: {
    techDir() {
      return (techName) =>
        techName === 'Vuepress' ? 'Vuepress.png' : `${techName}.svg`
    },
  },
}
</script>

<style lang="scss" scoped>
.project-card {
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
}

.v-card__actions--overflow {
  overflow: auto;
}

.img-round-corner {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
