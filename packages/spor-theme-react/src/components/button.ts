import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: {
    border: 0,
    borderRadius: "xl",
    fontWeight: "bold",
    whiteSpace: "nowrap",
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
    control: ({ theme }) => ({
      backgroundColor: "darkTeal",
      color: "white",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${theme.colors.darkTeal}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "night",
      },
      _active: {
        backgroundColor: "pine",
      },
    }),
    primary: ({ theme }) => ({
      backgroundColor: "primaryGreen",
      color: "white",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${theme.colors.primaryGreen}, inset 0 0 0 4px ${theme.colors.primaryGreen}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "pine",
      },
      _active: {
        backgroundColor: "azure",
      },
    }),
    secondary: ({ theme }) => ({
      backgroundColor: "coralGreen",
      color: "darkTeal",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${theme.colors.coralGreen}, inset 0 0 0 4px ${theme.colors.coralGreen}, inset 0 0 0 6px currentColor`,
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
    }),
    tertiary: ({ theme }) => ({
      backgroundColor: "mint",
      color: "darkGrey",
      fontWeight: "normal",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${theme.colors.mint}, inset 0 0 0 4px ${theme.colors.mint}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "seaMist",
      },
      _active: {
        backgroundColor: "lightGrey",
      },
    }),
    additional: ({ theme, colorMode }) => ({
      backgroundColor: "transparent",
      color: mode("darkGrey", "white")({ colorMode }),
      fontWeight: "normal",
      boxShadow: `inset 0 0 0 1px ${mode(
        theme.colors.blackAlpha[400],
        theme.colors.whiteAlpha[400]
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
            theme.colors.blackAlpha[400],
            theme.colors.whiteAlpha[400]
          )({ colorMode })}`,
        },
      }),
      _hover: {
        boxShadow: `inset 0 0 0 2px currentColor`,
      },
      _active: {
        boxShadow: `inset 0 0 0 1px ${mode(
          theme.colors.blackAlpha[400],
          theme.colors.whiteAlpha[300]
        )({ colorMode })}`,
        backgroundColor: mode(
          "mint",
          theme.colors.whiteAlpha[300]
        )({ colorMode }),
      },
    }),
    ghost: () => ({
      backgroundColor: "transparent",
      color: "darkGrey",
      fontWeight: "normal",
      ...focusVisible({
        focus: {
          outline: "none",
        },
        notFocus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
          }),
        },
      }),
      _hover: {
        backgroundColor: "seaMist",
        _disabled: {
          color: "dimGrey",
        },
      },
      _active: {
        backgroundColor: "mint",
      },
    }),
  },
  sizes: {
    lg: {
      height: 8,
      minWidth: 8,
      fontSize: "18px",
    },
    md: {
      height: 7,
      minWidth: 7,
      fontSize: "18px",
    },
    sm: {
      height: 6,
      minWidth: 6,
      fontSize: "16px",
    },
    xs: {
      height: 5,
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
