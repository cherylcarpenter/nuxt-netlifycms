const path = require('path')

module.exports = {
  stories: ['../components/**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal(config, options) {
    // extend config here
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.dirname(path.resolve(__dirname))
    }

    return config
  }
}
