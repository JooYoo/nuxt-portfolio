<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app height="80px">
      <v-row>
        <v-col class="text-left pl-10">
          © {{ new Date().getFullYear() }}
          <strong>ZhuYu</strong>
        </v-col>
        <v-col class="text-right pr-10">
          <v-btn
            v-for="contact in contacts"
            :key="contact.id"
            class="mx-4"
            dark
            icon
          >
            <a
              :href="contact.link"
              :target="contact.target"
              class="footer__link-icon"
            >
              <v-icon size="24px">{{ contact.icon }}</v-icon>
            </a>
          </v-btn>
        </v-col>
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
      title: 'Zhu Yu'
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
