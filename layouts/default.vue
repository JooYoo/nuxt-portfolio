<template>
  <v-app dark>
    <YuHeader />
    <Nuxt />
    <YuFooter />
  </v-app>
</template>

<script>
export default {
  head: {
    title: 'Yu',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Zhu Yu Portfolio, Project, Blog and Music',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei',
      },
    ],
  },
}
</script>
