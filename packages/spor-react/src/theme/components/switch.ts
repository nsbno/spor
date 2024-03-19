import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { calc, cssVar, mode } from "@chakra-ui/theme-tools";
import { baseBackground, brandBackground } from "../utils/background-utils";
import { baseBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");
const $diff = cssVar("switch-track-diff");
const diffValue = calc.subtract($width, $height);
const $translateX = cssVar("switch-thumb-x");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
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
      ...baseBackground("default", props),
      ...baseBorder("default", props),
      ...focusVisibleStyles(props),

      _hover: {
        ...baseBackground("hover", props),
        ...baseBorder("hover", props),
      },
      _checked: {
        ...brandBackground("default", props),
        outlineColor: "transparent",

        _hover: {
          ...brandBackground("hover", props),
        },
      },
      _disabled: {
        pointerEvents: "none",
        ...baseBackground("default", props),
        ...baseBorder("disabled", props),
        _checked: {
          ...baseBackground("disabled", props),
          ...baseBorder("disabled", props),
        },
      },
    },
    thumb: {
      transitionProperty: "transform",
      transitionDuration: "normal",
      borderRadius: "50%",
      width: [$height.reference],
      height: [$height.reference],

      backgroundColor: mode("base.icon.light", "base.icon.dark")(props),
      "[data-disabled] &": {
        backgroundColor: mode(
          "icon.disabled.light",
          "icon.disabled.dark",
        )(props),
      },
      _checked: {
        backgroundColor: mode("brand.icon.light", "brand.icon.dark")(props),
        transform: `translateX(${$translateX.reference})`,
      },
    },
  }),
  sizes: {
    sm: {
      container: {
        [$width.variable]: "54px",
        [$height.variable]: "24px",
      },
      track: {
        borderRadius: "24px",
        padding: "2px",
      },
    },
    md: {
      container: {
        [$width.variable]: "66px",
        [$height.variable]: "30px",
      },
      track: {
        borderRadius: "30px",
        padding: "3px",
      },
    },
    lg: {
      container: {
        [$width.variable]: "78px",
        [$height.variable]: "36px",
      },
      track: {
        borderRadius: "36px",
        padding: "3px",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});
export default config;
