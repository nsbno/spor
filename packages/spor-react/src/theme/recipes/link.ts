import { defineRecipe } from "@chakra-ui/react";

import { coreText } from "../utils/core-utils";

export const linkRecipe = defineRecipe({
  base: {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    backgroundImage: "linear-gradient(currentColor, currentColor)",
    backgroundSize: "100% 1px",
    backgroundPosition: "0 100%",
    backgroundRepeat: "no-repeat",
    borderRadius: "none",
    paddingX: "2px",
    paddingY: "0",
    color: "inherit",
    display: "inline-flex",
    gap: "0",
    position: "relative",
    boxDecorationBreak: "clone",
    textUnderlineOffset: "0",

    "&:focus, &:focus-visible, &:active, &:hover": {
      backgroundImage: "none",
      backgroundSize: "100%",
      outline: "none",
      borderRadius: "xs",
    },

    "& svg": {
      display: "inline-block",
      width: "1.125em",
      height: "1.125em",
      position: "relative",
      bottom: "1px",
      scale: "0.8",
      marginRight: "-2px",
    },
  },
  variants: {
    variant: {
      primary: {
        ...coreText("default"),
        _hover: {
          color: "text.default",
          _active: {
            color: "text.disabled",
          },
        },
      },
      secondary: {
        ...coreText("highlight"),
        padding: "2px",
        _hover: {
          ...coreText("highlight"),
          _active: {
            color: "text.disabled",
          },
        },
      },
    },
  },
});
