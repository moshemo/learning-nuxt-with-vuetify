module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/vue',
    // '@nuxtjs',
    // 'prettier',
  ],
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // semi: [2, 'never'],
    // 'no-console': 'off',
    // 'vue/max-attributes-per-line': 'off',
    // 'prettier/prettier': ['error', { semi: false }]
  }
}
