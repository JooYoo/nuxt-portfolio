<template>
  <v-app dark>
    <v-app-bar fixed elevate-on-scroll app class="px-5">
      <v-btn text class="text-h4" v-text="title" />
      <v-spacer></v-spacer>
      <!-- TODO: iteration nav-btns -->
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
      <Nuxt />
    </v-main>
    <v-footer app height="80px" class="px-6">
      <v-row align="center">
        <v-col class="text-left">
          © {{ new Date().getFullYear() }} -
          <strong>ZhuYu</strong>
        </v-col>

        <v-btn v-for="contact in contacts" :key="contact.id" icon class="mx-4">
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
  </v-app>
</template>

<script>
import JsonContacts from '~/static/contacts.json'

export default {
  data() {
    return {
      contacts: JsonContacts,
      title: '👨🏻‍💻'
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
