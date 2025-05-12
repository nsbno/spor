import { Transform } from "style-dictionary/types";

/**
 * Adds px suffixes to all values in the size category
 */
export const pxTransformer: Transform = {
  name: "size/px",
  type: "value",
  filter: (token) =>
    token.attributes?.category === "size" && token.unit !== "none",
  transform: (token) => {
    const valueInPixels = Number.parseFloat(token.original.value);
    return `${valueInPixels}px`;
  },
};
