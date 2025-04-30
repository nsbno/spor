import { defineTokens } from "@chakra-ui/react";
import aliasJson from "@vygruppen/spor-design-tokens/tokens/color/alias.json";
import linjetagJson from "@vygruppen/spor-design-tokens/tokens/color/linjetag.json";
import paletteJson from "@vygruppen/spor-design-tokens/tokens/color/palette.json";

export const colors = defineTokens.colors({
  ...aliasJson.color.alias,
  ...paletteJson.color.palette,
  linjetag: linjetagJson.color.linjetag,
});
