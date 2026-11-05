import useSemanticTokens from "./custom-rules/use-semantic-tokens.js";

export default {
  meta: {
    name: "spor",
  },
  rules: {
    "use-semantic-tokens": useSemanticTokens,
  },
};
