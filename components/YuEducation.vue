<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Education</h3>

    <v-card class="mt-10 px-3 rounded-lg" outlined>
      <v-list
        v-for="(education, educationIndex) in educations"
        :key="educationIndex"
      >
        <v-subheader class="pt-5" inset>
          <v-list-item-title class="d-flex justify-space-between">
            <span
              >{{ education.degree }}&nbsp;|&nbsp;{{ education.timeRoom }}</span
            >
            <div>
              <img
                v-for="(flagUrl, flagIndex) in education.flagUrl"
                :key="flagIndex"
                :src="require(`~/assets/icon/${flagUrl}.svg`)"
                class="ml-5 flag-end"
                height="30px"
              />
            </div>
          </v-list-item-title>
        </v-subheader>

        <v-list-item class="pb-3" three-line>
          <v-list-item-action>
            <span class="text-h5">{{ education.icon }}</span>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ education.major }}</v-list-item-title>
            <v-list-item-subtitle
              v-for="(studyAt, studyAtIndex) in education.studyAt"
              :key="studyAtIndex"
              >{{ studyAt }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import JsonEducation from '~/static/education.json'

export default {
  name: 'YuEducation',

  data: () => ({
    educations: JsonEducation
  })
}
</script>
