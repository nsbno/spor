import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const shadows = defineSemanticTokens.shadows({
  none: {
    value: "none",
  },
  sm: {
    value: {
      _light: tokens.depth.shadow.sm.value,
      _dark: tokens.depth.shadow.sm.value,
    },
  },
  md: {
    value: {
      _light: tokens.depth.shadow.md.value,
      _dark: tokens.depth.shadow.md.value,
    },
  },
  lg: {
    value: {
      _light: tokens.depth.shadow.lg.value,
      _dark: tokens.depth.shadow.lg.value,
    },
  },
});
