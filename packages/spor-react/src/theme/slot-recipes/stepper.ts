import { defineSlotRecipe } from "@chakra-ui/react";
import { baseText } from "../utils/base-utils";
import { brandBackground } from "../utils/brand-utils";
import { accentText, accentBackground } from "../utils/accent-utils";

export const stepperSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "container",
    "innerContainer",
    "title",
    "stepCounter",
    "stepContainer",
    "stepButton",
    "stepNumber",
    "stepTitle",
    "closeButton",
  ],
  className: "spor-stepper",
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["space-between", null, "center"],
      minHeight: ["48px", null, "60px"],
      overflowX: "auto",
      width: "100%",
    },
    container: {
      paddingX: [2, null, null, 0],
      maxWidth: "container.lg",
      marginX: "auto",
      width: "100%",
    },
    innerContainer: {
      overflow: "hidden",
      display: ["flex", null, "none"],
      alignItems: "center",
      justifyContent: "space-between",
      gap: 3,
    },
    title: {
      overflow: "hidden",
      fontWeight: "bold",
      WebkitLineClamp: 2,
      display: "-webkit-box",
      textAlign: "center",
      maxWidth: "80%",
    },
    stepContainer: {
      display: "flex",
      alignItems: "center",
    },
    stepTitle: {
      textStyle: "sm",
      whiteSpace: "nowrap",
    },
  },
  variants: {
    variant: {
      base: {
        root: {
          backgroundColor: "transparent",
        },
      },
      accent: {
        root: {
          backgroundColor: "accent.bg",
          ...accentText("default"),
        },
        stepButton: {
          color: baseText("default").color,
          _disabled: {
            color: baseText("disabled").color,
          },
          _hover: {
            backgroundColor: accentBackground("hover").backgroundColor,
            _disabled: {
              backgroundColor: "transparent",
            },
          },
        },
        backButton: {
          _hover: {
            ...brandBackground("hover"),
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
