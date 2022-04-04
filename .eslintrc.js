module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    'consistent-return': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-useless-escape': 0,
  },
  globals: {
    uni: true,
    app: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
      extensions: ['.js', '.json', '.scss'],
    },
  },
};
