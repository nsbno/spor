import tokens from "@vygruppen/spor-design-tokens";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const brandTheme = {
  [Brand.VyDigital]: {},
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
  [Brand.CargoNet]: {
    colors: tokens.color.cargonet as any,
  },
};

export { fontFaces } from "./font-faces";
