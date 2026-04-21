import { defineSlotRecipe } from "@chakra-ui/react";

import { stepperAnatomy } from "./anatomy";

export const stepperSlotRecipe = defineSlotRecipe({
  slots: stepperAnatomy.keys(),
  className: "spor-stepper",
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["space-between", null, "center"],
      minHeight: ["3rem", null, "3.75rem"],
      overflowX: "auto",
      width: "100%",
      "& svg": {
        color: {
          _light: "blackAlpha.700",
          _dark: "whiteAlpha.700",
        },
      },
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
      core: {
        root: {
          backgroundColor: "transparent",
        },
      },
      accent: {
        root: {
          backgroundColor: "bg.accent",
        },
        stepButton: {
          color: {
            _light: "blackAlpha.900",
            _dark: "whiteAlpha.900",
          },
          _disabled: {
            color: "text.core",
          },
          _currentStep: {
            color: "text.accent",
          },
          _hover: {
            backgroundColor: "surface.accent.hover",
            _disabled: {
              backgroundColor: "transparent",
            },
          },
        },
        backButton: {
          _hover: {
            backgroundColor: "surface.brand.hover",
          },
        },
      },
    },
  },
});
