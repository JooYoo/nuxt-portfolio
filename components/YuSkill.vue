<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Skill</h3>

    <v-row>
      <v-col>
        <v-card
          class="mx-auto mt-10 py-5 rounded-lg"
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
          <v-divider class="mx-4 my-4"></v-divider>
          <v-card-actions>
            <img
              v-for="(techLogo, i) of frontendSkills"
              :key="i"
              :src="require(`~/assets/icon/tech/${techLogo.name}.svg`)"
              :title="techLogo.name"
              height="50px"
              class="mx-5"
            />
          </v-card-actions>
        </v-card>

        <v-card
          class="mx-auto mt-10 py-5 rounded-lg"
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
          <v-divider class="mx-4 my-4"></v-divider>
          <v-card-actions>
            <img
              v-for="(techLogo, i) of backendSkills"
              :key="i"
              :src="require(`~/assets/icon/tech/${techLogo.name}.svg`)"
              :title="techLogo.name"
              height="50px"
              class="mx-5"
              :style="techLogo.name==='Express'?'height:30px':''"
            />
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
      { name: 'MongoDB' },
      { name: 'csharp' },
      { name: 'dotnet' },
      { name: 'Express' },
    ],
  }),
}
</script>
