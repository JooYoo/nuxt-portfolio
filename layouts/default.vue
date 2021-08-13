<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app height="80px">
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
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
