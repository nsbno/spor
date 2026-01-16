import { defineRecipe } from "@chakra-ui/react";

export const attachedInputsRecipe = defineRecipe({
  base: {
    display: "flex",
    gap: "0.1rem",
    width: "100%",
    "& select": {
      borderEndRadius: 0,
    },
    "& > *": {
      position: "relative",
      zIndex: 0,
    },
    "& > *:focus-within": {
      zIndex: 1,
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

        "&[data-with-flip-button]": {
          "& > *:nth-of-type(2) [data-scope='field'][data-part='root']": {
            "& input": {
              paddingLeft: "8 !important",
            },
            "& svg": {
              marginLeft: "2 !important",
            },
          },
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
