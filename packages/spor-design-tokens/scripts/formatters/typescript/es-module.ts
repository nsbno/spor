import { Format } from "style-dictionary/types";

import { simplifyTokens } from "../../utils/simplifyTokens";

/**
 * This formatter creates a JavaScript file that exports the bare minimum of the design token object.
 *
 * It also uses the ES Modules syntax, so we can tree-shake out any unused tokens.
 */
export const esModuleFormatter: Format = {
  name: "typescript/es-module",
  format: ({ dictionary }) => {
    return `export default ${JSON.stringify(
      simplifyTokens(dictionary.tokens),
      null,
      2,
    )}`;
  },
};
