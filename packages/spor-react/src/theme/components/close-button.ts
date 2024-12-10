import { defineRecipe } from "@chakra-ui/react";
import { useColorModeValue } from "../..";
import { cssVar } from "@chakra-ui/theme-tools";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";

const $size = cssVar("close-button-size");

export const closeButtonRecipe = defineRecipe({
  base: {
    w: [$size.reference],
    h: [$size.reference],
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "md",
    backgroundColor: "transparent",
    color: useColorModeValue("darkGrey", "white"),
    fontWeight: "normal",
    ...focusVisibleStyles(),
    _hover: {
      ...ghostBackground("hover"),
      _disabled: {
        color: "dimGrey",
      },
    },
    _active: {
      ...ghostBackground("active"),
    },
  },
  variants: {
    size: {
      lg: {
        width: "40px",
        fontSize: "xs",
      },
      md: {
        width: "32px",
        fontSize: "0.75rem",
      },
      sm: {
        width: "24px",
        fontSize: "0.625rem",
      },
    },
  },
  compoundVariants: [
    {
      size: "md",
      css: {},
    },
  ],
});

export default closeButtonRecipe;
