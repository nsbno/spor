import { defineTokens } from "@chakra-ui/react";
import linjetagJson from "@vygruppen/spor-design-tokens/tokens/color/linjetag.json";
import paletteJson from "@vygruppen/spor-design-tokens/tokens/color/palette.json";
import aliasJson from "@vygruppen/spor-design-tokens/tokens/color/alias.json";

export const colors = defineTokens.colors({
  ...aliasJson.color.alias,
  ...paletteJson.color.palette,
  linjetag: linjetagJson.color.linjetag,
});
