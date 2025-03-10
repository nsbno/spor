import { defineRecipe } from "@chakra-ui/react";

export const toastRecipe = defineRecipe({
  base: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    maxWidth: "60ch",
    minWidth: "40ch",
    paddingX: 2,
    paddingY: 1.5,
    boxShadow: "sm",
    borderRadius: "sm",
  },
  variants: {
    variant: {
      success: {
        backgroundColor: "seaMist",
      },
      info: {
        backgroundColor: "lightBlue",
      },
      error: {
        backgroundColor: "lightRed",
      },
    },
  },
});
