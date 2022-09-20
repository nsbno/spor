import JsonToTS from "json-to-ts";
import type { Format } from "style-dictionary";
import type { Named } from "style-dictionary/types/_helpers";
import { simplifyTokens } from "../../utils/simplifyTokens";

/** Creates much more correct typescript typings than regular TS formatter */
export const reactNativeTypescriptTypingsFormatter: Named<Format> = {
  name: "typescript/rn-typings",
  formatter: ({ dictionary }) => {
    return (
      'declare module "@vygruppen/spor-design-tokens/react-native";\n' +
      "declare const root: RootObject;\n" +
      "export default root;\n" +
      JsonToTS(simplifyTokens(dictionary.tokens)).join("\n")
    );
  },
};
