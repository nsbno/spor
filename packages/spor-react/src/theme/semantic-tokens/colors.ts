import { defineSemanticTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens/raw-tokens";

export enum Brand {
  VyDigital = "VyDigital",
  /**
   * @deprecated The VyUtvikling theme is deprecated and will be removed in a
   * future major version. Use {@link Brand.VyTeknologi} instead.
   */
  VyUtvikling = "VyUtvikling",
  VyTeknologi = "VyTeknologi",
  CargoNet = "CargoNet",
}

export const vyDigitalColors = defineSemanticTokens.colors({
  ...tokens.color["vy-digital"].color.vyDigital,
});

/**
 * @deprecated The VyUtvikling theme is deprecated and will be removed in a
 * future major version. Use {@link vyTeknologiColors} instead.
 */
export const vyUtviklingColors = defineSemanticTokens.colors({
  ...tokens.color["vy-utvikling"].color.vyUtvikling,
});

export const vyTeknologiColors = defineSemanticTokens.colors({
  ...tokens.color["vy-teknologi"].color.vyTeknologi,
});

export const cargonetColors = defineSemanticTokens.colors({
  ...tokens.color["cargonet"].color.cargonet,
});
