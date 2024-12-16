import { defineRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { surface } from "../utils/surface-utils";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { accentBackground, accentText } from "../utils/accent-utils";
import { brandBackground, brandText } from "../utils/brand-utils";

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
    cursor: "pointer",
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
        ...brandBackground("default"),
        ...brandText("default"),
        _hover: {
          ...brandBackground("hover"),
          _active: {
            ...brandBackground("active"),
          },
        },
      },
      secondary: {
        ...accentBackground("default"),
        ...accentText("default"),
        _hover: {
          ...accentBackground("hover"),
          _active: {
            ...accentBackground("active"),
          },
        },
      },
      tertiary: {
        ...baseBackground("default"),
        ...baseText("default"),
        ...baseBorder("default"),

        _hover: {
          ...baseBorder("hover"),
          ...baseBackground("hover"),
          _active: {
            ...baseBorder("default"),
            ...baseBackground("active"),
          },
        },
      },
      ghost: {
        ...ghostBackground("default"),
        ...baseText("default"),
        _hover: {
          ...ghostBackground("hover"),
          _disabled: {
            ...baseText("disabled"),
          },
          _active: {
            ...ghostBackground("active"),
          },
        },
        _icon: {
          color: "darkGrey",
        },
      },
      floating: {
        ...floatingBackground("default"),
        ...floatingBorder("default"),
        boxShadow: "sm",
        _hover: {
          ...floatingBackground("hover"),
          ...floatingBorder("hover"),
          boxShadow: "md",
          _active: {
            ...floatingBackground("active"),
            boxShadow: "sm",
          },
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
});
