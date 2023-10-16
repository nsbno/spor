import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";


type BackgroundState = Subset<State, "active" | "selected" | "disabled">;

export function baseBackground(state: BackgroundState, props: StyleFunctionProps) {
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
