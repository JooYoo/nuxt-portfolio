<template>
  <v-card
    class="mx-auto mt-10 py-5 rounded-lg"
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title
          class="text-h5 mb-1"
          v-text="title"
        />
        <!-- eslint-disable vue/no-v-html -->
        <v-list-item-subtitle
          class="mt-2"
          v-html="subtitle"
        />
      </v-list-item-content>
      <!--eslint-enable-->
    </v-list-item>
    <v-divider class="mx-4 my-3"></v-divider>
    <v-card-actions>
      <img
        v-for="(skill, i) of skills"
        :key="i"
        :src="require(`~/assets/icon/tech/${techDir(skill.name)}`)"
        :title="skill.name"
        :style="skill.name==='Express'?'height:30px':''"
        height="50px"
        class="mx-5 skill-tech-icon--lift"
      />
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'subtitle', 'skills'],
  computed: {
    techDir() {
      return (techName) =>
        techName === 'Vuepress' ? 'Vuepress.png' : `${techName}.svg`
    },
  },
}
</script>

<style lang="scss" scoped>
.skill-tech-icon--lift {
  &:hover {
    transform: scale(1.2);
  }
}
</style>

