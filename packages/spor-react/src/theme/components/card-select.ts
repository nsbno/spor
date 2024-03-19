import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import {
  baseBackground,
  floatingBackground,
  ghostBackground,
} from "../utils/background-utils";
import { baseBorder, floatingBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

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
      ...focusVisibleStyles(props),
    },
    card: {
      borderRadius: "sm",
      boxShadow: "md",
      padding: 3,
      color: mode("darkGrey", "white")(props),
      ...floatingBackground("default", props),
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
          ...ghostBackground("selected", props),
        },
      },
    }),
    floating: (props) => ({
      trigger: {
        ...floatingBackground("default", props),
        boxShadow: "sm",
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
    }),
  },
  sizes: {
    sm: {
      trigger: {
        paddingX: 1.5,
        paddingY: 1,
        minHeight: "1.25rem",
        fontSize: "xs",
        borderRadius: "sm",
      },
    },
    md: {
      trigger: {
        paddingX: 2,
        paddingY: 1.5,
        minHeight: "2.625rem",
        fontSize: "sm",
        borderRadius: "sm",
      },
    },
    lg: {
      trigger: {
        paddingX: 3,
        paddingY: 2,
        minHeight: "3.375rem",
        fontSize: "sm",
        borderRadius: "sm",
      },
    },
  },
});

export default config;
