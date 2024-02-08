import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";
import { colors } from "../foundations";

type BaseTextState = Subset<
  State,
  "default" | "selected" | "disabled"
>;
export function baseText(
  state: BaseTextState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "selected":
      return {
        color: mode("white", "darkTeal")(props),
      };
    case "disabled":
      return {
        color: mode(
          "white",
          `color-mix(in srgb, ${props.theme.colors.accent}, ${colors.white} 40%)`,
        )(props),
      }
    default:
      return {
        color: mode("darkGrey", "white")(props),
      };
  }
}

type AccentTextState = Subset<
  State,
  "default" | "selected"
>;

export function accentText(
  state: AccentTextState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "selected":
      return {
        color: mode("white", "darkTeal")(props),
      };
    case "default":
    default:
      return {
        color: mode("darkTeal", "seaMist")(props),
      };
  }
}
