<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Skill</h3>

    <v-row>
      <v-col>
        <v-card class="mx-auto mt-10 pt-5 rounded-lg" outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                JavaScript
                <span>language</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                8% of the code in my projects is written in JavaScript
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-progress-linear color="amber" height="25"></v-progress-linear>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
