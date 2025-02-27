import { cargonetColors, colors, vyDigitalColors } from "./colors";
import { shadows } from "./shadows";
import { radii } from "./radii";
import { Brand } from "../brand";

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
