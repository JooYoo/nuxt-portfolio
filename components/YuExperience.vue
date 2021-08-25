<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Experience</h3>

    <v-timeline class="mt-10">
      <v-timeline-item
        v-for="(year, i) in experiences"
        :key="i"
        :color="year.color"
        small
      >
        <span
          slot="opposite"
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
        <div class="py-3">
          <h2
            :class="`headline font-weight-light mb-2 ${year.color}--text`"
            v-text="year.title"
          ></h2>
          <div
            :class="`subheading font-weight-light mb-1 ${year.color}--text `"
            v-text="year.where"
          ></div>
          <div v-for="point of year.content" :key="point" v-text="point"></div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import JsonExperiences from '~/static/experience.json'

export default {
  name: 'YuExperience',

  data: () => ({
    experiences: JsonExperiences
  })
}
</script>
