import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: `~/plugins/axios.js` }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv', // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/pwa',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true,
    proxy: true
  },

  proxy: {
    '/feedlyApi/': {
      target: 'https://cloud.feedly.com/v3/streams/contents?',
      pathRewrite: { '^/feedlyApi/': '' }
    }
  },

  env: {
    FEEDLY_USER_ID: 'bc127873-c00c-4adb-ad1b-cd5680af094c',

    FEEDLY_ACCESS_TOKEN:
      'Az-Awt53Ze6oJpRpSmYPZ5XIx1DGPKxI6NmliJDwly9Mk7ySbw00WPWOfd5XrPhOBSy-rE-XttAdK4ca-v2LVwJcojS5mnM87AzkNI02cbg-wSCsr88WiLGk80VDjsh7ebaDK_zvypaFgIULbWsXK5K9dqSkUs6AQst1c13PhoxYsnnVsP084aS58QZltfhZhV30Mgwvi93Zj_FFF7Z8do52ZtXKvoehcLOhPlHmpo2ogh073gsXUTHAXKR13g:feedlydev'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: { customProperties: true },
      dark: true,
      themes: {
        dark: {
          light: colors.grey.lighten4,
          dark: colors.grey.darken3,
          primary: colors.blue.darken1,
          accent: colors.grey.darken3,
          secondary: colors.green.base,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   // if (ctx.isDev && ctx.isClient) {
    //   //   config.module.rules.push({
    //   //     enforce: 'pre',
    //   //     test: /\.(js|vue|ts)$/,
    //   //     loader: 'eslint-loader',
    //   //     exclude: /(node_modules)/
    //   //   })
    //   // }
    // }
  }
}
