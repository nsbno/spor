import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const shadows = defineSemanticTokens.shadows({
  none: {
    value: "none",
  },
  sm: {
    value: tokens.depth.shadow.sm.value,
  },
  md: {
    value: tokens.depth.shadow.md.value,
  },
  lg: {
    value: tokens.depth.shadow.lg.value,
  },
});
