import vyDigitalJson from "@vygruppen/spor-design-tokens/tokens/color/vy-digital.json";
import cargonetJson from "@vygruppen/spor-design-tokens/tokens/color/cargonet.json";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const brandTheme = {
  [Brand.VyDigital]: vyDigitalJson.color.vyDigital,
  [Brand.VyUtvikling]: {
    colors: {
      bg: {
        default: {
          dark: "darkGrey",
        },
      },
      surface: {
        default: {
          dark: "darkGrey",
        },
      },
    },
  },
  [Brand.CargoNet]: cargonetJson.color.cargonet,
};

export { fontFaces } from "./font-faces";