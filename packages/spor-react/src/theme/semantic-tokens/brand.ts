import vyDigitalJson from "@vygruppen/spor-design-tokens/tokens/color/vy-digital.json";
import cargonetJson from "@vygruppen/spor-design-tokens/tokens/color/cargonet.json";
import { cargonetColors, vyDigitalColors } from "./colors";
import { semanticTokens } from ".";

export enum Brand {
  VyDigital = "VyDigital",
  CargoNet = "CargoNet",
}

export const brandTheme = {
  [Brand.VyDigital]: vyDigitalColors,
  [Brand.CargoNet]: cargonetColors,
};

export { fontFaces } from "../font-faces";
