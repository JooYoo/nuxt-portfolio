<template>
  <v-app-bar fixed elevate-on-scroll app class="px-5">
    <NuxtLink class="no-deco" to="/">
      <v-btn text class="text-h4" v-text="'👨🏻‍💻'" />
    </NuxtLink>
    <v-spacer></v-spacer>

    <v-btn v-for="link of links" :key="link.to" icon>
      <NuxtLink :to="link.to" class="no-deco">
        <v-icon>{{ link.icon }}</v-icon>
      </NuxtLink>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        to: '/',
        icon: 'mdi-home'
      },
      {
        to: '/project',
        icon: 'mdi-flask-empty-outline'
      },
      {
        to: '/gotcha',
        icon: 'mdi-lightning-bolt'
      },
      {
        to: '/music',
        icon: 'mdi-music-circle-outline'
      }
    ]
  })
}
</script>
