import { tokens } from "@vygruppen/spor-react";

import { appPalette } from "./appPalette";

const { palette, alias } = tokens.default.color;

export const colors = { ...appPalette, ...alias, ...palette };
