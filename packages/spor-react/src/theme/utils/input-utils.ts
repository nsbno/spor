import { baseBackground, baseBorder, baseText } from "./base-utils";
import { floatingBackground, floatingBorder } from "./floating-utils";
import { InputState } from "./types";
import { focusVisibleStyles } from "./focus-utils";
import { surface } from "./surface-utils";

export function inputVariant(state: InputState) {
  switch (state) {
    case "base":
      return {
        ...baseBackground("default"),
        ...baseBorder("default"),
        _hover: {
          ...baseBorder("hover"),
        },
        _active: {
          ...baseBackground("active"),
          ...baseBorder("default"),
        },
        _selected: {
          ...baseBackground("selected"),
          ...baseBorder("selected"),
        },
      };
    case "floating":
      return {
        boxShadow: "sm",
        ...floatingBackground("default"),
        ...floatingBorder("default"),

        _hover: {
          ...floatingBorder("hover"),
          ...floatingBackground("hover"),
        },
        _active: {
          ...floatingBorder("active"),
          ...floatingBackground("active"),
        },
        _selected: {
          ...floatingBorder("selected"),
          ...floatingBackground("selected"),
        },
      };
    case "default":
    default:
      return {
        ...baseBackground("default"),
        ...baseBorder("default"),
        _hover: {
          ...baseBorder("hover"),
        },
        _active: {
          ...baseBackground("active"),
          ...baseBorder("default"),
        },
        _selected: {
          ...baseBackground("selected"),
          ...baseBorder("selected"),
        },
      };
  }
}

export const inputBaseStyle = () => ({
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
      ...focusVisibleStyles()._focusVisible,
      outlineOffset: 0,
    },
    _disabled: {
      ...surface("disabled"),
      ...baseBorder("disabled"),
      pointerEvents: "none",
    },
    _invalid: {
      ...baseBorder("invalid"),
      _hover: {
        ...baseBorder("hover"),
      },
    },
    " + label, + div[data-lastpass-icon-root] + label": {
      fontSize: ["mobile.sm", "desktop.sm"],
      top: "2px",
      left: 3,
      zIndex: 2,
      position: "absolute",
      marginY: 2,
      transition: ".1s ease-out",
      transformOrigin: "top left",
      cursor: "text",
    },
    "&:not(:placeholder-shown)": {
      paddingTop: "1rem",
      "& + label, & + div[data-lastpass-icon-root] + label": {
        transform: "scale(0.825) translateY(-10px)",
      },
    },
  },
  element: {
    height: "100%",
  },
  group: {
    ":has(:disabled)": {
      ...baseText("disabled"),
    },
  },
});
