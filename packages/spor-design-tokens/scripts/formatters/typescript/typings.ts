import type { Format } from "style-dictionary/types";

import { simplifyTokens } from "../../utils/simplifyTokens.ts";
import { toTypeLiteral } from "../../utils/toTypeLiteral.ts";

/** Creates much more correct typescript typings than regular TS formatter */
export const typescriptTypingsFormatter: Format = {
  name: "typescript/typings",
  format: ({ dictionary }) => {
    return (
      `declare const root: ${toTypeLiteral(simplifyTokens(dictionary.tokens))};\n` +
      "export default root;\n"
    );
  },
};
