import { Format, Named } from "style-dictionary";
import { simplifyTokens } from "../../utils/simplifyTokens";

/**
 * This formatter creates a JavaScript file that exports the bare minimum of the design token object.
 *
 * It also uses the ES Modules syntax, so we can tree-shake out any unused tokens.
 */
export const cjsModuleFormatter: Named<Format> = {
  name: "typescript/cjs-module",
  formatter: ({ dictionary }) => {
    return `module.exports = ${JSON.stringify(
      simplifyTokens(dictionary.tokens),
      null,
      2
    )}`;
  },
};
