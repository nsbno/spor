import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { brandBackground } from "./brand-utils";
import { State, Subset } from "./types";

type AccentBackgroundState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
>;

export function accentBackground(
  state: AccentBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "selected":
      return brandBackground("default", props);
    case "active":
      return {
        backgroundColor: mode(
          "accent.surface.active.light",
          "accent.surface.active.dark",
        )(props),
      };
    case "hover":
      return {
        backgroundColor: mode(
          "accent.surface.hover.light",
          "accent.surface.hover.dark",
        )(props),
      };
    default:
      return {
        backgroundColor: mode(
          "accent.surface.default.light",
          "accent.surface.default.dark",
        )(props),
      };
  }
}

type AccentTextState = Subset<State, "default" | "selected">;

export function accentText(state: AccentTextState, props: StyleFunctionProps) {
  switch (state) {
    case "selected":
      return {
        color: mode("brand.text.light", "brand.text.dark")(props),
      };
    default:
      return {
        color: mode("accent.text.light", "accent.text.dark")(props),
      };
  }
}
