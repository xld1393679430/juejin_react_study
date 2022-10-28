module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-vars": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "no-undef": 0,
    "react/no-unknown-property": 0,
    "no-irregular-whitespace": 0,
    "no-empty": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-unreachable": 0,
    "react/no-unescaped-entities": 0,
  },
};
