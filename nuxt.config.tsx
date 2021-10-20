import { join } from 'path'
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  css: [],
  googleFonts: {
    display: 'swap',
    families: {
      'Playfair+Display': {
        wght: [400, 500, 600, 700, 800, 900]
      },
      Lato: {
        wght: [100, 300, 400, 700, 900]
      },
      'Source+Sans+Pro': {
        wght: [200, 300, 400, 600, 700, 900]
      }
    }
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/',
      prefix: 'cc',
      ignore: ['**/*.stories.js']
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),

        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        'postcss-at-rules-variables': {},
        'postcss-each': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  storybook: {},
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    config: {
      purge: {
        enabled: process.env.NODE_ENV === 'production',
        options: {
          whitelist: [/(border|bg|text)-(.*)-(\\d{1}0{1,2})/, /^bg/],
          whitelistPatterns: [/(border|bg|text)-(.*)-(\\d{1}0{1,2})/, /^bg/],
          safelist: [
            '/(from|via|to|border|bg|text)-(.*)-(\\d{1}0{1,2})/',
            'bg-rose-500'
          ]
        }
      }
    }
  },
  publicRuntimeConfig: {
    // baseURL: 'https://nuxtjs.org'
  },
  privateRuntimeConfig: {
    // apiSecret: process.env.API_SECRET
  }
}
