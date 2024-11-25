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
        outline: "1px solid",
        outlineColor: "floating.outline.hover",
      };
    case "selected":
      return {
        outline: "1px solid",
        outlineColor: "outline.focus",
      };
    case "active":
      return {
        outline: "1px solid",
        outlineColor: "floating.outline.active",
      };
    default:
      return {
        outline: "1px solid",
        outlineColor: "floating.outline.default",
      };
  }
}
