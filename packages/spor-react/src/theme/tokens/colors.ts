import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens/raw-tokens";

export const colors = defineTokens.colors({
  ...tokens.color.alias.color.alias,
  ...tokens.color.palette.color.palette,
  linjetag: tokens.color.linjetag.color.linjetag,
});
