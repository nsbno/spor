import type { Format } from "style-dictionary/types";

import { simplifyTokens } from "../../utils/simplifyTokens.ts";
import { toTypeLiteral } from "../../utils/toTypeLiteral.ts";

/** Creates much more correct typescript typings than regular TS formatter */
export const reactNativeTypescriptTypingsFormatter: Format = {
  name: "typescript/rn-typings",
  format: ({ dictionary }) => {
    return (
      'declare module "@vygruppen/spor-design-tokens/react-native";\n' +
      `declare const root: ${toTypeLiteral(simplifyTokens(dictionary.tokens))};\n` +
      "export default root;\n"
    );
  },
};
