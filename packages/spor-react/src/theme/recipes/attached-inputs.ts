import { defineRecipe } from "@chakra-ui/react";

export const attachedInputsRecipe = defineRecipe({
  base: {
    display: "flex",
    gap: "0.1rem",
    width: "100%",
    "& select": {
      borderEndRadius: 0,
    },
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        "& > *:first-of-type:not(:last-of-type) [data-attachable]": {
          borderEndRadius: 0,
        },
        "& > *:not(:first-of-type):not(:last-of-type) [data-attachable]": {
          borderRadius: 0,
        },
        "& > *:not(:first-of-type):last-of-type [data-attachable]": {
          borderStartRadius: 0,
        },
      },
      vertical: {
        flexDirection: "column",
        "& > *:first-of-type:not(:last-of-type) [data-attachable]": {
          borderBottomRadius: 0,
        },
        "& > *:not(:first-of-type):not(:last-of-type) [data-attachable]": {
          borderRadius: 0,
        },
        "& > *:not(:first-of-type):last-of-type [data-attachable]": {
          borderTopRadius: 0,
        },
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
