import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { State, Subset } from "./types";

type BaseTextState = Subset<State, "default" | "selected" | "disabled">;
export function baseText(state: BaseTextState, props: StyleFunctionProps) {
  switch (state) {
    case "selected":
      return {
        color: mode("brand.text.light", "brand.text.dark")(props),
      };
    case "disabled":
      return {
        color: mode("text.disabled.light", "text.disabled.dark")(props),
      };
    default:
      return {
        color: mode("base.text.default.light", "base.text.default.dark")(props),
      };
  }
}

type AccentTextState = Subset<State, "default" | "selected">;

export function accentText(state: AccentTextState, props: StyleFunctionProps) {
  switch (state) {
    case "selected":
      return {
        color: mode("brand.text.light", "brand.text.dark")(props),
      };
    default:
      return {
        color: mode(
          "accent.text.default.light",
          "accent.text.default.dark",
        )(props),
      };
  }
}

type BrandTextState = Subset<State, "hover" | "active" | "default">;

export function brandText(state: BrandTextState, props: StyleFunctionProps) {
  return {
    color: mode("brand.text.light", "brand.text.dark")(props),
  };
}
