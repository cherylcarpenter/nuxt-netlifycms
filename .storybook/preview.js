import Vue from 'vue'
import { action } from '@storybook/addon-actions'
import { addParameters } from '@storybook/vue'
import { themes } from '@storybook/theming'
import { DocsPage } from '@storybook/addon-docs'

Vue.config.productionTip = false

Vue.component('NuxtLink', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<div @click="log()"><slot>NuxtLink</slot></div>'
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'grey',
        value: '#ccc'
      },
      {
        name: 'baby-blue',
        value: 'rgba(241, 245, 249, 1)'
      },
      {
        name: 'dark',
        value: '#000000'
      },
      {
        name: 'light',
        value: '#fff'
      }
    ]
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
