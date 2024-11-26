import { defineRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { surface } from "../utils/surface-utils";
import { baseText } from "../utils/base-utils";

export const buttonRecipe = defineRecipe({
  className: "spor-button",
  base: {
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
    ...focusVisibleStyles(),
    _disabled: {
      cursor: "not-allowed",
      pointerEvents: "none",
      boxShadow: "none",
      ...surface("disabled"),
      ...baseText("disabled"),
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "brand.default",
        color: "brand.text.default",
        _hover: {
          backgroundColor: "brand.hover",
        },
        _active: {
          backgroundColor: "brand.active",
        },
      },
      secondary: {
        backgroundColor: "accent.default",
        color: "accent.text.default",
        _hover: {
          backgroundColor: "accent.hover",
        },
        _active: {
          backgroundColor: "accent.active",
        },
      },
      tertiary: {
        backgroundColor: "base.default",
        color: "base.text.default",
        _hover: {
          backgroundColor: "base.hover",
        },
        _active: {
          backgroundColor: "base.active",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "brand.text.default",
        _hover: {
          backgroundColor: "brand.hover",
        },
        _active: {
          backgroundColor: "brand.active",
        },
      },
      floating: {
        boxShadow: "sm",
        backgroundColor: "base.default",
        color: "base.text.default",
        _hover: {
          backgroundColor: "base.hover",
        },
        _active: {
          backgroundColor: "base.active",
        },
      },
    },
    size: {
      xs: {
        minHeight: 5,
        minWidth: 5,
        paddingY: 0.5,
        fontSize: "xs",
        fontWeight: "normal",
      },
      sm: {
        minHeight: 6,
        minWidth: 6,
        fontSize: "xs",
        fontWeight: "normal",
      },
      md: {
        minHeight: 7,
        minWidth: 7,
        fontSize: "sm",
        fontWeight: "bold",
      },
      lg: {
        minHeight: 8,
        minWidth: 8,
        fontSize: "sm",
        fontWeight: "bold",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
