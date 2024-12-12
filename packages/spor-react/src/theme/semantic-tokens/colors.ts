import { defineSemanticTokens } from "@chakra-ui/react";
import { vyDigital } from "./vyDigital";
import { cargonet } from "./cargonet";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
}

export const colors = defineSemanticTokens.colors({
  ...vyDigital,
});
