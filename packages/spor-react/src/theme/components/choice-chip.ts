import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisibleStyles } from "../utils/focus-util";
import {
  accentBackground,
  baseBackground,
  brandBackground,
} from "../utils/background-utils";
import { baseText, accentText } from "../utils/text-utils";
import { baseBorder, accentBorder,brandBorder } from "../utils/border-utils";

const parts = anatomy("choice-chip").parts("container", "icon", "label");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      ...baseBackground("default", props),
      ...baseBorder("default", props),
      ...baseText("default", props),
      display: "inline-flex",
      alignItems: "center",
      fontSize: "16px",
      px: 5,
      _checked: {
        ...accentText("selected", props),
        ...accentBackground("selected", props),
        ...accentBorder("selected", props),
        _hover: {
          ...brandBackground("hover", props),
          ...baseText("selected", props),
          ...brandBorder("hover", props),
        },
        _active: {
          ...baseText("selected", props),
          ...brandBackground("active", props),
          ...brandBorder("active", props),
        }
      },
      "input:focus-visible + &": focusVisibleStyles(props)._focusVisible,
      "@media (hover:hover)": {
        _hover: {
          ...baseText("default", props),
          ...baseBorder("hover", props),
          ...baseBackground("hover", props),
          cursor: "pointer",
        },
      },
      _active: {
        ...baseBackground("active", props),
        ...baseBorder("default", props),
      },
    },
    icon: {
      mr: props.hasLabel ? 1 : 0,
    },
  }),
  variants: {
    base: (props) => ({}),
    accent: (props) => ({}),
  },
  sizes: {
    sm: {
      container: {
        borderRadius: "15px",
        height: "30px",
        px: 1.5,
      },
    },
    md: {
      container: {
        borderRadius: "18px",
        height: "36px",
        px: 2,
      },
    },
    lg: {
      container: {
        borderRadius: "21px",
        height: "42px",
        px: 2,
      },
    },
    xl: {
      container: {
        borderRadius: "27px",
        height: "54px",
        px: 3,
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});

export default config;
