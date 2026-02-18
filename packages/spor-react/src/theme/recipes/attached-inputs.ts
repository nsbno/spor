import { defineRecipe } from "@chakra-ui/react";

export const attachedInputsRecipe = defineRecipe({
  base: {
    display: "flex",
    gap: "0.1rem",
    width: "100%",
    "& select": {
      borderEndRadius: "0 !important",
    },

    "& > *": {
      position: "relative",
      zIndex: 100,
    },
    "& > *:focus-within": {
      zIndex: 101,
    },
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        "& > *:first-of-type:not(:last-of-type) [data-attachable]": {
          borderEndRadius: "0 !important",
        },
        "& > *:not(:first-of-type):not(:last-of-type) [data-attachable]": {
          borderRadius: "0 !important",
        },
        "& > *:not(:first-of-type):last-of-type [data-attachable]": {
          borderStartRadius: "0 !important",
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
          borderBottomRadius: "0 !important",
        },
        "& > *:not(:first-of-type):not(:last-of-type) [data-attachable]": {
          borderRadius: "0 !important",
        },
        "& > *:not(:first-of-type):last-of-type [data-attachable]": {
          borderTopRadius: "0 !important",
        },
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
