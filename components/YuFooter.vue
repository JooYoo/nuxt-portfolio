<template>
  <v-footer
    app
    height="80px"
    class="px-6"
  >
    <v-row align="center">
      <v-col class="text-left">
        <!-- © {{ new Date().getFullYear() }} -  -->
        Made with ❤️ by
        <strong class="nuxt-txt">NuxtJS</strong>
      </v-col>

      <v-btn
        v-for="contact in contacts"
        :key="contact.id"
        icon
        class="mx-4"
      >
        <a
          :href="contact.link"
          :target="contact.target"
          class="footer__link-icon"
        >
          <v-icon>{{ contact.icon }}</v-icon>
        </a>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
import contactData from '~/static/contact.json'

export default {
  data() {
    return {
      contacts: contactData,
    }
  },
}
</script>

<style lang="scss" scoped>
.footer__link-icon {
  text-decoration: none;
  color: #fff;
}
.nuxt-txt {
  color: #00dc82;
}
</style>
