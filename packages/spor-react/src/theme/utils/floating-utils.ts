import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { brandBackground } from "./brand-utils";
import { State, Subset } from "./types";

type FloatingBackgroundState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
>;

export function floatingBackground(
  state: FloatingBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "selected":
      return brandBackground("default", props);
    case "active":
      return {
        backgroundColor: mode(
          "floating.surface.active.light",
          "floating.surface.active.dark",
        )(props),
      };
    case "hover":
      return {
        backgroundColor: mode(
          "floating.surface.hover.light",
          "floating.surface.hover.dark",
        )(props),
      };
    case "default":
      return {
        backgroundColor: mode(
          "floating.surface.default.light",
          "floating.surface.default.dark",
        )(props),
      };
  }
}

type FloatingBorderState = Subset<State, "default" | "hover" | "active">;
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
