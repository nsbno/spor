import { PrismTheme } from "prism-react-renderer";

/**
 * CSS variables used by the code theme.
 * These are defined on the container element using Chakra's _light/_dark
 * syntax, so switching is handled purely in CSS — no flash on refresh.
 */
export const codeThemeCssVariables = {
  "--code-plain": { _light: "#2d2d2d", _dark: "#C5C8C6" },
  "--code-comment": {
    _light: "hsl(30, 10%, 40%)",
    _dark: "hsl(30, 20%, 70%)",
  },
  "--code-property": {
    _light: "hsl(350, 50%, 40%)",
    _dark: "hsl(350, 40%, 70%)",
  },
  "--code-string": {
    _light: "hsl(100, 50%, 30%)",
    _dark: "hsl(75, 70%, 60%)",
  },
  "--code-operator": {
    _light: "hsl(30, 80%, 35%)",
    _dark: "hsl(40, 90%, 60%)",
  },
  "--code-deleted": { _light: "rgb(180, 40, 40)", _dark: "rgb(255, 85, 85)" },
  "--code-regex": { _light: "#b85c00", _dark: "#e90" },
  "--code-keyword": {
    _light: "hsl(220, 50%, 40%)",
    _dark: "hsl(350, 40%, 70%)",
  },
};

/** Prism theme that references the CSS variables above */
export const theme: PrismTheme = {
  plain: {
    // eslint-disable-next-line spor/use-semantic-tokens
    color: "var(--code-plain)",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["prolog", "comment", "doctype", "cdata"],
      style: { color: "var(--code-comment)" },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol"],
      style: { color: "var(--code-property)" },
    },
    {
      types: ["attr-name", "string", "char", "builtin", "insterted"],
      style: { color: "var(--code-string)" },
    },
    {
      types: [
        "operator",
        "entity",
        "url",
        "string",
        "variable",
        "language-css",
      ],
      style: { color: "var(--code-operator)" },
    },
    {
      types: ["deleted"],
      style: { color: "var(--code-deleted)" },
    },
    {
      types: ["italic"],
      style: { fontStyle: "italic" },
    },
    {
      types: ["important", "bold"],
      style: { fontWeight: "bold" },
    },
    {
      types: ["regex", "important"],
      style: { color: "var(--code-regex)" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "var(--code-keyword)" },
    },
    {
      types: ["punctuation", "symbol"],
      style: { opacity: 0.7 },
    },
  ],
};
