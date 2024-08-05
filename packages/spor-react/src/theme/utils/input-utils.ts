import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder, baseText } from "./base-utils";
import { floatingBackground, floatingBorder } from "./floating-utils";
import { InputState } from "./types";
import { focusVisibleStyles } from "./focus-utils";
import { surface } from "./surface-utils";

export function inputVariant(state: InputState, props: StyleFunctionProps) {
  switch (state) {
    case "base":
      return {
        ...baseBackground("default", props),
        ...baseBorder("default", props),
        _hover: {
          ...baseBorder("hover", props),
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("default", props),
        },
        _selected: {
          ...baseBackground("selected", props),
          ...baseBorder("selected", props),
        },
      };
    case "floating":
      return {
        boxShadow: "sm",
        ...floatingBackground("default", props),
        ...floatingBorder("default", props),

        _hover: {
          ...floatingBorder("hover", props),
          ...floatingBackground("hover", props),
        },
        _active: {
          ...floatingBorder("active", props),
          ...floatingBackground("active", props),
        },
        _selected: {
          ...floatingBorder("selected", props),
          ...floatingBackground("selected", props),
        },
      };
    case "default":
    default:
      return {
        ...baseBackground("default", props),
        ...baseBorder("default", props),
        _hover: {
          ...baseBorder("hover", props),
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("default", props),
        },
        _selected: {
          ...baseBackground("selected", props),
          ...baseBorder("selected", props),
        },
      };
  }
}

export const inputBaseStyle = (props: StyleFunctionProps) => ({
  field: {
    appearance: "none",
    width: "100%",
    outline: "none",
    border: 0,
    borderRadius: "sm",
    transitionProperty: "common",
    transitionDuration: "fast",
    position: "relative",
    paddingX: 3,
    height: 8,
    fontSize: "mobile.md",
    _focusVisible: {
      ...focusVisibleStyles(props)._focusVisible,
      outlineOffset: 0,
    },
    _disabled: {
      ...surface("disabled", props),
      ...baseBorder("disabled", props),
      pointerEvents: "none",
    },
    _invalid: {
      ...baseBorder("invalid", props),
      _hover: {
        ...baseBorder("hover", props),
      },
    },
    " + label": {
      fontSize: ["mobile.sm", "desktop.sm"],
      top: "2px",
      left: props.paddingLeft || props.pl || 3,
      zIndex: 2,
      position: "absolute",
      marginY: 2,
      transition: ".1s ease-out",
      transformOrigin: "top left",
      cursor: "text",
    },
    "&:not(:placeholder-shown)": {
      paddingTop: "1rem",
      "& + label": {
        transform: "scale(0.825) translateY(-10px)",
      },
    },
  },
  element: {
    height: "100%",
  },
  group: {
    ":has(:disabled)": {
      ...baseText("disabled", props),
    },
  },
});
