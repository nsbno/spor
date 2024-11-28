import { anatomy } from "@chakra-ui/anatomy";
import { defineRecipe } from "@chakra-ui/react";

const parts = anatomy("progressBar").parts(
  "container",
  "background",
  "progress",
  "description",
);

export const progressBarRecipe = defineRecipe({
  base: {
    minWidth: "100px",
    display: "flex",
    borderRadius: "sm",
    justifyContent: "flex-start",
    marginX: "auto",
    textAlign: "center",
      marginTop: 2,
      fontWeight: "bold",
  },
  variants: {
    variant: {
      primary: {
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
});
