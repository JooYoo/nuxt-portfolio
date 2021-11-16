<template>
  <v-card
    class="mx-auto mt-10 py-5 rounded-lg skill-tech-card"
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
        :src="require(`~/assets/icon/tech/${setSuffix(skill.name)}`)"
        :title="skill.name"
        :style="setSize(skill.name)"
        height="50px"
        class="mx-5 skill-tech-icon--lift"
        @mouseover=";(isHover = true), hoverName(skill.name)"
        @mouseleave="isHover = false"
      />
      <div
        v-show="isHover"
        class="skill-tech-big-name"
      >{{ bigName }}</div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'subtitle', 'skills', 'defaultBigName'],

  data: () => ({
    isHover: true,
    bigName: '',
  }),
  computed: {
    setSuffix() {
      return (skillName) => {
        if (skillName === 'Vuepress') {
          return 'Vuepress.png'
        } else if (skillName === 'SQL') {
          return 'SQL.png'
        } else {
          return `${skillName}.svg`
        }
      }
    },
    setSize() {
      return (skillName) => (skillName === 'Express' ? 'height:30px' : '')
    },
  },
  created() {
    this.bigName = this.defaultBigName
  },
  methods: {
    hoverName(skillName) {
      this.bigName = skillName
    },
  },
}
</script>

<style lang="scss" scoped>
.skill-tech-card {
  overflow: hidden;
}
.skill-tech-icon--lift {
  transition: all 0.1s ease-in-out;
  z-index: 1;
  &:hover {
    transform: scale(1.2);
  }
}

.skill-tech-big-name {
  position: absolute;
  right: 0;
  font-size: 300px;
  font-weight: bolder;
  opacity: 0.05;
  user-select: none;
}
</style>
