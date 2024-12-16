import { brandBackground } from "./brand-utils";
import { State, Subset } from "./types";

type FloatingBackgroundState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
>;

export function floatingBackground(state: FloatingBackgroundState) {
  switch (state) {
    case "selected":
      return brandBackground("default");
    case "active":
      return {
        backgroundColor: "floating.surface.active",
      };
    case "hover":
      return {
        backgroundColor: "floating.surface.hover",
      };
    case "default":
      return {
        backgroundColor: "white",
      };
  }
}

type FloatingBorderState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
>;
export function floatingBorder(state: FloatingBorderState) {
  switch (state) {
    case "hover":
      return {
        border: "1px solid",
        borderColor: "floating.outline.hover",
      };
    case "selected":
      return {
        border: "1px solid",
        borderColor: "outline.focus",
      };
    case "active":
      return {
        border: "1px solid",
        borderColor: "floating.outline.active",
      };
    default:
      return {
        border: "1px solid",
        borderColor: "floating.outline",
      };
  }
}
