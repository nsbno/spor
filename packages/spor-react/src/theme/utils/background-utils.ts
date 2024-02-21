import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";
import { colors } from "../foundations";

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
        backgroundColor: mode("mint", "whiteAlpha.100")(props),
      };
    case "selected":
      return {
        backgroundColor: mode("pine", "coralGreen")(props),
      };
    case "disabled":
      return {
        backgroundColor: mode("silver", "whiteAlpha.100")(props),
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
        backgroundColor: mode("seaMist", "whiteAlpha.100")(props),
      };
    }
    case "active":
      return {
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
      };
    case "focus":
      return {
        backgroundColor: "transparent",
      };
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
        backgroundColor: mode("mint", "pine")(props),
      };
    case "active":
      return {
        backgroundColor: mode(
          "mint",
          `color-mix(in srgb, ${props.theme.colors.accent}, ${colors.white} 30%)`,
        )(props),
      };
    case "hover":
      return {
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, ${props.theme.colors.accent}, ${colors.white} 20%)`,
        )(props),
      };
    case "focus":
      return {
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, ${props.theme.colors.accent}, ${colors.white} 40%)`,
        )(props),
      };
    case "default":
    default:
      return {
        backgroundColor: mode(
          "white",
          `color-mix(in srgb, ${props.theme.colors.accent}, ${colors.white} 10%)`,
        )(props),
      };
  }
}

type AccentBackgroundState = Subset<
  State,
  "default" | "hover" | "focus" | "active" | "selected"
>;

export function accentBackground(
  state: AccentBackgroundState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "selected":
      return {
        backgroundColor: mode("primaryGreen", "coralGreen")(props),
      };
    case "active":
      return {
        backgroundColor: mode("mint", "darkTeal")(props),
      };
    case "hover":
      return {
        backgroundColor: mode("coralGreen", "greenHaze")(props),
      };
    case "focus":
      return {
        backgroundColor: mode("greenHaze", "azure")(props),
      };
    case "default":
    default:
      return {
        backgroundColor: mode("seaMist", "pine")(props),
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
        backgroundColor: mode("greenHaze", "seaMist")(props),
      };
    case "hover":
      return {
        backgroundColor: mode("darkTeal", "blueGreen")(props),
      };
    case "focus":
    case "default":
    default:
      return {
        backgroundColor: mode("pine", "coralGreen")(props),
      };
  }
}
