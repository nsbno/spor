import { tokens } from "@vygruppen/spor-react";

import { Grey, WhiteAlpha } from "../types";
import { mapValues } from "../utility";
import { appPalette } from "./appPalette";

const { palette } = tokens.default.color;

const alias = mapValues(tokens.default.color.alias, (value) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, color, strength] = value.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (palette as any)[color][strength];
});

const colors: Record<string, string | WhiteAlpha | Grey> = {
  ...appPalette,
  ...alias,
  ...palette,
};

export default colors;
