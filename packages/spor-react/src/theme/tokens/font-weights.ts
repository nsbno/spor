import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const fontWeights = defineTokens.fontWeights({
  light: { value: tokens.size["font-weight"]["light"] },
  normal: { value: tokens.size["font-weight"]["normal"] },
  medium: { value: tokens.size["font-weight"]["medium"] },
  semibold: { value: tokens.size["font-weight"]["semibold"] },
  bold: { value: tokens.size["font-weight"]["bold"] },
});
