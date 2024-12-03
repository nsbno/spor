import { defineSlotRecipe } from "@chakra-ui/react";

export const alertExpandableSlotRecipe = defineSlotRecipe({
  slots: ["container", "accordion"],
  className: "spor-alert-expandable",
  base: {
    container: {
      paddingX: 3,
      paddingY: 2,
      fontSize: "inherit",
      transitionProperty: "outline, border-radius",
      transitionDuration: "fast",
      _expanded: {
        borderBottomRadius: "none",
      },
      _hover: {
        outline: "2px solid",
      },
    },
  },
  variants: {
    variant: {
      info: {
        accordion: {
          outlineColor: "cloudy",
        },
        container: {
          _hover: {
            outlineColor: "sky",
          },
          _active: {
            backgroundColor: "icyBlue",
          },
        },
      },
      success: {
        accordion: {
          outlineColor: "coralGreen",
        },
        container: {
          _hover: {
            outlineColor: "blueGreen",
          },
          _active: {
            backgroundColor: "mint",
          },
        },
      },
      warning: {
        accordion: {
          outlineColor: "primrose",
        },
        container: {
          _hover: {
            outlineColor: "sunshine",
          },
          _active: {
            backgroundColor: "cornSilk",
          },
        },
      },
      "alt-transport": {
        accordion: {
          outlineColor: "burntYellow",
        },
        container: {
          _hover: {
            outlineColor: "golden",
          },
          _active: {
            backgroundColor: "sunshine",
          },
        },
      },
      error: {
        accordion: {
          outlineColor: "salmon",
        },
        container: {
          _hover: {
            outlineColor: "apricot",
          },
          _active: {
            backgroundColor: "pink",
          },
        },
      },
      service: {
        container: {
          _hover: {
            outlineColor: "blueGreen",
          },
          _active: {
            backgroundColor: "pine",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
});
