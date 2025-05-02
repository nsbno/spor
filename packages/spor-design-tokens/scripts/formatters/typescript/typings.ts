import JsonToTS from "json-to-ts";
import { Format } from "style-dictionary/types";

import { simplifyTokens } from "../../utils/simplifyTokens";

/** Creates much more correct typescript typings than regular TS formatter */
export const typescriptTypingsFormatter: Format = {
  name: "typescript/typings",
  format: ({ dictionary }) => {
    return (
      "declare const root: RootObject\n" +
      "export default root\n" +
      JsonToTS(simplifyTokens(dictionary.tokens)).join("\n")
    );
  },
};
