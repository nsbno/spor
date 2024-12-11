import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export type ColorsType = typeof tokens.color.alias &
  typeof tokens.color.palette &
  typeof tokens.color.vyDigital & { linjetag: typeof tokens.color.linjetag };

export const colors: ColorsType = defineTokens.colors({
  ...tokens.color.alias,
  ...tokens.color.palette,
  linjetag: tokens.color.linjetag,
});
