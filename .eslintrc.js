module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // "prettier/@typescript-eslint",
    "prettier",
  ],
  plugins: ["react", "react-native", "prettier"],
  ignorePatterns: ["node_modules/"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: [2, "never"],
    "comma-dangle": "off",
    // 'max-len': [
    //   'error',
    //   {ignoreComments: true, code: 120, ignoreStrings: true},
    //   ,
    // ],
    "prettier/prettier": ["error"],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off", // FIXME: exclude test files
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react/jsx-closing-bracket-location": "off",
    "react-native/no-raw-text": "off",
    "react-native/no-single-element-style-arrays": "error",
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/member-delimiter-style": [
      "error",
      { multiline: { delimiter: "none" } },
    ],
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false },
    ],
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
    react: {
      version: "detect",
    },
  },
}
