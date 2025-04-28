import { defineSemanticTokens } from "@chakra-ui/react";
import vyDigitalJson from "@vygruppen/spor-design-tokens/tokens/color/vy-digital.json";
import VyUtviklingJson from "@vygruppen/spor-design-tokens/tokens/color/vy-utvikling.json";
import cargonetJson from "@vygruppen/spor-design-tokens/tokens/color/cargonet.json";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const vyDigitalColors = defineSemanticTokens.colors({
  ...vyDigitalJson.color.vyDigital,
});

export const vyUtviklingColors = defineSemanticTokens.colors({
  ...VyUtviklingJson.color.vyUtvikling,
});

export const cargonetColors = defineSemanticTokens.colors({
  ...cargonetJson.color.cargonet,
});
