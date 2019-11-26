<template>
  <v-app-bar app color="light-blue darken-3">
    <v-app-bar-nav-icon />

    <v-toolbar-title>
      Startup
      <span>Reporter</span>
    </v-toolbar-title>

    <v-spacer />

    <template v-for="(navLink, index) in navLinks">
      <template v-if="navLink.subLinks">
        <v-menu :key="index" open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn nuxt text tile color="light" height="64" v-on="on">
              {{ navLink.label }}
            </v-btn>
          </template>
          <v-list light tile color="light">
            <v-list-item
              v-for="(subLink, subIndex) in navLink.subLinks"
              :key="subIndex"
              :to="subLink.to"
            >
              {{ subLink.label }}
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template v-else>
        <v-btn
          :key="index"
          :to="navLink.to"
          nuxt
          text
          tile
          color="light"
          height="64"
        >
          {{ navLink.label }}
        </v-btn>
      </template>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          label: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          label: 'News',
          icon: 'language',
          to: '/news'
        },
        {
          label: 'Advertise',
          icon: 'dvr',
          to: '/advertise',
          subLinks: [
            {
              label: 'Events',
              to: '/advertise/events'
            },
            {
              label: 'Classifieds',
              to: '/advertise/classifieds'
            },
            {
              label: 'Banner Ads',
              to: '/advertise/banner-ads'
            },
            {
              label: 'Press Release',
              to: '/advertise/press-release'
            }
          ]
        },
        {
          label: 'Newsletter',
          icon: 'email',
          to: '/newsletter'
        },
        {
          label: 'About',
          icon: 'info',
          to: '/about'
        },
        {
          label: 'Contact',
          icon: 'call',
          to: '/contact'
        }
      ]
    }
  }
}
</script>
