import tokens from "@vygruppen/spor-design-tokens";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const brandTheme = {
  [Brand.VyDigital]: {},
  [Brand.VyUtvikling]: {
    colors: tokens.color.vyDigital,
  },
  [Brand.CargoNet]: {
    colors: tokens.color.cargonet,
  },
};

export { fontFaces } from "./font-faces";
