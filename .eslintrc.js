module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  globals: {
    module: true,
    process: true,
    import: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: "babel-eslint"
  },
  plugins: ['prettier', 'vue'],
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single'],
    complexity: [2, { "max": 15 }],
    eqeqeq: 2,
    'space-before-function-paren': 0,
    'prettier/prettier': 2,
    'arrow-spacing': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  // parser: "babel-eslint",
}
