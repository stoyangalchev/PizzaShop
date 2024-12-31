import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "import/no-unresolved": "error", // Ensure imports point to a file/module that can be resolved
      "import/named": "error", // Ensure named imports correspond to a named export in the remote file
      "import/default": "error", // Ensure a default export is present, given a default import
      "import/namespace": "error", // Ensure imported namespaces contain dereferenced properties as they are dereferenced
      "import/no-duplicates": "error", // Report repeated import of the same module in multiple places
      "react/jsx-uses-react": "error", // Prevent React to be incorrectly marked as unused
      "react/jsx-uses-vars": "error", // Prevent variables used in JSX to be incorrectly marked as unused
      "no-unused-vars": "warn", // Warn about unused variables
      "no-undef": "error", // Disallow the use of undeclared variables
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginImport.configs.recommended,
];
