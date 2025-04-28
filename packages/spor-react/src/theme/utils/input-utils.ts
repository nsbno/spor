import { coreBackground, coreBorder, coreText } from "./core-utils";
import { floatingBackground, floatingBorder } from "./floating-utils";
import { InputState } from "./types";
import { surface } from "./surface-utils";

export function inputVariant(state: InputState) {
  switch (state) {
    case "base":
      return {
        ...coreBackground("default"),
        ...coreBorder("default"),
        _hover: {
          ...coreBorder("hover"),
        },
        _active: {
          backgroundColor: "core.surface.active",
          ...coreBorder("default"),
        },
        _selected: {
          ...coreBackground("selected"),
          ...coreBorder("selected"),
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
          backgroundColor: "core.surface.active",
        },
        _selected: {
          backgroundColor: "floating.surface.selected",
          borderColor: "floating.border.selected",
        },
      };
    case "default":
    default:
      return {
        ...coreBackground("default"),
        ...coreBorder("default"),
        _hover: {
          ...coreBorder("hover"),
        },
        _active: {
          backgroundColor: "core.surface.active",
          ...coreBorder("default"),
        },
        _selected: {
          ...coreBackground("selected"),
          ...coreBorder("selected"),
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

    _disabled: {
      ...surface("disabled"),
      ...coreBorder("disabled"),
      pointerEvents: "none",
    },
    _invalid: {
      ...coreBorder("invalid"),
      _hover: {
        ...coreBorder("hover"),
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
      ...coreText("disabled"),
    },
  },
});
