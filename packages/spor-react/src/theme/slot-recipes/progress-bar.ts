import { defineSlotRecipe } from "@chakra-ui/react";

export const progressBarRecipe = defineSlotRecipe({
  slots: ["container", "background", "progress", "description"],
  base: {
    container: {
      minWidth: "100px",
    },
    background: {
      display: "flex",
      backgroundColor: "brand.surface",
      borderRadius: "sm",
      justifyContent: "flex-start",
      marginX: "auto",
    },
    progress: {
      backgroundColor: "brand.surface.active",
      borderRadius: "sm",
      maxWidth: "100%",
      transition: "width .2s ease-out",
    },
    description: {
      textAlign: "center",
      marginTop: 2,
      marginX: "auto",
      fontWeight: "bold",
    },
  },
  variants: {
    colorPalette: {
      primary: {
        container: {
          background: "brand.surface",
          color: "brand.text",
          _hover: {
            background: "brand.hover",
          },
          _active: {
            background: "brand.active",
          },
        },
      },
    },
  },
});
