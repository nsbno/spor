import tokens from "@vygruppen/spor-design-tokens";

import { appPalette } from "./appPalette";

const { palette, alias } = tokens.color;

export const colors = { ...appPalette, ...alias, ...palette };
