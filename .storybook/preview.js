import Vue from 'vue'
import Vuex from 'vuex'
import { addParameters, configure } from '@storybook/vue'
import { themes } from '@storybook/theming'
import { DocsPage } from '@storybook/addon-docs'

Vue.use(Vuex)
Vue.config.productionTip = false

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})
configure(require.context('../components', true, /\.story\.js$/), module)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addParameters({
  docs: {
    page: DocsPage,
    theme: themes.light,
    inlineStories: true,
    iframeHeight: '100vh'
  },
  controls: { expanded: true }
})
