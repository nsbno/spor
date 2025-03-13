import { Brand } from "../brand";
import { cargonetColors, colors, vyDigitalColors } from "./colors";
import { radii } from "./radii";
import { shadows } from "./shadows";

const baseSemanticTokens = {
  shadows,
  radii,
};

export const semanticTokens = {
  [Brand.VyUtvikling]: {
    ...baseSemanticTokens,
    colors,
  },
  [Brand.CargoNet]: {
    ...baseSemanticTokens,
    colors: cargonetColors,
  },
  [Brand.VyDigital]: {
    ...baseSemanticTokens,
    colors: vyDigitalColors,
  },
};
