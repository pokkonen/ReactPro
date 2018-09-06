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
    },
};
