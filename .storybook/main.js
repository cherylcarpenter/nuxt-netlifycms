const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal: (config, options) => config,
  stories: ['../components/**/*.story.@(js|mdx)'],
  addons: ['@storybook/addon-docs']
})
