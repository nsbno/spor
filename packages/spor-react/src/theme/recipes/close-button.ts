import { defineRecipe } from "@chakra-ui/react";

import { ghostBackground } from "../utils/ghost-utils";

export const closeButtonRecipe = defineRecipe({
  base: {
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "md",
    backgroundColor: "transparent",
    color: "darkGrey",
    fontWeight: "normal",
    _hover: {
      ...ghostBackground("hover"),
      _disabled: {
        color: "dimGrey",
      },
      _active: {
        ...ghostBackground("active"),
      },
    },
  },
  variants: {
    size: {
      lg: {
        width: "40px",
        height: "40px",
        fontSize: "xs",
      },
      md: {
        width: "32px",
        height: "32px",
        fontSize: "0.75rem",
      },
      sm: {
        width: "24px",
        height: "24px",
        fontSize: "0.625rem",
      },
    },
  },
});
