import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleObject } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: "100%",
    outline: "none",
    border: 0,
    backgroundColor: "alias.white",
    borderRadius: "sm",
    transition: ".1s ease-out",
    position: "relative",
    px: "16px",
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
      boxShadow: `inset 0 0 0 1px ${colors.alias.platinum}`,
      _hover: { boxShadow: `inset 0 0 0 1px ${colors.alias.platinum}` },
      _focus: { boxShadow: `inset 0 0 0 1px ${colors.alias.platinum}` },
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
  },
  element: {
    height: "100%",
  },
};

export default {
  parts: parts.keys,
  baseStyle,
  variants: {},
  sizes: {},
  defaultProps: {},
};
