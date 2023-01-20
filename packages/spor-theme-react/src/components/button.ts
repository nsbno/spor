import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: {
    border: 0,
    borderRadius: "xl",
    fontWeight: "bold",
    transitionProperty: "common",
    transitionDuration: "normal",
    px: 3,
    _focus: {
      boxShadow: 0,
      outline: 0,
    },
    _disabled: {
      cursor: "not-allowed",
      boxShadow: "none",
      backgroundColor: "silver",
      color: "dimGrey",
    },
    _hover: {
      _disabled: {
        background: "silver",
      },
    },
  },
  variants: {
    control: {
      backgroundColor: "darkTeal",
      color: "white",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.darkTeal}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "night",
      },
      _active: {
        backgroundColor: "pine",
      },
    },
    primary: {
      backgroundColor: "primaryGreen",
      color: "white",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.primaryGreen}, inset 0 0 0 4px ${colors.primaryGreen}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "pine",
      },
      _active: {
        backgroundColor: "azure",
      },
    },
    secondary: {
      backgroundColor: "coralGreen",
      color: "darkTeal",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.coralGreen}, inset 0 0 0 4px ${colors.coralGreen}, inset 0 0 0 6px currentColor`,
        },
        notFocus: {
          boxShadow: "none",
        },
      }),
      _hover: {
        backgroundColor: "blueGreen",
      },
      _active: {
        backgroundColor: "mint",
      },
    },
    tertiary: {
      backgroundColor: "mint",
      color: "darkGrey",
      fontWeight: "normal",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.mint}, inset 0 0 0 4px ${colors.mint}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "seaMist",
      },
      _active: {
        backgroundColor: "lightGrey",
      },
    },
    additional: ({ colorMode }) => ({
      backgroundColor: "transparent",
      color: mode("darkGrey", "white")({ colorMode }),
      fontWeight: "normal",
      boxShadow: `inset 0 0 0 1px ${mode(
        colors.blackAlpha[400],
        colors.whiteAlpha[400]
      )({ colorMode })}`,
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderWidth: 3,
            borderColor: "greenHaze",
          }),
        },
        notFocus: {
          boxShadow: `inset 0 0 0 1px ${mode(
            colors.blackAlpha[400],
            colors.whiteAlpha[400]
          )({ colorMode })}`,
        },
      }),
      _hover: {
        boxShadow: `inset 0 0 0 2px currentColor`,
      },
      _active: {
        boxShadow: `inset 0 0 0 1px ${mode(
          colors.blackAlpha[400],
          colors.whiteAlpha[300]
        )({ colorMode })}`,
        backgroundColor: mode("mint", colors.whiteAlpha[300])({ colorMode }),
      },
    }),
    ghost: () => ({
      backgroundColor: "transparent",
      color: "darkGrey",
      fontWeight: "normal",
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
        },
        notFocus: {
          outline: "none",
        },
      }),
      _hover: {
        backgroundColor: "seaMist",
        _disabled: {
          color: "blackAlpha.300",
        },
      },
      _active: {
        backgroundColor: "mint",
      },
    }),
  },
  sizes: {
    lg: {
      minHeight: 8,
      minWidth: 8,
      fontSize: "18px",
    },
    md: {
      minHeight: 7,
      minWidth: 7,
      fontSize: "18px",
    },
    sm: {
      minHeight: 6,
      minWidth: 6,
      fontSize: "16px",
    },
    xs: {
      minHeight: 5,
      minWidth: 5,
      fontSize: "16px",
      px: 2,
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default config;
