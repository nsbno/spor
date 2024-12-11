import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const colors = defineSemanticTokens.colors({
  ...tokens.color.vyDigital,
});
