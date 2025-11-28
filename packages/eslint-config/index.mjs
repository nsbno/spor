import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

import useSemanticTokens from "./custom-rules/use-semantic-tokens.js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      spor: {
        rules: {
          "use-semantic-tokens": useSemanticTokens,
        },
      },
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "spor/use-semantic-tokens": "warn",
      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
          children: "never",
        },
      ],
    },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  reactHooks.configs.flat["recommended-latest"],
  jsxA11y.flatConfigs.recommended,
  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      "unicorn/prevent-abbreviations": "warn",
      "unicorn/no-null": "off",
      "unicorn/filename-case": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintConfigPrettier,
]);
