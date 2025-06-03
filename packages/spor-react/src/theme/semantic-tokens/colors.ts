import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens/raw-tokens";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const vyDigitalColors = defineSemanticTokens.colors({
  ...tokens.color["vy-digital"].color.vyDigital,
});

export const vyUtviklingColors = defineSemanticTokens.colors({
  ...tokens.color["vy-utvikling"].color.vyUtvikling,
});

export const cargonetColors = defineSemanticTokens.colors({
  ...tokens.color.cargonet.color.cargonet,
});
