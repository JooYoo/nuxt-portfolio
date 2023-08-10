<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Skill</h3>
    <v-row>
      <v-col>
        <WidgetsYuSkillCard
          :title="skills.mobileSkill.title"
          :subtitle="skills.mobileSkill.subtitle"
          :skills="skills.mobileSkill.techlogos"
          :default-big-name="'SwiftUI'"
        />
        <WidgetsYuSkillCard
          :title="skills.webSkill.title"
          :subtitle="skills.webSkill.subtitle"
          :skills="skills.webSkill.techlogos"
          :default-big-name="'Vue'"
        />
        <WidgetsYuSkillCard
          :title="skills.toolingSkill.title"
          :subtitle="skills.toolingSkill.subtitle"
          :skills="skills.toolingSkill.techlogos"
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
    skills: skillData,
  }),
}
</script>
