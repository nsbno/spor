import { brandBackground } from "./brand-utils";
import { State, Subset } from "./types";

type FloatingBackgroundState = Subset<
  State,
  "default" | "hover" | "active" | "focus"
>;

export function floatingBackground(state: FloatingBackgroundState) {
  switch (state) {
    case "focus":
      return brandBackground("default");
    case "active":
      return {
        backgroundColor: "floating.surface.active",
      };
    case "hover":
      return {
        backgroundColor: {
          _light: "floating.surface.hover",
          _dark: `color-mix(in srgb, white 10%, var(--spor-colors-bg))`,
        },
      };
    case "default":
      return {
        backgroundColor: {
          _light: "bg",
          _dark: `color-mix(in srgb, white 10%, var(--spor-colors-bg))`,
        },
      };
  }
}

type FloatingBorderState = Subset<
  State,
  "default" | "hover" | "active" | "focus"
>;
export function floatingBorder(state: FloatingBorderState) {
  switch (state) {
    case "hover":
      return {
        outline: "1px solid",
        outlineColor: "floating.outline.hover",
      };
    case "focus":
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
        outlineColor: "floating.outline",
      };
  }
}
