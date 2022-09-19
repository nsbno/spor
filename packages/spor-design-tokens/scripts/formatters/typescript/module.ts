import { Format, Named } from "style-dictionary";
import { simplifyTokens } from "../../utils/simplifyTokens";

/**
 * This formatter creates a JavaScript file that exports the bare minimum of the design token object.
 *
 * It also uses the ES Modules syntax, so we can tree-shake out any unused tokens.
 */
export const typescriptModuleFormatter: Named<Format> = {
  name: "typescript/module",
  formatter: ({ dictionary }) => {
    return Object.entries(simplifyTokens(dictionary.tokens))
      .map(([category, types]) => {
        let result = `export const ${category} = ${JSON.stringify(
          types,
          null,
          2
        )};`;
        return result;
      })
      .join("\n");
  },
};
