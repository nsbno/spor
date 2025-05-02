import { Format } from "style-dictionary/types";

import { simplifyTokens } from "../../utils/simplifyTokens";

/**
 * This formatter creates a JavaScript file that exports the bare minimum of the design token object.
 */
export const cjsModuleFormatter: Format = {
  name: "typescript/cjs-module",
  format: ({ dictionary }) => {
    return `module.exports = ${JSON.stringify(
      simplifyTokens(dictionary.tokens),
      null,
      2,
    )}`;
  },
};
