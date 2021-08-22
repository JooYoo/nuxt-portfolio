<template>
  <v-container class="my-10">
    <h3 class="text-h3 font-weight-thin mb-10">Project</h3>

    <v-row>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card elevation="8" outlined hover class="rounded-lg">
          <v-img
            :src="card.src"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions class="justify-center">
            <v-btn v-for="iconName of icons" :key="iconName" icon class="mx-3">
              <v-icon v-text="iconName">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-btn rounded x-large elevation="7">
        <v-icon left>mdi-flask-empty-outline</v-icon>
        more
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'House',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12
      },
      {
        title: 'Road',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6
      },
      {
        title: 'Airline',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 6
      }
    ],
    icons: ['mdi-heart', 'mdi-bookmark', 'mdi-share-variant']
  })
}
</script>
