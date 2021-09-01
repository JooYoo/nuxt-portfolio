<template>
  <v-app-bar fixed elevate-on-scroll app class="px-5">
    <NuxtLink class="no-deco" to="/">
      <v-btn text class="text-h4" v-text="'👨🏻‍💻'" />
    </NuxtLink>
    <v-spacer></v-spacer>
    <!-- TODO: iteration nav-btns -->
    <v-btn icon>
      <NuxtLink class="no-deco" to="/">
        <v-icon>mdi-home</v-icon>
      </NuxtLink>
    </v-btn>
    <v-btn icon>
      <NuxtLink class="no-deco" to="/project">
        <v-icon>mdi-flask-empty-outline</v-icon>
      </NuxtLink>
    </v-btn>
    <v-btn icon>
      <NuxtLink class="no-deco" to="/gotcha">
        <v-icon>mdi-lightning-bolt</v-icon>
      </NuxtLink>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-music-circle-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>
