module.exports = {
    "extends": "airbnb-base",
    "plugins": ["react"],
    parserOptions: {
      "ecmaVersion": 6,
      parser: 'babel-eslint',
      "ecmaFeatures": {"jsx": true},
    },

    "env": {
      "es6": true,
      "node": true,
      "browser": true
    },

    rules:{
      "linebreak-style": 0,
      "comma-dangle": 0,
      "no-unused-vars": 0,
      "no-underscore-dangle": 0,
      "max-len": 0,
      "no-console": 0,
      "prefer-destructuring": 0,
      "no-alert": 0,
      "no-restricted-globals": 0
    },
};
