import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";

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
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
      };
    }
    case "default":
      return {
        backgroundColor: "transparent",
      };
  }
}
