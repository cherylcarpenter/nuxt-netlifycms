import { join, resolve } from 'path'

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

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: false,
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // tailwindcss: join(__dirname, './tailwind.config.js'),
        // Disable a plugin by passing false as value
        'postcss-import': {},
        'postcss-url': {},
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  router: {
    extendRoutes(routes) {
      routes.push({
        name: 'custom',
        path: '/',
        component: resolve(__dirname, 'pages/home/Index.vue')
      })
    }
  }
}
