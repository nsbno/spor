import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";
import { fontWeights } from "../foundations";

type GhostBackgroundState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
>;

/** 👻👻👻👻👻👻👻👻👻👻👻👻👻👻 */
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
    case "selected": {
      return {
        backgroundColor: mode(
          "ghost.surface.hover.light",
          "ghost.surface.hover.dark",
        )(props),
      };
    }
    case "default":
      return {
        backgroundColor: "transparent",
      };
  }
}

type GhostTextState = Subset<State, "default" | "selected">;

export function ghostText(state: GhostTextState, props: StyleFunctionProps) {
  switch (state) {
    case "selected":
      return {
        color: mode("ghost.text.light", "ghost.text.dark")(props),
        fontWeights: fontWeights.bold,
      };
    default:
      return {
        color: mode("ghost.text.light", "ghost.text.dark")(props),
      };
  }
}
