module.exports = {
  root: "true",
  env: {
    "browser": true,
    "es2021": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential"
  ],
  parserOptions: {
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-multiple-template-root": "off"
  }
};
