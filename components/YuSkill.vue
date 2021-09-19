<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Skill</h3>

    <v-row>
      <v-col>
        <v-card
          class="mx-auto mt-10 pt-5 rounded-lg"
          outlined
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Frontend
              </v-list-item-title>
              <v-list-item-subtitle>
                My go-to tool at the work is <strong>Vue</strong> and it's ecosystem. I'm also a big fan of <strong>React</strong>.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-progress-linear
              color="amber"
              height="25"
            ></v-progress-linear>
          </v-card-actions>
        </v-card>

        <v-card
          class="mx-auto mt-10 pt-5 rounded-lg"
          outlined
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Backend
              </v-list-item-title>
              <v-list-item-subtitle>
                I'm using <strong>C#</strong> at the work. <strong>Nodejs</strong> is my choice when I develop my own project.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-progress-linear
              color="amber"
              height="25"
            ></v-progress-linear>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    frontendSkills: [
      { name: 'Vue' },
      { name: 'Nuxtjs' },
      { name: 'Vuetify' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Sass' },
      { name: 'ionic' },
      // { name: 'VuePress' },
    ],
    backendSkills: [
      { name: 'Nodejs' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'csharp' },
      { name: 'dotnet' },
    ],
  }),
}
</script>
