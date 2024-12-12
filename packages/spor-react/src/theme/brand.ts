import tokens from "@vygruppen/spor-design-tokens";
import { vyDigital } from "./semantic-tokens/vyDigital";
import { cargonet } from "./semantic-tokens/cargonet";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const brandTheme = {
  [Brand.VyDigital]: {},
  [Brand.VyUtvikling]: vyDigital,
  [Brand.CargoNet]: cargonet,
};

export { fontFaces } from "./font-faces";
