import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";

type BaseBackgroundState = Subset<State, "active" | "selected" | "disabled">;
export function baseBackground(state: BaseBackgroundState, props: StyleFunctionProps) {
  switch (state) {
    case "active":
      return {
        backgroundColor: mode("mint", "whiteAlpha.100")(props),
      };
    case "selected":
      return {
        backgroundColor: "pine",
      };
    case "disabled":
      return {
        backgroundColor: mode("silver", "whiteAlpha.100")(props),
      };
    default:
      return {};
  }
}

type GhostBackgroundState = Subset<State, "default" | "hover" | "focus" | "active" | "selected">;

export function ghostBackground(state: GhostBackgroundState, props: StyleFunctionProps) {
  switch (state) {
    case "hover": {
      return {
        backgroundColor: mode("seaMist", "whiteAlpha.100")(props),
      }
    }
    case "active":
      return {
        backgroundColor: mode("seaMist", "whiteAlpha.200")(props),
      }
    case "focus":
      return {
        backgroundColor: mode("transparent", "transparent")(props),
      }
    case "selected": {
      return {
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
      }
    }
    case "default":
    default:
      return {};
  }
}