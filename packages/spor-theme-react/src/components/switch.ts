import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { calc, cssVar } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");

const $diff = cssVar("switch-track-diff");
const diffValue = calc.subtract($width, $height);

const $translateX = cssVar("switch-thumb-x");

// Track is the background on which the "thumb" moves back and forth
const baseStyleTrack: SystemStyleObject = {
  width: [$width.reference],
  height: [$height.reference],
  transitionProperty: "common",
  transitionDuration: "fast",

  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
};

// The thumb is the circle that moves back and forth
const baseStyleThumb: SystemStyleObject = {
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "50%",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`,
  },
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc($diff).negate().toString(),
    },
  },
  track: baseStyleTrack,
  thumb: baseStyleThumb,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    container: {
      [$width.variable]: "54px",
      [$height.variable]: "24px",
    },
    track: {
      borderRadius: "24px",
      p: "2px",
    },
  },
  md: {
    container: {
      [$width.variable]: "66px",
      [$height.variable]: "30px",
    },
    track: {
      borderRadius: "30px",
      p: "3px",
    },
  },
  lg: {
    container: {
      [$width.variable]: "78px",
      [$height.variable]: "36px",
    },
    track: {
      borderRadius: "36px",
      p: "3px",
    },
  },
};

const variantSolid: PartsStyleObject = {
  track: {
    backgroundColor: "alias.osloGrey",

    _focus: {
      boxShadow: "outline",
    },
    _hover: {
      backgroundColor: "alias.steel",
    },
    _checked: {
      backgroundColor: "alias.darkTeal",
      _hover: {
        backgroundColor: "alias.pine",
      },
      _focus: {
        boxShadow: `0 0 0 4px ${colors.alias.greenHaze}, 0 0 0 2px ${colors.alias.white}`,
      },
    },
  },

  thumb: {
    backgroundColor: "alias.white",
  },
};
const variantOutline: PartsStyleObject = {
  track: {
    backgroundColor: "alias.platinum",
    boxShadow: `0 0 0 1px ${colors.alias.darkGrey}`,

    _focus: {
      backgroundColor: "alias.platinum",
      boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
    },
    _hover: {
      backgroundColor: "alias.white",
    },
    _checked: {
      backgroundColor: "alias.white",
      _hover: {
        backgroundColor: "alias.mint",
      },
      _focus: {
        backgroundColor: "alias.white",
        boxShadow: `0 0 0 4px ${colors.alias.greenHaze}, 0 0 0 2px ${colors.alias.white}`,
      },
    },
  },
  thumb: {
    backgroundColor: "alias.osloGrey",

    _checked: {
      backgroundColor: "alias.darkTeal",
    },
  },
};

const variants: Record<string, PartsStyleObject<typeof parts>> = {
  solid: variantSolid,
  outline: variantOutline,
};

const defaultProps = {
  size: "md",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
