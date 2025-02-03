import globals from "globals";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: { ...globals.browser } }},
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect" // Automatically detect the React version
      }
    },
    rules: {
      "react/prop-types": "off",
      "react/forbid-prop-types": "off",
      "react/no-unused-prop-types": "off",
      "react/default-props-match-prop-types": "off",
      "react/prop-types": "off" // Ensure prop-types rule is off
    }
  }
];