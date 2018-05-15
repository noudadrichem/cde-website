// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [2, "never"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": 2,
    "comma-dangle": ["error", "never"],
    "comma-style": [2, "last"],
    "curly": 2,
    "eqeqeq": 2,
    "func-names": 2,
    "space-before-function-paren": ["error", "never"],
    "guard-for-in": 2,
    "wrap-iife": 2,
    "no-undef": 2,
    "no-use-before-define": [2, "nofunc"],
    "new-cap": 2,
    "quotes": [2, "single"],
    "no-trailing-spaces": 2,
    "max-len": [2, 150],
    "no-underscore-dangle": 0,
    "strict": 0,
    "no-shadow": 0
  }
}
