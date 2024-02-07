import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";

type BaseTextState = Subset<
  State,
  "default" | "selected"
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
