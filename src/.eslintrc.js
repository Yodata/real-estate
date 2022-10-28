module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['next/core-web-vitals'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@next/eslint-plugin-next'],
  rules: {},
}
