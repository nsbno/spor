import { defineConfig } from "oxlint";

/**
 * Port of `@sanity/eslint-config-studio`, the config this Studio used with
 * ESLint. It is lighter than `@vygruppen/oxlint-config`, which the Studio code
 * has never been held to. Oxlint's `correctness` category covers the rules
 * Sanity sets to error; the rest are listed with Sanity's severity and options.
 *
 * Left out, as Oxlint has no implementation: `no-dupe-args`, `no-octal`,
 * `no-restricted-globals` (needs Sanity's globals list),
 * `react/jsx-uses-react`, `react/jsx-uses-vars`, `react/no-typos` and
 * `react/prop-types`.
 */
export default defineConfig({
  plugins: ["eslint", "typescript", "react", "jsx-a11y", "oxc"],
  categories: {
    correctness: "error",
  },
  env: {
    browser: true,
    builtin: true,
  },
  rules: {
    "no-case-declarations": "warn",
    "no-cond-assign": ["warn", "except-parens"],
    "no-constant-condition": ["warn", { checkLoops: false }],
    "no-empty-function": "warn",
    "no-redeclare": "warn",
    "no-unexpected-multiline": "warn",
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
    "no-use-before-define": [
      "warn",
      { functions: false, classes: false, variables: false },
    ],
    "no-useless-escape": "warn",
    "valid-typeof": ["warn", { requireStringLiterals: false }],

    "react/jsx-key": "warn",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-direct-mutation-state": "error",
    "react/no-is-mounted": "warn",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "warn",
    "react/require-render-return": "error",
    "react/style-prop-object": "warn",
    "react/rules-of-hooks": "error",
    "react/exhaustive-deps": "warn",

    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn",

    "typescript/no-empty-object-type": "warn",
    "typescript/no-extra-non-null-assertion": "warn",
    "typescript/no-misused-new": "warn",
  },
  overrides: [
    {
      // The TypeScript compiler checks these
      files: ["**/*.{ts,tsx}"],
      rules: {
        "no-undef": "off",
        "no-unsafe-optional-chaining": "off",
      },
    },
  ],
  ignorePatterns: ["dist/**", ".sanity/**"],
});
