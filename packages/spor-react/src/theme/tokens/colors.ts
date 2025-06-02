import { defineTokens } from "@chakra-ui/react";
import aliasJson from "@vygruppen/spor-design-tokens/tokens/color/alias.json" assert { type: "json" };
import linjetagJson from "@vygruppen/spor-design-tokens/tokens/color/linjetag.json" assert { type: "json" };
import paletteJson from "@vygruppen/spor-design-tokens/tokens/color/palette.json" assert { type: "json" };

export const colors = defineTokens.colors({
  ...aliasJson.color.alias,
  ...paletteJson.color.palette,
  linjetag: linjetagJson.color.linjetag,
});
