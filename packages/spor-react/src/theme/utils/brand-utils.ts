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
        backgroundColor: "brand.surface",
      };
  }
}

type BrandTextState = Subset<State, "hover" | "active" | "default">;

export function brandText(state: BrandTextState) {
  switch (state) {
    case "active":
      return {
        color: "brand.text.active",
      };
    case "hover":
      return {
        color: "brand.text",
      };
    case "default":
      return {
        color: "brand.text",
      };
  }
}

export function brandTextBackground(state: BrandTextState) {
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
      return {
        backgroundColor: "brand.surface",
      };
  }
}
