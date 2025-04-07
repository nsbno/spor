import JsonToTS from "json-to-ts";
import { Format } from "style-dictionary/types";
import { simplifyTokens } from "../../utils/simplifyTokens";

/** Creates much more correct typescript typings than regular TS formatter */
export const reactNativeTypescriptTypingsFormatter: Format = {
  name: "typescript/rn-typings",
  format: ({ dictionary }) => {
    return (
      'declare module "@vygruppen/spor-design-tokens/react-native";\n' +
      "declare const root: RootObject;\n" +
      "export default root;\n" +
      JsonToTS(simplifyTokens(dictionary.tokens)).join("\n")
    );
  },
};
