import { defineSlotRecipe } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
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
      ...baseText("default"),
      ...baseBackground("default"),

      _disabled: {
        pointerEvents: "none",
        opacity: 0.5,
      },

      _hover: {
        ...baseBorder("default"),
      },

      _active: {
        ...baseBackground("active"),
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
      ...baseText("default"),
    },
    button: {
      minWidth: "24px",
      minHeight: "24px",
    },
  },
});

export default numericStepperRecipe;
