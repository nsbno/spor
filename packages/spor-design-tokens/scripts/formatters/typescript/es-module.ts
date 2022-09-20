import { Format, Named } from "style-dictionary";
import { simplifyTokens } from "../../utils/simplifyTokens";

/**
 * This formatter creates a JavaScript file that exports the bare minimum of the design token object.
 *
 * It also uses the ES Modules syntax, so we can tree-shake out any unused tokens.
 */
export const esModuleFormatter: Named<Format> = {
  name: "typescript/es-module",
  formatter: ({ dictionary }) => {
    return `export default ${JSON.stringify(
      simplifyTokens(dictionary.tokens),
      null,
      2
    )}`;
  },
};
