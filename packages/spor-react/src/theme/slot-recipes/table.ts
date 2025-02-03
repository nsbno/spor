import { defineSlotRecipe } from "@chakra-ui/react";
import { tableAnatomy } from "./anatomy";
import { coreText } from "../utils/core-utils";
import { outlineBorder } from "../utils/outline-utils";

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "right",
  },
};

export const tableSlotRecipe = defineSlotRecipe({
  className: "spor-table",
  slots: tableAnatomy.keys(),
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
    header: {
      ...coreText("default"),
    },
    columnHeader: {
      fontWeight: "bold",
      textAlign: "start",
      borderBottom: "sm",
      borderColor: "outline.disabled",
      ...numericStyles,
      paddingX: 1.5,
      paddingY: 1,
    },
    row: {
      borderBottom: "sm",
      borderColor: "outline.disabled",
      ...numericStyles,
    },
    cell: {
      ...numericStyles,
      paddingX: 1.5,
      paddingY: 1,
    },
    footer: {
      fontWeight: "medium",
    },
  },

  variants: {
    colorPallette: {
      green: {
        root: {
          backgroundColor: "mint",
          color: "brand.text",
        },
        columnHeader: {
          backgroundColor: "brand.surface",
          color: "brand.text",
        },
        row: {
          backgroundColor: "brand.surface",
          color: "brand.text",
          _hover: {
            backgroundColor: "brand.hover",
          },
        },
        cell: {
          backgroundColor: "brand.surface",
          color: "brand.text",
        },
        footer: {
          backgroundColor: "brand.surface",
          color: "brand.text",
        },
      },
      gray: {
        root: {
          backgroundColor: "grey.50",
          color: "brand.text",
        },
        columnHeader: {
          backgroundColor: "grey.100",
          color: "brand.text",
        },
        row: {
          backgroundColor: "grey.100",
          color: "brand.text",
          _hover: {
            backgroundColor: "grey.200",
          },
        },
        cell: {
          backgroundColor: "grey.100",
          color: "brand.text",
        },
        footer: {
          backgroundColor: "grey.100",
          color: "brand.text",
        },
      },
    },
    variant: {
      line: {
        columnHeader: {
          borderLeft: "none",
          borderBottom: "sm",
          borderColor: "outline.disabled",
        },
        cell: {
          borderBottom: "sm",
          borderColor: "outline.disabled",
          ...numericStyles,
          _first: {
            borderLeft: "none",
          },
        },
      },

      outline: {
        table: {
          borderRadius: "md",
          overflow: "hidden",
          border: "sm",
          borderColor: "outline.disabled",
        },
        cell: {
          borderLeft: "sm",
          borderColor: "outline.disabled",
          ...numericStyles,
          _first: {
            borderLeft: "none",
          },
        },
        header: {
          backgroundColor: "bg.tertiary",
          border: "none",
        },
        columnHeader: {
          borderBottom: "sm",
          borderLeft: "sm",
          borderLeftColor: "outline.disabled",
          borderColor: "outline.disabled",
          ...outlineBorder("default"),
          ...numericStyles,
          _first: {
            borderLeft: "none",
          },
        },
        row: {
          ...numericStyles,
          borderBottom: "sm",
          borderColor: "outline.disabled",
          _last: {
            borderBottom: "none",
          },
          _hover: {
            backgroundColor: "bg.secondary",
          },
        },
      },
    },

    size: {
      sm: {
        table: {
          fontSize: "mobile.sm",
        },
        cell: {
          paddingX: 1,
          paddingY: 0.5,
          fontSize: "mobile.sm",
        },
        columnHeader: {
          paddingX: 1,
          paddingY: 0.5,
        },
        caption: {
          paddingX: 1,
          paddingY: 0.5,
        },
      },
      md: {
        table: {
          fontSize: "mobile.md",
        },
        cell: {
          paddingX: 1.5,
          paddingY: 1,
          fontSize: "mobile.md",
        },

        columnHeader: {
          paddingX: 1.5,
          paddingY: 1,
          fontSize: "mobile.md",
        },
        caption: {
          paddingX: 1.5,
          paddingY: 1,
          fontSize: "mobile.md",
        },
      },
      lg: {
        table: {
          fontSize: "mobile.md",
        },
        cell: {
          paddingX: 3,
          paddingY: 3,
          fontSize: "mobile.md",
        },
        columnHeader: {
          paddingX: 3,
          paddingY: 2,
          fontSize: "mobile.md",
        },
        caption: {
          paddingX: 3,
          paddingY: 2,
        },
      },
    },
  },
});
