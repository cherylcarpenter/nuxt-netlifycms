module.exports = (ctx) => ({
  map: ctx.env === 'development' ? {} : false,
  parser: false,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true
      },
      autoprefixer: ctx.env === 'development' ? false : {}
    },
    'tailwindcss/nesting': {},
    autoprefixer: false,
    cssnano: ctx.env === 'production' ? {} : false
  }
})
