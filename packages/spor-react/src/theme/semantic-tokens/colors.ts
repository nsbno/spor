import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens/raw-tokens";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  VyTeknologi = "VyTeknologi",
  CargoNet = "CargoNet",
}

export const vyDigitalColors = defineSemanticTokens.colors({
  ...tokens.color["vy-digital"].color.vyDigital,
});

export const vyUtviklingColors = defineSemanticTokens.colors({
  ...tokens.color["vy-utvikling"].color.vyUtvikling,
});

export const vyTeknologiColors = defineSemanticTokens.colors({
  ...tokens.color["vy-teknologi"].color.vyTeknologi,
});

export const cargonetColors = defineSemanticTokens.colors({
  ...tokens.color["cargonet"].color.cargonet,
});
