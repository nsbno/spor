import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { brandBackground } from "./brand-utils";
import { focusVisibleStyles } from "./focus-utils";
import { surface } from "./surface-utils";
import { State, Subset } from "./types";

type BaseBackgroundState = Subset<
  State,
  "default" | "active" | "selected" | "hover" | "disabled"
>;
export function baseBackground(
  state: BaseBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "active":
      return {
        backgroundColor: mode(
          "base.surface.active.light",
          "base.surface.active.dark",
        )(props),
      };
    case "selected":
      return brandBackground("default", props);
    case "disabled":
      return surface("disabled", props);
    case "hover":
    default:
      return { backgroundColor:  "transparent" };
  }
}

type BorderState = Subset<
  State,
  "hover" | "focus" | "disabled" | "selected" | "invalid" | "default"
>;

export function baseBorder(state: BorderState, props: StyleFunctionProps) {
  switch (state) {
    case "hover":
      return {
        outline: "2px solid",
        outlineColor: mode(
          "base.outline.hover.light",
          "base.outline.hover.dark",
        )(props),
      };
    case "focus": {
      return focusVisibleStyles(props)._focusVisible;
    }
    case "disabled": {
      return {
        outline: "1px solid",
        outlineColor: mode(
          "outline.disabled.light",
          "outline.disabled.dark",
        )(props),
      };
    }
    case "invalid": {
      return {
        outline: "2px solid",
        outlineColor: mode("outline.error.light", "outline.error.dark")(props),
      };
    }
    case "default":
    default:
      return {
        outline: "1px solid",
        outlineColor: mode(
          "base.outline.default.light",
          "base.outline.default.dark",
        )(props),
      };
  }
}

type BaseTextState = Subset<State, "default" | "selected" | "disabled">;
export function baseText(state: BaseTextState, props: StyleFunctionProps) {
  switch (state) {
    case "selected":
      return {
        color: mode("brand.text.light", "brand.text.dark")(props),
      };
    case "disabled":
      return {
        color: mode("text.disabled.light", "text.disabled.dark")(props),
      };
    default:
      return {
        color: mode("base.text.light", "base.text.dark")(props),
      };
  }
}
