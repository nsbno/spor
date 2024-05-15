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
          "white",
          `color-mix(in srgb, white 10%, var(--spor-colors-bg-default-dark))`,
        )(props),
      };
  }
}

type FloatingBorderState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
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
    case "selected":
      return {
        outline: "1px solid",
        outlineColor: mode("outline.focus.light", "outline.focus.dark")(props),
      };
    case "active":
      return {
        outline: "1px solid",
        outlineColor: mode(
          "floating.outline.active.light",
          "floating.outline.active.dark",
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
