<template>
  <v-app dark>
    <v-app-bar fixed elevate-on-scroll app class="px-5">
      <v-toolbar-title class="6rem" v-text="title" />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-flask-empty-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-lightning-bolt</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-music-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app height="80px" class="px-6">
      <v-row align="center">
        <v-col class="text-left">
          © {{ new Date().getFullYear() }} -
          <strong>ZhuYu</strong>
        </v-col>

        <v-btn v-for="contact in contacts" :key="contact.id">
          <a
            :href="contact.link"
            :target="contact.target"
            class="footer__link-icon"
            icon
          >
            <v-icon size="24px">{{ contact.icon }}</v-icon>
          </a>
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import JsonContacts from '~/static/contacts.json'

export default {
  data() {
    return {
      contacts: JsonContacts,
      title: 'ZhuYu'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer__link-icon {
  text-decoration: none;
  color: #fff;
}
</style>
