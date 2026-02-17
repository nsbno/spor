import { tokens } from "@vygruppen/spor-react";

import { Grey, WhiteAlpha } from "../types";
import { appPalette } from "./appPalette";

const { palette, alias } = tokens.default.color;

const colors: Record<string, string | WhiteAlpha | Grey> = {
  ...appPalette,
  ...alias,
  ...palette,
};

export default colors;
