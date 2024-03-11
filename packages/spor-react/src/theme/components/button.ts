import { defineStyleConfig } from "@chakra-ui/react";
import {
  accentBackground,
  baseBackground,
  brandBackground,
  floatingBackground,
  ghostBackground,
} from "../utils/background-utils";
import { baseBorder, floatingBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-util";
import { surface } from "../utils/surface-utils";
import { accentText, baseText, brandText } from "../utils/text-utils";

const config = defineStyleConfig({
  baseStyle: (props) => ({
    border: 0,
    borderRadius: "xl",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transitionProperty: "common",
    transitionDuration: "normal",
    textWrap: "wrap",
    paddingX: 3,
    paddingY: 1,
    ...focusVisibleStyles(props),
    _disabled: {
      cursor: "not-allowed",
      pointerEvents: "none",
      boxShadow: "none",
      ...surface("disabled", props),
      ...baseText("disabled", props),
    },
  }),
  variants: {
    primary: (props) => ({
      ...brandBackground("default", props),
      ...brandText("default", props),
      _hover: {
        ...brandBackground("hover", props),
      },
      _active: {
        ...brandBackground("active", props),
      },
    }),
    secondary: (props) => ({
      ...accentBackground("default", props),
      ...accentText("default", props),
      _hover: {
        ...accentBackground("hover", props),
      },
      _active: {
        ...accentBackground("active", props),
      },
    }),
    tertiary: (props) => ({
      ...baseBackground("default", props),
      ...baseText("default", props),
      ...baseBorder("default", props),
      _hover: {
        ...baseBorder("hover", props),
      },
      _active: {
        ...baseBorder("default", props), // We want a
        ...baseBackground("active", props),
      },
    }),
    ghost: (props) => ({
      ...ghostBackground("default", props),
      ...baseText("default", props),
      _hover: {
        ...ghostBackground("hover", props),
        _disabled: {
          ...baseText("disabled", props),
        },
      },
      _active: {
        ...ghostBackground("active", props),
      },
    }),
    floating: (props) => ({
      ...floatingBackground("default", props),
      ...floatingBorder("default", props),
      boxShadow: "sm",
      _hover: {
        ...floatingBackground("hover", props),
        ...floatingBorder("hover", props),
        boxShadow: "md",
      },
      _active: {
        ...floatingBackground("active", props),
        boxShadow: "sm",
      },
    }),
  },
  sizes: {
    lg: {
      minHeight: 8,
      minWidth: 8,
      fontSize: "18px",
      fontWeight: "bold",
    },
    md: {
      minHeight: 7,
      minWidth: 7,
      fontSize: "18px",
      fontWeight: "bold",
    },
    sm: {
      minHeight: 6,
      minWidth: 6,
      fontSize: "16px",
      fontWeight: "normal",
    },
    xs: {
      minHeight: 5,
      minWidth: 5,
      fontSize: "16px",
      fontWeight: "normal",
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default config;
