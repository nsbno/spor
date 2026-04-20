import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens/raw-tokens";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const vyDigitalColors = defineSemanticTokens.colors({
  ...tokens.color["vy-digital-v2"].color.vyDigitalV2,
});

export const vyUtviklingColors = defineSemanticTokens.colors({
  ...tokens.color["vy-digital-v2"].color.vyDigitalV2,
});

export const cargonetColors = defineSemanticTokens.colors({
  ...tokens.color["vy-digital-v2"].color.vyDigitalV2,
});
