import { defineSemanticTokens } from "@chakra-ui/react";
import vyDigitalJson from "@vygruppen/spor-design-tokens/tokens/color/vy-digital.json";
import cargonetJson from "@vygruppen/spor-design-tokens/tokens/color/cargonet.json";

export const colors = defineSemanticTokens.colors({
  ...vyDigitalJson.color.vyDigital,
  ...cargonetJson.color.cargonet,
});
