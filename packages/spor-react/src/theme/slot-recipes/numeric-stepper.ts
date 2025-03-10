import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const numericStepperRecipe = defineSlotRecipe({
  slots: ["container", "input", "text", "button"],
  base: {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      fontSize: "sm",
      fontWeight: "bold",
      marginX: 1,
      paddingX: 1,
      borderRadius: "xs",
      textAlign: "center",
      transitionProperty: "common",
      transitionDuration: "fast",
      ...coreText("default"),
      ...coreBackground("default"),

      _disabled: {
        pointerEvents: "none",
        opacity: 0.5,
      },

      _hover: {
        ...coreBorder("default"),
      },

      _active: {
        ...coreBackground("active"),
      },

      ...focusVisibleStyles,
    },
    text: {
      fontSize: "sm",
      fontWeight: "bold",
      marginX: 1,
      paddingX: 1,
      textAlign: "center",
      width: "4ch",
      ...coreText("default"),
    },
    button: {
      minWidth: "24px",
      minHeight: "24px",
    },
  },
});
