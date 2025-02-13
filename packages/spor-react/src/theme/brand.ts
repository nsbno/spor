import tokens from "@vygruppen/spor-design-tokens";
import { cargonetColors, vyDigitalColors } from "./semantic-tokens/colors";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const brandTheme = {
  [Brand.VyDigital]: {},
  [Brand.VyUtvikling]: vyDigitalColors,
  [Brand.CargoNet]: cargonetColors,
};

export { fontFaces } from "./font-faces";
