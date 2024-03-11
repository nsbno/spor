import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "./focus-util";
import { State, Subset } from "./types";

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
          "outline.default.light",
          "outline.default.dark",
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
    // TODO: Base doesn't have selected borders
    // case "selected":
    //   return {
    //     boxShadow: getBoxShadowString({
    //       borderColor: mode("greenHaze", "azure")(props),
    //     }),
    //   };
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

type FloatingBorderState = Subset<
  State,
  "default" | "hover" | "focus" | "active" | "selected"
>;
export function floatingBorder(
  state: FloatingBorderState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "hover":
      return {
        outline: "1px solid",
        outlineColor: mode(
          "floating.outline.hover.light",
          "floating.outline.hover.dark",
        )(props),
      };
    default:
      return {
        outline: "1px solid",
        outlineColor: mode(
          "floating.outline.default.light",
          "floating.outline.default.dark",
        )(props),
      };
  }
}
