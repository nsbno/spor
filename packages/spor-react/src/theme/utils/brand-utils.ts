import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";

type BrandBackgroundState = Subset<State, "default" | "hover" | "active">;

export function brandBackground(
  state: BrandBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "active":
      return {
        backgroundColor: mode(
          "brand.surface.active.light",
          "brand.surface.active.dark",
        )(props),
      };
    case "hover":
      return {
        backgroundColor: mode(
          "brand.surface.hover.light",
          "brand.surface.hover.dark",
        )(props),
      };
    case "default":
    default:
      return {
        backgroundColor: mode(
          "brand.surface.default.light",
          "brand.surface.default.dark",
        )(props),
      };
  }
}

type BrandTextState = Subset<State, "hover" | "active" | "default">;

export function brandText(state: BrandTextState, props: StyleFunctionProps) {
  return {
    color: mode("brand.text.light", "brand.text.dark")(props),
  };
}
