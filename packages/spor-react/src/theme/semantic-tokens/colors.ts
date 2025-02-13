import { defineSemanticTokens } from "@chakra-ui/react";
import vyDigitalJson from "@vygruppen/spor-design-tokens/tokens/color/vy-digital.json";
import cargonetJson from "@vygruppen/spor-design-tokens/tokens/color/cargonet.json";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const colors = defineSemanticTokens.colors({
  ...vyDigitalJson.color.vyDigital,
});

export const vyDigitalColors = defineSemanticTokens.colors({
  ...vyDigitalJson.color.vyDigital,
});

export const cargonetColors = defineSemanticTokens.colors({
  ...cargonetJson.color.cargonet,
});
