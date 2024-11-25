import { State, Subset } from "./types";

type BrandBackgroundState = Subset<State, "default" | "hover" | "active">;

export function brandBackground(state: BrandBackgroundState) {
  switch (state) {
    case "active":
      return {
        backgroundColor: "brand.surface.active",
      };
    case "hover":
      return {
        backgroundColor: "brand.surface.hover",
      };
    case "default":
    default:
      return {
        backgroundColor: "brand.surface.default",
      };
  }
}

type BrandTextState = Subset<State, "hover" | "active" | "default">;

export function brandText(state: BrandTextState) {
  return {
    color: "brand.text",
  };
}
