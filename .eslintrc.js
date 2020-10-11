module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    semi: [2, "never"],
    "vue/html-indent": ["error", 2],
    "no-console": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "no-control-regex": 0,
    "prettier/prettier": ["error", { semi: false }],
  },
}
