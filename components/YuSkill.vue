<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Skill</h3>
    <v-row>
      <v-col>
        <WidgetsYuSkillCard
          :title="frontendSkill.title"
          :subtitle="frontendSkill.subtitle"
          :skills="frontendSkill.techlogos"
        />

        <WidgetsYuSkillCard
          :title="backendSkill.title"
          :subtitle="backendSkill.subtitle"
          :skills="backendSkill.techlogos"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// TODO: refactor: save as json file
export default {
  data: () => ({
    frontendSkill: {
      title: 'Frontend',
      subtitle:
        "My go-to tool at the work is <strong>Vue</strong> and it's ecosystem. I'm also a big fan of <strong>React</strong>.",
      techlogos: [
        { name: 'Vue' },
        { name: 'Nuxtjs' },
        { name: 'Vuetify' },
        { name: 'React' },
        { name: 'Redux' },
        { name: 'Sass' },
        { name: 'ionic' },
        // { name: 'VuePress' },
      ],
    },

    backendSkill: {
      title: 'Backend',
      subtitle:
        "I'm using <strong>C#</strong> at the work. <strong>Nodejs</strong> is my choice when I develop my own project.",
      techlogos: [
        { name: 'csharp' },
        { name: 'dotNetCore' },
        { name: 'Nodejs' },
        { name: 'MongoDB' },
        { name: 'Express' },
      ],
    },
  }),
}
</script>
