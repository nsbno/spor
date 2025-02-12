import { defineSemanticTokens } from "@chakra-ui/react";
import vyDigitalJson from "@vygruppen/spor-design-tokens/tokens/color/vy-digital.json";
import cargonetJson from "@vygruppen/spor-design-tokens/tokens/color/cargonet.json";
import aliasJson from "@vygruppen/spor-design-tokens/tokens/color/alias.json";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const colors = defineSemanticTokens.colors({
  ...vyDigitalJson.color.vyDigital,
  /* ...aliasJson.color.alias, */
});

export const vyDigitalColors = defineSemanticTokens.colors({
  ...vyDigitalJson.color.vyDigital,
});

export const cargonetColors = defineSemanticTokens.colors({
  ...cargonetJson.color.cargonet,
});
