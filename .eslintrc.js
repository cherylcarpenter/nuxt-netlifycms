module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@nuxtjs', '@nuxtjs/eslint-config-typescript', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
