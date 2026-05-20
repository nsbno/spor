import { defineSlotRecipe } from "@chakra-ui/react";

import { errorSummaryAnatomy } from "./anatomy";

export const errorSummarySlotRecipe = defineSlotRecipe({
  slots: errorSummaryAnatomy.keys(),
  className: "spor-error-summary",
  base: {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: [3, 5],
      backgroundColor: "surface.critical",
    },
    heading: {
      direction: "row",
      fontSize: "md",
      fontWeight: "bold",
      color: "text.critical",
      gap: [1, 1.5],
      alignItems: "center",
    },
    list: {
      alignItems: "flex-start",
      paddingLeft: [4, 5],
    },
    item: {
      color: "text.critical.subtle",
      marginTop: [2, 1.5],
    },
  },
  variants: {
    size: {
      sm: {
        container: {
          borderRadius: "sm",
        },
      },
      md: {
        container: {
          borderRadius: "md",
        },
      },
      lg: {
        container: {
          borderRadius: "lg",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
