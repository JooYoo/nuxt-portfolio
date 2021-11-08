<template>
  <v-app-bar fixed elevate-on-scroll app class="px-5">
    <NuxtLink class="no-deco" to="/">
      <!-- <v-btn
        text
        class="text-subtitle-1 main-title"
        v-text="'Zhu・Yu'"
      /> -->
      <!-- <img
        :src="require('~/assets/icon/lofi-coder.png')"
        align="center"
        class="avatar"
      /> -->
    </NuxtLink>
    <v-spacer></v-spacer>

    <NuxtLink
      v-for="link of links"
      :key="link.to"
      :to="link.to"
      class="no-deco"
    >
      <v-btn
        icon
        :class="
          link.className === currentRoute ? `${link.className}--active` : ''
        "
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </NuxtLink>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        to: '/',
        icon: 'mdi-home',
        className: 'index',
      },
      {
        to: '/project',
        icon: 'mdi-flask-empty-outline',
        className: 'project',
      },
      {
        to: '/gotcha',
        icon: 'mdi-lightning-bolt',
        className: 'gotcha',
      },
      {
        to: '/music',
        icon: 'mdi-music-circle-outline',
        className: 'music',
      },
    ],
    currentRoute: 'index',
  }),

  watch: {
    $route(to, from) {
      // watching the current route-name, also compute the name to only focus the main route
      this.getCurrRoute()
    },
  },

  created() {
    this.getCurrRoute()
  },

  methods: {
    getCurrRoute() {
      this.currentRoute = this.$route.name.split('-')[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  height: 43px;
  border-radius: 50%;
  box-shadow: 1.5px 1px 10px 0.5px rgb(50, 50, 50);
}

.main-title {
  text-transform: capitalize;
}

.index--active,
.project--active,
.gotcha--active,
.music--active {
  i {
    height: 55px !important;
    box-shadow: 0 2px 0 0 #888;
    transition: unset;
  }
}
</style>
