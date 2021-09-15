<template>
  <v-card elevation="8" outlined hover class="rounded-lg">
    <v-img
      :src="post.overviewImg"
      class="white--text pt-2 pl-2"
      gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title class="text-h5" v-text="post.title" />
      <v-card-subtitle v-text="post.description" />
    </v-img>

    <v-card-actions class="my-2">
      <img
        v-for="(tech, techIndex) in post.techs"
        :key="techIndex"
        :src="require(`~/assets/icon/tech/${techDir(tech.name)}`)"
        :title="tech.name"
        class="mx-4"
        height="30px"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['post'],
  computed: {
    techDir() {
      return (techName) => {
        if (techName === 'Vuepress') {
          return 'Vuepress.png'
        } else {
          return `${techName}.svg`
        }
      }
    }
  }
}
</script>
