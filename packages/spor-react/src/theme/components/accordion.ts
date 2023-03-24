import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      border: "none",
      borderRadius: "sm",
    },
    button: {
      transitionProperty:
        "background-color, color, border-radius, box-shadow, opacity",
      transitionDuration: "normal",
      border: "none",
      borderRadius: "sm",
      display: "flex",
      justifyContent: "space-between",
      color: "darkGrey",
      textAlign: "left",
      ...focusVisible({
        notFocus: {
          boxShadow: getBoxShadowString({
            borderColor: "osloGrey",
          }),
        },
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
        },
      }),
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    panel: {
      pt: 2,
      pb: 5,
      borderBottomRadius: "sm",
    },
    icon: {
      fontSize: "1.25em",
    },
  },
  variants: {
    list: {
      button: {
        boxShadow: "none",
        _hover: {
          backgroundColor: "seaMist",
        },
        _active: {
          backgroundColor: "mint",
          boxShadow: getBoxShadowString({ borderColor: "darkGrey" }),
        },
      },
    },
    outline: {
      container: {
        boxShadow: getBoxShadowString({
          borderColor: colors.blackAlpha["400"],
        }),
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "darkGrey",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "mint",
          boxShadow: getBoxShadowString({
            borderColor: "darkGrey",
          }),
        },
      },
    },
    card: {
      container: {
        boxShadow: "md",
      },
      button: {
        _expanded: {
          borderBottomRadius: "none",
        },
        _hover: {
          backgroundColor: "seaMist",
        },
        _active: {
          backgroundColor: "mint",
        },
      },
    },
  },
  sizes: {
    sm: {
      button: {
        fontSize: "desktop.xs",
        px: 2,
        py: 1,
      },
      panel: {
        px: 2,
      },
    },
    md: {
      button: {
        fontSize: "desktop.sm",
        px: 3,
        py: 1,
      },
      panel: {
        px: 3,
      },
    },
    lg: {
      button: {
        fontSize: "desktop.sm",
        px: 3,
        py: 2,
      },
      panel: {
        px: 3,
      },
    },
  },
  defaultProps: {
    variant: "list",
    size: "md",
  },
});

export default config;
