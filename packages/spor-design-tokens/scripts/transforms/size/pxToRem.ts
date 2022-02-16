import { Transform } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";
import { getBaseFontSize } from "../../utils/getBaseFontSize";

/** Turns a pixel value into rems
 *
 * Uses the base font size as specified in the config.json file, or the default.
 * Will only be applied inside the size category
 */
export const pxToRemTransformer: Named<Transform> = {
  name: "size/pxToRem",
  type: "value",
  matcher: (token) =>
    token.attributes?.category === "size" && token.unit !== "none",
  transformer: (token, options) => {
    const valueInRem =
      parseFloat(token.original.value) / getBaseFontSize(options);
    return `${valueInRem}rem`;
  },
};
