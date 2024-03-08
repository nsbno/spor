import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
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
          "base.button.active.light",
          "base.button.active.dark",
        )(props),
      };
    case "selected":
      return {
        backgroundColor: mode(
          "base.button.selected.light",
          "base.button.selected.dark",
        )(props),
      };
    case "disabled":
      return {
        backgroundColor: mode(
          "surface.disabled.light",
          "surface.disabled.dark",
        )(props),
      };
    case "hover":
      return {
        backgroundColor: "transparent",
      };
    default:
      return {
        backgroundColor: "transparent",
      };
  }
}

type GhostBackgroundState = Subset<
  State,
  "default" | "hover" | "focus" | "active" | "selected"
>;

export function ghostBackground(
  state: GhostBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "hover": {
      return {
        backgroundColor: mode(
          "ghost.button.hover.light",
          "ghost.button.hover.dark",
        )(props),
      };
    }
    case "active":
      return {
        backgroundColor: mode(
          "ghost.button.active.light",
          "ghost.button.active.dark",
        )(props),
      };
    case "focus":
      return {
        backgroundColor: "transparent",
      };
    // TODO: Is this used anywhere?
    case "selected": {
      return {
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
      };
    }
    case "default":
    default:
      return {
        backgroundColor: "transparent",
      };
  }
}

type FloatingBackgroundState = Subset<
  State,
  "default" | "hover" | "focus" | "active" | "selected"
>;

export function floatingBackground(
  state: FloatingBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "selected":
      return {
        backgroundColor: mode(
          "floating.surface.selected.light",
          "floating.surface.selected.dark",
        )(props),
      };
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
    case "focus":
      return {
        // TODO: Is this required?
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, ${props.theme.colors.accent}, ${colors.white} 40%)`,
        )(props),
      };
    case "default":
    default:
      return {
        backgroundColor: mode(
          "floating.surface.default.light",
          "floating.surface.default.dark",
        )(props),
      };
  }
}

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
      return {
        backgroundColor: mode(
          "accent.button.selected.light",
          "accent.button.selected.dark",
        )(props),
      };
    case "active":
      return {
        backgroundColor: mode(
          "accent.button.active.light",
          "accent.button.active.dark",
        )(props),
      };
    case "hover":
      return {
        backgroundColor: mode(
          "accent.button.hover.light",
          "accent.button.hover.dark",
        )(props),
      };
    case "default":
    default:
      return {
        backgroundColor: mode(
          "accent.button.default.light",
          "accent.button.default.dark",
        )(props),
      };
  }
}

type BrandBackgroundState = Subset<
  State,
  "default" | "hover" | "focus" | "active" | "selected"
>;

export function brandBackground(
  state: BrandBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "selected":
    case "active":
      return {
        backgroundColor: mode(
          "brand.button.active.light",
          "brand.button.active.dark",
        )(props),
      };
    case "hover":
      return {
        backgroundColor: mode(
          "brand.button.hover.light",
          "brand.button.hover.dark",
        )(props),
      };
    case "focus":
    case "default":
    default:
      return {
        backgroundColor: mode(
          "brand.button.default.light",
          "brand.button.default.dark",
        )(props),
      };
  }
}
