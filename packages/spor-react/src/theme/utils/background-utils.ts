import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

type State =
  | "default"
  | "hover"
  | "active"
  | "focus"
  | "selected"
  | "invalid"
  | "disabled";
export function baseBackground(state: State, props: StyleFunctionProps) {
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
