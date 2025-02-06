import vyDigitalJson from "@vygruppen/spor-design-tokens/tokens/color/vy-digital.json";
import cargonetJson from "@vygruppen/spor-design-tokens/tokens/color/cargonet.json";
import { cargonetColors, vyDigitalColors } from "./semantic-tokens/colors";
import { semanticTokens } from "./semantic-tokens";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const brandTheme = {
  [Brand.VyDigital]: {},
  [Brand.VyUtvikling]: {
    semanticTokens: {
      colors: {
        bg: {
          default: {
            value: {
              _light: "darkGrey",
              _dark: "darkGrey",
            },
          },
        },
        surface: {
          default: {
            value: {
              _light: "darkGrey",
              _dark: "darkGrey",
            },
          },
        },
      },
    },
  },
  [Brand.CargoNet]: {
    semanticTokens: {
      colors: cargonetJson.color.cargonet,
    },
  },
};
export { fontFaces } from "./font-faces";
