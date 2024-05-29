import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";

type OutlineBorderState = Subset<State, "default" | "error" | "focus">;
export function outlineBorder(
  state: OutlineBorderState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "error":
      return {
        outlineColor: mode("outline.error.light", "outline.error.dark")(props),
      };
    case "focus":
      return {
        outlineColor: mode("outline.focus.light", "outline.focus.dark")(props),
      };
    default:
      return {
        outlineColor: mode(
          "outline.default.light",
          "outline.default.dark",
        )(props),
      };
  }
}
