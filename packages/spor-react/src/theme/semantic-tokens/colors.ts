import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";
import { vyDigital } from "./vyDigital";

export const colors = defineSemanticTokens.colors({
  ...vyDigital,
});
