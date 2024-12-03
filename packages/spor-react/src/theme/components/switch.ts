import { defineRecipe } from "@chakra-ui/react";
import { cssVar } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder } from "../utils/base-utils";
import { brandBackground } from "../utils/brand-utils";

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");

export const switchRecipe = defineRecipe({
  base: {
    _checked: {
      ...brandBackground("default"),
      outlineColor: "transparent",

      _hover: {
        ...baseBackground("default"),
        ...brandBackground("hover"),
      },
    },
    _disabled: {
      pointerEvents: "none",
      ...baseBackground("default"),
      ...baseBorder("disabled"),
      _checked: {
        ...baseBackground("disabled"),
        ...baseBorder("disabled"),
      },
    },
  },
  variants: {
    colorPalette: {
      white: {
        backgroundColor: "default",
        color: "text.default.light",
      },
      grey: {
        backgroundColor: "lightGrey",
      },
      green: {
        backgroundColor: "seaMist",
      },
      red: {
        backgroundColor: "pink",
      },
      darkBlue: {
        backgroundColor: "darkBlue",
        color: "white",
      },
      darkGreen: {
        backgroundColor: "pine",
        color: "white",
      },
      darkYellow: {
        backgroundColor: "banana",
      },
    },
    sizes: {
      sm: {
        container: {
          [$width.variable]: "54px",
          [$height.variable]: "24px",
        },
      },
      md: {
        container: {
          [$width.variable]: "66px",
          [$height.variable]: "30px",
        },
      },
      lg: {
        container: {
          [$width.variable]: "78px",
          [$height.variable]: "36px",
        },
      },
    },
  },
});
