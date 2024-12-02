import { defineSlotRecipe } from "@chakra-ui/react";

export const progressBarRecipe = defineSlotRecipe({
  slots: ["container", "background", "progress", "description"],
  base: {
    container: {
      minWidth: "100px",
    },
    background:  ({
      display: "flex",
      backgroundColor:"brand.surface.default.light",     
      borderRadius: "sm",
      justifyContent: "flex-start",
      marginX: "auto",
    }),
    progress: ({
      backgroundColor: "brand.surface.active.light",
      borderRadius: "sm",
      maxWidth: "100%",
      transition: "width .2s ease-out",
    }),
    description: {
      textAlign: "center",
      marginTop: 2,
      marginX: "auto",
      fontWeight: "bold",
    },
  },
  variants: {
    variant: {
      primary: {
        container: {
          backgroundColor: "brand.default",
          color: "brand.text.default",
          _hover: {
            backgroundColor: "brand.hover",
          },
          _active: {
            backgroundColor: "brand.active",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default progressBarRecipe;