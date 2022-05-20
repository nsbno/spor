import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  field: {
    width: "100%",
    outline: "none",
    border: 0,
    backgroundColor: "white",
    borderRadius: "sm",
    transitionProperty: "common",
    transitionDuration: "fast",
    position: "relative",
    px: 3,
    height: "54px",
    fontSize: "18px",

    boxShadow: `inset 0 0 0 1px ${colors.outline.darkGrey}`,
    _hover: {
      boxShadow: `inset 0 0 0 2px ${colors.outline.darkGrey}`,
    },
    _focus: {
      boxShadow: `inset 0 0 0 2px ${colors.outline.greenHaze}`,
    },
    _disabled: {
      boxShadow: `inset 0 0 0 1px ${colors.platinum}`,
      _hover: { boxShadow: `inset 0 0 0 1px ${colors.platinum}` },
      _focus: { boxShadow: `inset 0 0 0 1px ${colors.platinum}` },
    },
    _invalid: {
      boxShadow: `inset 0 0 0 2px ${colors.error.brightRed}`,
      _hover: {
        boxShadow: `inset 0 0 0 2px ${colors.outline.darkGrey}`,
      },
      _focus: {
        boxShadow: `inset 0 0 0 2px ${colors.outline.greenHaze}`,
      },
    },
    " + label": {
      fontSize: ["mobile.sm", "desktop.sm"],
      top: "2px",
      left: props.paddingLeft || props.pl || 3,
      zIndex: 2,
      position: "absolute",
      my: 2,
      transition: ".1s ease-out",
      transformOrigin: "top left",
    },
    "&:not(:placeholder-shown)": {
      pt: "16px",
      "& + label": {
        transform: "scale(0.825) translateY(-10px)",
      },
    },
  },
  element: {
    height: "100%",
  },
});

export default {
  parts: parts.keys,
  baseStyle,
};
