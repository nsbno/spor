import { focusVisibleStyles } from "../utils/focus-utils";
import { inputVariant } from "../utils/input-utils";
import { defineRecipe } from "@chakra-ui/react";
import { surface } from "../utils/surface-utils";
import { baseBackground, baseBorder } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";

export const inputRecipe = defineRecipe({
  base: {
    appearance: "none",
    width: "100%",
    outline: "none",
    border: 0,
    borderRadius: "sm",
    transitionProperty: "common",
    transitionDuration: "fast",
    position: "relative",
    paddingX: 3,
    paddingTop: 2 + 1,
    height: 8,
    fontSize: "mobile.md",
    _focusVisible: {
      ...focusVisibleStyles(),
      outlineOffset: 0,
    },

    _disabled: {
      ...surface("disabled"),
      ...baseBorder("disabled"),
      pointerEvents: "none",
    },
    _invalid: {
      ...baseBorder("invalid"),
      _hover: {
        ...baseBorder("hover"),
      },
    },
  },
  variants: {
    variant: {
      core: {
        ...baseBackground("default"),
        ...baseBorder("default"),
        _hover: {
          ...baseBorder("hover"),
        },
        _active: {
          ...baseBorder("active"),
        },
        _focus: {
          ...baseBorder("focus"),
        },
      },
      floating: {
        boxShadow: "sm",
        ...floatingBackground("default"),
        ...floatingBorder("default"),

        _hover: {
          ...floatingBorder("hover"),
        },
        _active: {
          ...floatingBorder("active"),
        },
        focus: {
          ...floatingBorder("focus"),
        },
      },
    },
  },
});
