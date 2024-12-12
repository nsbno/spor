import { brandBackground } from "./brand-utils";
import { focusVisibleStyles } from "./focus-utils";
import { surface } from "./surface-utils";
import { State, Subset } from "./types";

type BaseBackgroundState = Subset<
  State,
  "default" | "active" | "selected" | "hover" | "disabled"
>;
export function baseBackground(state: BaseBackgroundState) {
  switch (state) {
    case "active":
      return {
        backgroundColor: "base.surface.active",
      };
    case "selected":
      return brandBackground("default");

    case "disabled":
      return surface("disabled");
    case "hover":
    default:
      return { backgroundColor: "transparent" };
  }
}

type BorderState = Subset<
  State,
  "hover" | "focus" | "active" | "disabled" | "selected" | "invalid" | "default"
>;

export function baseBorder(state: BorderState) {
  switch (state) {
    case "hover":
      return {
        outline: "2px solid",
        outlineColor: "base.outline.hover",
      };
    case "focus": {
      return focusVisibleStyles()._focusVisible;
    }
    case "disabled": {
      return {
        outline: "1px solid",
        outlineColor: "outline.disabled",
      };
    }
    case "active": {
      return {
        outline: "1px solid",
        outlineColor: "base.outline",
      };
    }
    case "invalid": {
      return {
        outline: "2px solid",
        outlineColor: "outline.error",
      };
    }
    case "default":
    default:
      return {
        outline: "1px solid",
        outlineColor: "base.outline",
      };
  }
}

type BaseTextState = Subset<State, "default" | "selected" | "disabled">;
export function baseText(state: BaseTextState) {
  switch (state) {
    case "selected":
      return {
        color: "brand.text",
      };
    case "disabled":
      return {
        color: "text.disabled",
      };
    default:
      return {
        color: "base.text",
      };
  }
}
