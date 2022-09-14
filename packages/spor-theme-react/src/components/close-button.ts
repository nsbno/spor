import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { cssVar } from "@chakra-ui/theme-tools";
import { focusVisible } from "../utils/focus-utils";

const $size = cssVar("close-button-size");

const baseStyle: SystemStyleFunction = (props) => {
  return {
    w: [$size.reference],
    h: [$size.reference],
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "xs",
    backgroundColor: "transparent",
    color: "alias.darkGrey",
    fontWeight: "normal",
    ...focusVisible({
      focus: {
        outline: "none",
        boxShadow: `inset 0 0 0 1px ${props.theme.colors.alias.greenHaze}`,
      },
      notFocus: {
        boxShadow: "none",
      },
    }),
    _hover: {
      backgroundColor: "alias.seaMist",
      _disabled: {
        color: "alias.dimGrey",
      },
    },
    _active: {
      backgroundColor: "alias.mint",
    },
  };
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    [$size.variable]: "40px",
    fontSize: "16px",
  },
  md: {
    [$size.variable]: "32px",
    fontSize: "12px",
  },
  sm: {
    [$size.variable]: "24px",
    fontSize: "10px",
  },
};

const defaultProps = {
  size: "md",
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
