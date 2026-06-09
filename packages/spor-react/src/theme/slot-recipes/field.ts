import { defineSlotRecipe } from "@chakra-ui/react";

import { fieldAnatomy } from "./anatomy";

export const fieldSlotRecipe = defineSlotRecipe({
  className: "spor-field",
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      width: "100%",
      position: "relative",
      flexDirection: "column",
    },
    requiredIndicator: {
      marginStart: 1,
      // eslint-disable-next-line spor/use-semantic-tokens
      color: "brightRed",
    },
    label: {
      display: "flex",
    },
    helperText: {
      color: "text.subtle",
      lineHeight: "normal",
      fontSize: ["mobile.sm", "desktop.sm"],
    },
    errorText: {
      borderRadius: "xs",
      backgroundColor: "surface.critical",
      color: "text",
      paddingX: 1.5,
      paddingY: 1,
      textStyle: "xs",
      width: "fit-content",
      position: "absolute",
      top: "100%",
      left: 3,
      zIndex: "dropdown",
      maxWidth: "50ch",
      _after: {
        content: "''",
        position: "absolute",
        top: 0,
        left: "1em",
        width: "0.5rem",
        height: "0.5rem",
        backgroundColor: "surface.critical",
        transform: "translateY(-50%) rotate(45deg)",
        pointerEvents: "none",
      },
    },
  },
  variants: {
    size: {
      sm: {
        label: {
          fontSize: ["mobile.xs", "desktop.xs"],
          "&[data-float]": {
            fontSize: ["mobile.2xs", "desktop.2xs"],
            top: 0,
          },
          top: "0.5rem",
        },
        helperText: {
          color: "text.subtle",
          lineHeight: "normal",
          fontSize: ["mobile.xs", "desktop.xs"],
        },
      },
      md: {
        label: {
          fontSize: ["mobile.sm", "desktop.sm"],
          "&[data-float]": {
            fontSize: ["mobile.2xs", "desktop.2xs"],
            color: "text.subtle",
            top: "0.3rem",
          },
          top: "0.9rem",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
