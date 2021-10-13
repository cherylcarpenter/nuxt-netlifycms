module.exports = (ctx) => ({
  // map: ctx.env === 'development' ? {} : false,
  parser: false,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
        'focus-within-pseudo-class': false

      },
      autoprefixer: false
    },
    'tailwindcss/nesting': {},
    autoprefixer: ctx.env === 'development' ? false : {},
    cssnano: ctx.env === 'development' ? false : {}
  }
})
