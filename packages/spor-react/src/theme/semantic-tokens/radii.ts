import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const radii = defineSemanticTokens.radii({
  none: { value: tokens.size["border-radius"].none },
  xs: { value: tokens.size["border-radius"].xs },
  sm: { value: tokens.size["border-radius"].sm },
  md: { value: tokens.size["border-radius"].md },
  lg: { value: tokens.size["border-radius"].lg },
  xl: { value: tokens.size["border-radius"].xl },
  "2xl": { value: tokens.size["border-radius"]["2xl"] },
  round: { value: "50%" },
});
