import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { accentBackground, accentText } from "../utils/accent-utils";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground } from "../utils/brand-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

const parts = anatomy("choice-chip").parts("container", "icon", "label");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "16px",
      cursor: "pointer",
      transitionProperty: "all",
      transitionDuration: "fast",
      _checked: {
        outlineColor: "transparent",
        ...accentText("selected", props),
        ...accentBackground("selected", props),
        _hover: {
          ...brandBackground("hover", props),
          ...baseText("selected", props),
          outlineColor: "transparent",
        },
        _active: {
          ...baseText("selected", props),
          ...brandBackground("active", props),
        },
      },
      _disabled: {
        pointerEvents: "none",
        boxShadow: "none",
        ...baseText("disabled", props),
        ...baseBackground("disabled", props),
        _hover: {
          ...baseBackground("disabled", props),
          boxShadow: "none",
          ...baseText("disabled", props),
        },
        _checked: {
          cursor: "not-allowed",
          boxShadow: "none",
          ...baseText("disabled", props),
          ...baseBackground("disabled", props),
          _hover: {
            ...baseBackground("disabled", props),
            boxShadow: "none",
            ...baseText("disabled", props),
          },
        },
      },
      "input:focus-visible + &": focusVisibleStyles(props)._focusVisible,
    },
    icon: {
      marginRight: props.hasLabel ? 1 : 0,
    },
  }),
  variants: {
    base: (props) => ({
      container: {
        ...baseBackground("default", props),
        ...baseBorder("default", props),
        ...baseText("default", props),
        _hover: {
          ...baseText("default", props),
          ...baseBorder("hover", props),
          ...baseBackground("hover", props),
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("default", props),
        },
      },
    }),
    accent: (props) => ({
      container: {
        ...accentBackground("default", props),
        ...accentText("default", props),
        _hover: {
          ...accentBackground("hover", props),
          ...accentText("default", props),
        },
        _active: {
          ...accentText("default", props),
          ...accentBackground("active", props),
        },
      },
      _active: {
        ...accentText("default", props),
        ...accentBackground("active", props),
      },
    }),
    floating: (props) => ({
      container: {
        ...floatingBackground("default", props),
        ...baseText("default", props),
        ...floatingBorder("default", props),
        boxShadow: "sm",
        _hover: {
          ...floatingBackground("hover", props),
          ...floatingBorder("hover", props),
          ...baseText("default", props),
          boxShadow: "md",
        },
        _active: {
          ...floatingBackground("active", props),
          ...floatingBorder("active", props),
          ...baseText("default", props),
        },
      },
    }),
  },
  sizes: {
    xs: {
      container: {
        borderRadius: "30px",
        _checked: {
          borderRadius: "9px",
        },
        height: "30px",
        paddingX: 1.5,
      },
    },
    sm: {
      container: {
        borderRadius: "30px",
        _checked: {
          borderRadius: "12px",
        },
        height: "36px",
        paddingX: 2,
      },
    },
    md: {
      container: {
        borderRadius: "30px",
        _checked: {
          borderRadius: "12px",
        },
        height: "42px",
        paddingX: 2,
      },
    },
    lg: {
      container: {
        borderRadius: "30px",
        _checked: {
          borderRadius: "18px",
        },
        height: "54px",
        px: 3,
      },
    },
  },
  defaultProps: {
    size: "sm",
  },
});

export default config;
