import { focusVisibleStyles } from "../utils/focus-utils";
import { defineRecipe } from "@chakra-ui/react";
import { surface } from "../utils/surface-utils";
import { coreBackground, coreBorder } from "../utils/core-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";

/* FYI: The styling in this file is also used in Textarea */

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
    paddingTop: 3,
    height: 8,
    fontSize: "mobile.md",
    _focusVisible: {
      ...focusVisibleStyles(),
      outlineOffset: 0,
    },

    _disabled: {
      ...surface("disabled"),
      ...coreBorder("disabled"),
      pointerEvents: "none",
    },
    _invalid: {
      ...coreBorder("invalid"),
      _active: {
        ...coreBorder("invalid"),
      },
      _focus: {
        ...coreBorder("invalid"),
      },
      _hover: {
        ...coreBorder("hover"),
      },
    },
  },
  variants: {
    variant: {
      core: {
        ...coreBackground("default"),
        ...coreBorder("default"),
        _hover: {
          ...coreBorder("hover"),
        },
        _active: {
          ...coreBorder("active"),
        },
        _focus: {
          ...coreBorder("focus"),
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
