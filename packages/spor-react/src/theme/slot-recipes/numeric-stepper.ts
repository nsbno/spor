import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { numericStepperAnatomy } from "./anatomy";

export const numericStepperRecipe = defineSlotRecipe({
  slots: numericStepperAnatomy.keys(),
  className: "spor-numeric-stepper",
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      fontSize: "sm",
      fontWeight: "bold",
      marginX: 0.5,
      paddingX: 0.5,
      borderRadius: "xs",
      textAlign: "center",
      transitionProperty: "common",
      transitionDuration: "fast",
      color: "core.text",
      backgroundColor: "transparent",

      _focus: {
        backgroundColor: "surface",
        outline: "2px solid",
        outlineColor: "outline.focus",
      },

      _active: {
        backgroundColor: "accent.surface.active",
      },

      _disabled: {
        pointerEvents: "none",
        opacity: 0.5,
      },

      _hover: {
        outline: "1px solid",
        outlineColor: "core.outline",
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
      color: "core.text",
    },
    button: {
      border: "0.3rem solid",
      borderColor: "surface",
      outlineOffset: "-2px",
      width: "auto",
      _icon: {
        width: "1.2rem",
        height: "1.2rem",
      },
    },
  },
});
