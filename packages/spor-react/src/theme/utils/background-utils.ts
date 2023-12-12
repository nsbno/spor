import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";
import { colors } from "../foundations";

type BaseBackgroundState = Subset<State, "default" | "active" | "selected" | "disabled">;
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
      return {
        backgroundColor: "transparent",
      };
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
        backgroundColor: "transparent",
      }
    case "selected": {
      return {
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
      }
    }
    case "default":
    default:
      return {
        backgroundColor: "transparent",
      };
  }
}

type FloatingBackgroundState = Subset<State, "default" | "hover" | "focus" | "active" | "selected">;

export function floatingBackground(state: FloatingBackgroundState, props: StyleFunctionProps) {
  switch (state) {
    case "selected":
      return {
        backgroundColor: mode("mint", "pine")(props),
      }
    case "active":
      return {
        backgroundColor: mode("mint", `color-mix(in srgb, ${props.theme.darkBackgroundColor ?? colors.darkGrey}, ${colors.white} 30%)`)(props),
      };
    case "hover":
      return {
        backgroundColor: mode("white", `color-mix(in srgb, ${props.theme.darkBackgroundColor ?? colors.darkGrey}, ${colors.white} 20%)`)(props),
      }
    case "focus":
      return {
        backgroundColor: mode("white", `color-mix(in srgb, ${props.theme.darkBackgroundColor ?? colors.darkGrey}, ${colors.white} 40%)`)(props),
      }
    case "default":
    default:
      return {
        backgroundColor: mode("white", `color-mix(in srgb, ${props.theme.darkBackgroundColor ?? colors.darkGrey}, ${colors.white} 10%)`)(props),
      };
  }
}