import { fileURLToPath } from "node:url";

/**
 * Resolves a package or file to an absolute path.
 *
 * Oxlint resolves `jsPlugins` relative to the config file that is being
 * loaded. When this config is consumed from another package, that would be the
 * consumer's config file, so we resolve to absolute paths ourselves.
 */
const resolveAbsolute = (specifier) =>
  fileURLToPath(import.meta.resolve(specifier));

/** Turns a list of rule names into an `{ "<scope>/<name>": severity }` object. */
const enable = (scope, names, severity = "error") =>
  Object.fromEntries(names.map((name) => [`${scope}/${name}`, severity]));

/**
 * Equivalent of `js.configs.recommended` from `@eslint/js`.
 *
 * `no-unexpected-multiline` is left out because `eslint-config-prettier` turns
 * it off. `no-dupe-args` and `no-octal` have no Oxlint implementation.
 */
const eslintRecommended = [
  "constructor-super",
  "for-direction",
  "getter-return",
  "no-async-promise-executor",
  "no-case-declarations",
  "no-class-assign",
  "no-compare-neg-zero",
  "no-cond-assign",
  "no-const-assign",
  "no-constant-binary-expression",
  "no-constant-condition",
  "no-control-regex",
  "no-debugger",
  "no-delete-var",
  "no-dupe-class-members",
  "no-dupe-else-if",
  "no-dupe-keys",
  "no-duplicate-case",
  "no-empty",
  "no-empty-character-class",
  "no-empty-pattern",
  "no-empty-static-block",
  "no-ex-assign",
  "no-extra-boolean-cast",
  "no-fallthrough",
  "no-func-assign",
  "no-global-assign",
  "no-import-assign",
  "no-invalid-regexp",
  "no-irregular-whitespace",
  "no-loss-of-precision",
  "no-misleading-character-class",
  "no-new-native-nonconstructor",
  "no-nonoctal-decimal-escape",
  "no-obj-calls",
  "no-prototype-builtins",
  "no-redeclare",
  "no-regex-spaces",
  "no-self-assign",
  "no-setter-return",
  "no-shadow-restricted-names",
  "no-sparse-arrays",
  "no-this-before-super",
  "no-undef",
  "no-unreachable",
  "no-unsafe-finally",
  "no-unsafe-negation",
  "no-unsafe-optional-chaining",
  "no-unused-labels",
  "no-unused-private-class-members",
  "no-unused-vars",
  "no-useless-backreference",
  "no-useless-catch",
  "no-useless-escape",
  "no-with",
  "require-yield",
  "use-isnan",
  "valid-typeof",
];

/**
 * Core rules that `tseslint.configs.recommended` turns on for all files. It
 * uses its own versions of them, which Oxlint's core rules already cover.
 */
const tseslintCoreRules = ["no-array-constructor", "no-unused-expressions"];

/**
 * Core rules that `tseslint`'s `eslint-recommended` config turns off for
 * TypeScript files, because the TypeScript compiler already checks them.
 * `no-dupe-args` and `no-new-symbol` have no Oxlint implementation.
 */
const checkedByTypescript = [
  "constructor-super",
  "getter-return",
  "no-class-assign",
  "no-const-assign",
  "no-dupe-class-members",
  "no-dupe-keys",
  "no-func-assign",
  "no-import-assign",
  "no-new-native-nonconstructor",
  "no-obj-calls",
  "no-redeclare",
  "no-setter-return",
  "no-this-before-super",
  "no-undef",
  "no-unreachable",
  "no-unsafe-negation",
  "no-with",
];

/** Core rules that `tseslint`'s `eslint-recommended` config turns on for TypeScript files only. */
const typescriptOnlyCoreRules = [
  "no-var",
  "prefer-const",
  "prefer-rest-params",
  "prefer-spread",
];

/** Equivalent of `tseslint.configs.recommended`. */
const typescriptRecommended = [
  "ban-ts-comment",
  "no-duplicate-enum-values",
  "no-empty-object-type",
  "no-explicit-any",
  "no-extra-non-null-assertion",
  "no-misused-new",
  "no-namespace",
  "no-non-null-asserted-optional-chain",
  "no-require-imports",
  "no-this-alias",
  "no-unnecessary-type-constraint",
  "no-unsafe-declaration-merging",
  "no-unsafe-function-type",
  "no-wrapper-object-types",
  "prefer-as-const",
  "prefer-namespace-keyword",
  "triple-slash-reference",
];

/**
 * Equivalent of `eslint-plugin-react`'s `recommended` + `jsx-runtime` configs.
 * `react-in-jsx-scope` is left out because of the automatic JSX runtime.
 * `prop-types` and `no-deprecated` have no Oxlint implementation.
 */
const reactRecommended = [
  "display-name",
  "jsx-key",
  "jsx-no-comment-textnodes",
  "jsx-no-duplicate-props",
  "jsx-no-target-blank",
  "jsx-no-undef",
  "no-children-prop",
  "no-danger-with-children",
  "no-direct-mutation-state",
  "no-find-dom-node",
  "no-is-mounted",
  "no-render-return-value",
  "no-string-refs",
  "no-unescaped-entities",
  "no-unknown-property",
  "require-render-return",
];

/**
 * Equivalent of `eslint-plugin-react-hooks`' `recommended-latest` config,
 * including the React Compiler rules. `component-hook-factories`, `config`
 * and `gating` have no Oxlint implementation.
 */
const reactHooksRecommended = [
  "rules-of-hooks",
  "static-components",
  "use-memo",
  "void-use-memo",
  "preserve-manual-memoization",
  "immutability",
  "globals",
  "refs",
  "set-state-in-effect",
  "error-boundaries",
  "purity",
  "set-state-in-render",
];

/** Rules that `eslint-plugin-react-hooks`' `recommended-latest` config sets to warn. */
const reactHooksRecommendedWarnings = [
  "exhaustive-deps",
  "incompatible-library",
  "unsupported-syntax",
];

/** Equivalent of `eslint-plugin-jsx-a11y`'s recommended config. */
const jsxA11yRecommended = [
  "alt-text",
  "anchor-has-content",
  "anchor-is-valid",
  "aria-activedescendant-has-tabindex",
  "aria-props",
  "aria-proptypes",
  "aria-role",
  "aria-unsupported-elements",
  "autocomplete-valid",
  "click-events-have-key-events",
  "heading-has-content",
  "html-has-lang",
  "iframe-has-title",
  "img-redundant-alt",
  "interactive-supports-focus",
  "label-has-associated-control",
  "media-has-caption",
  "mouse-events-have-key-events",
  "no-access-key",
  "no-autofocus",
  "no-distracting-elements",
  "no-interactive-element-to-noninteractive-role",
  "no-noninteractive-element-interactions",
  "no-noninteractive-element-to-interactive-role",
  "no-noninteractive-tabindex",
  "no-redundant-roles",
  "no-static-element-interactions",
  "role-has-required-aria-props",
  "role-supports-aria-props",
  "scope",
  "tabindex-no-positive",
];

/**
 * Rule options that `eslint-plugin-jsx-a11y`'s recommended config passes.
 * Without them Oxlint uses each rule's defaults, which are stricter.
 */
const jsxA11yRecommendedOptions = {
  "interactive-supports-focus": {
    tabbable: [
      "button",
      "checkbox",
      "link",
      "searchbox",
      "spinbutton",
      "switch",
      "textbox",
    ],
  },
  "no-interactive-element-to-noninteractive-role": {
    tr: ["none", "presentation"],
    canvas: ["img"],
  },
  "no-noninteractive-element-interactions": {
    handlers: [
      "onClick",
      "onError",
      "onLoad",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp",
    ],
    alert: ["onKeyUp", "onKeyDown", "onKeyPress"],
    body: ["onError", "onLoad"],
    dialog: ["onKeyUp", "onKeyDown", "onKeyPress"],
    iframe: ["onError", "onLoad"],
    img: ["onError", "onLoad"],
  },
  "no-noninteractive-element-to-interactive-role": {
    ul: [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid",
    ],
    ol: [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid",
    ],
    li: [
      "menuitem",
      "menuitemradio",
      "menuitemcheckbox",
      "option",
      "row",
      "tab",
      "treeitem",
    ],
    table: ["grid"],
    td: ["gridcell"],
    fieldset: ["radiogroup", "presentation"],
  },
  "no-noninteractive-tabindex": {
    tags: [],
    roles: ["tabpanel"],
    allowExpressionValues: true,
  },
  "no-static-element-interactions": {
    allowExpressionValues: true,
    handlers: [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp",
    ],
  },
};

/**
 * Equivalent of `eslint-plugin-unicorn`'s recommended config, for the rules
 * that Oxlint implements natively. The ones it doesn't implement
 * (`expiring-todo-comments`, `no-for-loop`, `no-named-default`,
 * `no-unnecessary-polyfills`, `prefer-switch` and `prevent-abbreviations`)
 * are left out, rather than loading `eslint-plugin-unicorn` as a JS plugin.
 *
 * Left out, as in `@vygruppen/eslint-config`:
 * - `filename-case` and `no-null`, which are turned off explicitly there.
 * - `empty-brace-spaces`, `no-nested-ternary`, `number-literal-case` and
 *   `template-indent`, which `eslint-config-prettier` turns off.
 * - `consistent-function-scoping`. The ESLint version skips functions that
 *   contain JSX, Oxlint's doesn't, so it flags most React components that are
 *   defined inside other functions (stories, render props, etc.).
 */
const unicornRecommended = [
  "catch-error-name",
  "consistent-assert",
  "consistent-date-clone",
  "consistent-empty-array-spread",
  "consistent-existence-index-check",
  "error-message",
  "escape-case",
  "explicit-length-check",
  "import-style",
  "new-for-builtins",
  "no-abusive-eslint-disable",
  "no-accessor-recursion",
  "no-anonymous-default-export",
  "no-array-callback-reference",
  "no-array-for-each",
  "no-array-method-this-argument",
  "no-array-reduce",
  "no-array-reverse",
  "no-array-sort",
  "no-await-expression-member",
  "no-await-in-promise-methods",
  "no-console-spaces",
  "no-document-cookie",
  "no-empty-file",
  "no-hex-escape",
  "no-immediate-mutation",
  "no-instanceof-builtins",
  "no-invalid-fetch-options",
  "no-invalid-remove-event-listener",
  "no-lonely-if",
  "no-magic-array-flat-depth",
  "no-negated-condition",
  "no-negation-in-equality-check",
  "no-new-array",
  "no-new-buffer",
  "no-object-as-default-parameter",
  "no-process-exit",
  "no-single-promise-in-promise-methods",
  "no-static-only-class",
  "no-thenable",
  "no-this-assignment",
  "no-typeof-undefined",
  "no-unnecessary-array-flat-depth",
  "no-unnecessary-array-splice-count",
  "no-unnecessary-await",
  "no-unnecessary-slice-end",
  "no-unreadable-array-destructuring",
  "no-unreadable-iife",
  "no-useless-collection-argument",
  "no-useless-error-capture-stack-trace",
  "no-useless-fallback-in-spread",
  "no-useless-length-check",
  "no-useless-promise-resolve-reject",
  "no-useless-spread",
  "no-useless-switch-case",
  "no-useless-undefined",
  "no-zero-fractions",
  "numeric-separators-style",
  "prefer-add-event-listener",
  "prefer-array-find",
  "prefer-array-flat",
  "prefer-array-flat-map",
  "prefer-array-index-of",
  "prefer-array-some",
  "prefer-at",
  "prefer-bigint-literals",
  "prefer-blob-reading-methods",
  "prefer-class-fields",
  "prefer-classlist-toggle",
  "prefer-code-point",
  "prefer-date-now",
  "prefer-default-parameters",
  "prefer-dom-node-append",
  "prefer-dom-node-dataset",
  "prefer-dom-node-remove",
  "prefer-dom-node-text-content",
  "prefer-event-target",
  "prefer-export-from",
  "prefer-global-this",
  "prefer-includes",
  "prefer-keyboard-event-key",
  "prefer-logical-operator-over-ternary",
  "prefer-math-min-max",
  "prefer-math-trunc",
  "prefer-modern-dom-apis",
  "prefer-modern-math-apis",
  "prefer-module",
  "prefer-native-coercion-functions",
  "prefer-negative-index",
  "prefer-node-protocol",
  "prefer-number-properties",
  "prefer-object-from-entries",
  "prefer-optional-catch-binding",
  "prefer-prototype-methods",
  "prefer-query-selector",
  "prefer-reflect-apply",
  "prefer-regexp-test",
  "prefer-response-static-json",
  "prefer-set-has",
  "prefer-set-size",
  "prefer-single-call",
  "prefer-spread",
  "prefer-string-raw",
  "prefer-string-replace-all",
  "prefer-string-slice",
  "prefer-string-starts-ends-with",
  "prefer-string-trim-start-end",
  "prefer-structured-clone",
  "prefer-ternary",
  "prefer-top-level-await",
  "prefer-type-error",
  "relative-url-style",
  "require-array-join-separator",
  "require-module-attributes",
  "require-module-specifiers",
  "require-number-to-fixed-digits-argument",
  "switch-case-braces",
  "text-encoding-identifier-case",
  "throw-new-error",
];

/** @type {import("oxlint").OxlintConfig} */
const config = {
  plugins: ["eslint", "typescript", "unicorn", "react", "jsx-a11y", "oxc"],
  jsPlugins: [
    { name: "spor", specifier: resolveAbsolute("./plugin.js") },
    {
      name: "simple-import-sort",
      specifier: resolveAbsolute("eslint-plugin-simple-import-sort"),
    },
  ],
  categories: {
    correctness: "error",
  },
  rules: {
    ...enable("eslint", eslintRecommended),
    ...enable("eslint", tseslintCoreRules),
    ...enable("typescript", typescriptRecommended),
    ...enable("react", reactRecommended),
    ...enable("react", reactHooksRecommended),
    ...enable("react", reactHooksRecommendedWarnings, "warn"),
    ...enable("jsx-a11y", jsxA11yRecommended),
    ...Object.fromEntries(
      Object.entries(jsxA11yRecommendedOptions).map(([name, options]) => [
        `jsx-a11y/${name}`,
        ["error", options],
      ]),
    ),
    ...enable("unicorn", unicornRecommended),

    // On by default in Oxlint's `correctness` category, but not part of
    // `eslint-plugin-jsx-a11y`'s recommended config
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/prefer-tag-over-role": "off",

    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "spor/use-semantic-tokens": "warn",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
  },
  overrides: [
    {
      // Oxlint drops a top-level `env` when a config is used through
      // `extends`, but keeps the ones in `overrides`
      files: ["**/*"],
      env: {
        browser: true,
        node: true,
        es2024: true,
      },
    },
    {
      files: ["**/*.{ts,tsx,mts,cts}"],
      rules: {
        ...enable("eslint", checkedByTypescript, "off"),
        ...enable("eslint", typescriptOnlyCoreRules),
      },
    },
  ],
};

export default config;
