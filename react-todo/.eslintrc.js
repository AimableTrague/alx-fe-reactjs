export default {
    env: {
      browser: true,
      node: true,  // Ensures Node.js globals like `module` are recognized
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-undef": "off", // Disable `module is not defined` error
    },
  };
  