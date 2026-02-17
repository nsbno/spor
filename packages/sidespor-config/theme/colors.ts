import { tokens } from "@vygruppen/spor-react";

import { Grey, WhiteAlpha } from "../types";
import { appPalette } from "./appPalette";

const { palette } = tokens.default.color;

const colors: Record<string, string | WhiteAlpha | Grey> = {
  ...appPalette,
  ...tokens.default.color.alias,
  ...palette,
};

export default colors;
