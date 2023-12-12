import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "./box-shadow-utils";
import { State, Subset } from "./types";

type BorderState = Subset<
  State,
  "hover" | "focus" | "disabled" | "selected" | "invalid" | "default"
>;

export function baseBorder(state: BorderState, props: StyleFunctionProps) {
  switch (state) {
    case "hover":
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("darkGrey", "white")(props),
          borderWidth: 2,
        }),
      };
    case "focus": {
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("greenHaze", "azure")(props),
          borderWidth: 2,
        }),
      };
    }
    case "disabled": {
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("platinum", "whiteAlpha.400")(props),
        }),
      };
    }
    case "selected":
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("greenHaze", "azure")(props),
        }),
      };
    case "invalid": {
      return {
        boxShadow: getBoxShadowString({
          borderColor: "brightRed",
          borderWidth: 2,
        }),
      };
    }
    case "default":
    default:
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
        }),
      };
  }
}

type FloatingBorderState = Subset<
  State,
  "default" | "hover" | "focus" | "active" | "selected"
>;
export function floatingBorder(
  state: FloatingBorderState,
  props: StyleFunctionProps,
) {
  switch (state) {
    case "hover":
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("grey.300", "white")(props),
        }),
      };
    case "selected":
    case "focus":
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("greenHaze", "azure")(props),
          borderWidth: 2,
        }),
      };
    case "active":
    case "default":
    default:
      return {
        boxShadow: getBoxShadowString({
          borderColor: mode("grey.200", "whiteAlpha.400")(props),
        }),
      };
  }
}
