<template>
  <v-app>
    <Header />
    <v-content>
      <nuxt />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from './default/header'
import Footer from './default/footer'
export default {
  components: {
    Footer,
    Header
  }
}
</script>
