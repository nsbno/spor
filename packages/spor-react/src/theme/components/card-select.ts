import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground, ghostText } from "../utils/ghost-utils";

const parts = anatomy("card-select").parts("trigger", "card");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    trigger: {
      appearance: "none",
      display: "flex",
      alignItems: "center",
      transitionProperty: "outline",
      transitionDuration: "fast",
      ...baseText("default", props),
      ...focusVisibleStyles(props),
    },
    card: {
      borderRadius: "sm",
      boxShadow: "xs",
      padding: 2,
      ...baseText("default", props),
      backgroundColor: mode(
        "white",
        `color-mix(in srgb, white 10%, var(--spor-colors-bg-default-dark))`,
      )(props),
    },
  }),
  variants: {
    base: (props) => ({
      trigger: {
        ...baseBorder("default", props),
        _hover: {
          ...baseBorder("hover", props),
        },
        _active: {
          ...baseBackground("active", props),
          ...baseBorder("default", props),
        },
        _expanded: {
          ...baseBackground("active", props),
        },
      },
    }),
    ghost: (props) => ({
      trigger: {
        _hover: {
          ...ghostBackground("hover", props),
        },
        _active: {
          ...ghostBackground("active", props),
        },
        _expanded: {
          ...ghostBackground("active", props),
          fontWeight: "bold",
        },
      },
    }),
    floating: (props) => ({
      trigger: {
        boxShadow: "sm",
        ...floatingBackground("default", props),
        ...floatingBorder("default", props),
        transition: "all .1s ease-out",
        _hover: {
          ...floatingBackground("hover", props),
          ...floatingBorder("hover", props),
        },
        _active: {
          ...floatingBackground("active", props),
          ...floatingBorder("active", props),
        },
        _expanded: {
          ...floatingBackground("active", props),
        },
      },
      card: {},
    }),
  },
  sizes: {
    sm: {
      trigger: {
        paddingX: 1.5,
        paddingY: 1,
        minHeight: "1.25rem",
        fontSize: "xs",
        borderRadius: "lg",
      },
    },
    md: {
      trigger: {
        paddingX: 2,
        paddingY: 1.5,
        minHeight: "2.625rem",
        fontSize: "xs",
        borderRadius: "lg",
      },
    },
    lg: {
      trigger: {
        paddingX: 3,
        paddingY: 2,
        minHeight: "3.375rem",
        fontSize: "sm",
        borderRadius: "lg",
      },
    },
  },
});

export default config;
