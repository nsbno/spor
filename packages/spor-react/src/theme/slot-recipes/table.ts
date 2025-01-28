import { defineSlotRecipe } from "@chakra-ui/react";
import { coreText } from "../utils/core-utils";

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
};

export const tableSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "body",
    "row",
    "cell",
    "columnHeader",
    "caption",
    "footer",
    "header",
  ],
  className: "spor-table",
  base: {
    root: {
      tableLayout: "fixed",
      borderCollapse: "collapse",
      width: "100%",
      ...coreText("default"),
    },
    body: {
      ...coreText("default"),
    },
    columnHeader: {
      fontWeight: "bold",
      textAlign: "start",
    },
  },
  variants: {
    variant: {
      line: {
        cell: {
          borderBottom: "sm",
          borderColor: "blackAlpha.200",
          ...numericStyles,
        },
        row: {
          borderBottom: "sm",
          borderColor: "blackAlpha.200",
          ...numericStyles,
          "&:last-of-type": {
            td: {
              borderBottomWidth: 0,
            },
          },
        },
      },
      outline: {
        cell: {
          border: "sm",
          borderColor: "whiteAlpha.200",
          ...numericStyles,
          _first: {
            borderLeft: "none",
          },
        },
        row: {
          transitionDuration: "fast",
          transitionProperty: "background-color, box-shadow",
          _hover: {
            backgroundColor: "blackAlpha.200",
          },
          _last: {
            td: {
              borderBottom: "none",
            },
          },
        },
      },
    },
    size: {
      sm: {
        table: {
          fontSize: ["mobile.xs", "desktop.xs"],
        },
        th: {
          paddingX: 3,
          paddingY: 1.5,
        },
        td: {
          paddingX: 3,
          paddingY: 1.5,
        },
        caption: {
          paddingX: 3,
          paddingY: 1.5,
        },
      },
      md: {
        table: {
          fontSize: ["mobile.sm", "desktop.sm"],
        },
        th: {
          paddingX: 3,
          paddingY: 1.5,
        },
        td: {
          paddingX: 3,
          paddingY: 1.5,
        },
        caption: {
          paddingX: 3,
          paddingY: 1.5,
        },
      },
      lg: {
        table: {
          fontSize: ["mobile.sm", "desktop.sm"],
        },
        th: {
          paddingX: 3,
          paddingY: "15px",
        },
        td: {
          paddingX: 3,
          paddingY: "15px",
        },
        caption: {
          paddingX: 3,
          paddingY: "15px",
        },
      },
    },
  },
  defaultVariants: {
    variant: "line",
    size: "md",
  },
});
