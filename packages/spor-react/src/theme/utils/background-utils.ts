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
          "base.surface.active.light",
          "base.surface.active.dark",
        )(props),
      };
    case "selected":
      return {
        backgroundColor: mode(
          "brand.surface.default.light",
          "brand.surface.default.dark",
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
    default:
      return {
        backgroundColor: mode(
          "surface.default.light",
          "surface.default.dark",
        )(props),
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
          "ghost.surface.hover.light",
          "ghost.surface.hover.dark",
        )(props),
      };
    }
    case "active":
      return {
        backgroundColor: mode(
          "ghost.surface.active.light",
          "ghost.surface.active.dark",
        )(props),
      };
    case "focus":
      return {
        backgroundColor: "transparent",
      };
    // TODO: Create a selected state for ghost? Or can we use a different state? Used in listboxes.
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
          "brand.surface.default.light",
          "brand.surface.default.dark",
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
          "brand.surface.default.light",
          "brand.surface.default.dark",
        )(props),
      };
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
          "brand.surface.active.light",
          "brand.surface.active.dark",
        )(props),
      };
    case "hover":
      return {
        backgroundColor: mode(
          "brand.surface.hover.light",
          "brand.surface.hover.dark",
        )(props),
      };
    case "focus":
    case "default":
    default:
      return {
        backgroundColor: mode(
          "brand.surface.default.light",
          "brand.surface.default.dark",
        )(props),
      };
  }
}
