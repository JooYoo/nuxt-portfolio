<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Skill</h3>
    <v-row>
      <v-col>
        <WidgetsYuSkillCard
          :title="skills.frontendSkill.title"
          :subtitle="skills.frontendSkill.subtitle"
          :skills="skills.frontendSkill.techlogos"
          :default-big-name="'Vue'"
        />
        <WidgetsYuSkillCard
          :title="skills.backendSkill.title"
          :subtitle="skills.backendSkill.subtitle"
          :skills="skills.backendSkill.techlogos"
          :default-big-name="'C#'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import skillData from '~/static/skill.json'
export default {
  data: () => ({
    skills: skillData
  })
}
</script>
