import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { calc, cssVar } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");
const $diff = cssVar("switch-track-diff");
const diffValue = calc.subtract($width, $height);
const $translateX = cssVar("switch-thumb-x");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      [$diff.variable]: diffValue,
      [$translateX.variable]: $diff.reference,
      _rtl: {
        [$translateX.variable]: calc($diff).negate().toString(),
      },
    },
    track: {
      width: [$width.reference],
      height: [$height.reference],
      transitionProperty: "common",
      transitionDuration: "fast",

      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    thumb: {
      transitionProperty: "transform",
      transitionDuration: "normal",
      borderRadius: "50%",
      width: [$height.reference],
      height: [$height.reference],
      _checked: {
        transform: `translateX(${$translateX.reference})`,
      },
    },
  },
  variants: {
    solid: {
      track: {
        backgroundColor: "osloGrey",

        _focus: {
          boxShadow: "outline",
        },
        _hover: {
          backgroundColor: "steel",
        },
        _checked: {
          backgroundColor: "darkTeal",
          _hover: {
            backgroundColor: "pine",
          },
          _focus: {
            boxShadow: `0 0 0 4px ${colors.greenHaze}, 0 0 0 2px ${colors.white}`,
          },
        },
      },

      thumb: {
        backgroundColor: "white",
      },
    },
    outline: {
      track: {
        backgroundColor: "platinum",
        boxShadow: `0 0 0 1px ${colors.darkGrey}`,

        _focus: {
          backgroundColor: "platinum",
          boxShadow: `0 0 0 2px ${colors.greenHaze}`,
        },
        _hover: {
          backgroundColor: "white",
        },
        _checked: {
          backgroundColor: "white",
          _hover: {
            backgroundColor: "mint",
          },
          _focus: {
            backgroundColor: "white",
            boxShadow: `0 0 0 4px ${colors.greenHaze}, 0 0 0 2px ${colors.white}`,
          },
        },
      },
      thumb: {
        backgroundColor: "osloGrey",

        _checked: {
          backgroundColor: "darkTeal",
        },
      },
    },
  },
  sizes: {
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
  },
  defaultProps: {
    size: "md",
  },
});
export default config;
