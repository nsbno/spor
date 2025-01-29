import { defineSlotRecipe } from "@chakra-ui/react";
import { tableAnatomy } from "./anatomy";
import { coreText } from "../utils/core-utils";

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
      borderColor: "blackAlpha.200",
      ...numericStyles,
      paddingX: 1.5,
      paddingY: 1,
    },
    row: {
      borderBottom: "sm",
      borderColor: "blackAlpha.200",
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
        cell: {
          borderBottom: "sm",
          borderColor: "blackAlpha.200",
          ...numericStyles,
          _first: {
            borderLeft: "none",
          },
        },
        row: {
          borderBottom: "sm",
          borderColor: "blackAlpha.200",
          ...numericStyles,
        },
      },

      outline: {
        table: {
          borderRadius: "md",
          overflow: "hidden",
        },
        cell: {
          borderLeft: "sm",
          borderColor: "blackAlpha.200",
          ...numericStyles,
          _first: {
            borderLeft: "none",
          },
        },
        header: {
          backgroundColor: "mint",
          border: "none",
        },
        columnHeader: {
          borderLeft: "sm",
          bordeLeftColor: "blackAlpha.10",
          borderColor: "blackAlpha.200",
          ...numericStyles,
          _first: {
            borderLeft: "none",
          },
        },
        row: {
          ...numericStyles,
          _last: {
            borderBottom: "none",
          },
          _hover: {
            backgroundColor: "grey.50",
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
