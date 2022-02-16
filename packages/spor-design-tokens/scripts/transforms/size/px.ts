import { Transform } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";

/**
 * Adds px suffixes to all values in the size category
 */
export const pxTransformer: Named<Transform> = {
  name: "size/px",
  type: "value",
  matcher: (token) =>
    token.attributes?.category === "size" && token.unit !== "none",
  transformer: (token) => {
    const valueInPixels = parseFloat(token.original.value);
    return `${valueInPixels}px`;
  },
};
