import { resolve } from 'path'
console.log(process.env.NODE_ENV)
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  alias: {
    cms: resolve(__dirname, './cms'),
    '~': resolve(__dirname, './')
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cheryl Carpenter Frontend Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    base: '/',
    script: [
      {
        src: 'https://kit.fontawesome.com/4400228d2f.js'
      },
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/css/main.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
   
  }
}
