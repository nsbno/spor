import { defineSlotRecipe } from "@chakra-ui/react";

import { tableAnatomy } from "./anatomy";

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
      minWidth: "36rem",
      overflowX: "auto",
    },
    columnHeader: {
      fontWeight: "bold",
      textAlign: "start",

      ...numericStyles,
      paddingX: 1.5,
      paddingY: 1,
    },
    row: {
      ...numericStyles,
    },
    cell: {
      ...numericStyles,
      paddingX: 1.5,
      paddingY: 1,
      width: "100%",
    },
    footer: {
      fontWeight: "medium",
    },
  },

  variants: {
    colorPalette: {
      green: {
        root: {
          backgroundColor: "bg",
        },
        header: {
          backgroundColor: "bg.tertiary",
        },
        columnHeader: {
          color: "text.secondary",
        },
      },
      grey: {
        root: {
          backgroundColor: "bg",
        },
        columnHeader: {
          color: "brand.text.inverted",
          backgroundColor: "surface.disabled",
          _hover: {
            backgroundColor: "surface.disabled",
          },
        },
      },
      white: {
        root: {
          backgroundColor: "bg",
        },
        columnHeader: {
          color: "text",
          backgroundColor: "bg",
        },
      },
    },
    variant: {
      ghost: {
        header: {
          backgroundColor: "none",
        },
        columnHeader: {
          borderBottom: "sm",
          borderColor: "outline.disabled",
          backgroundColor: "none",
          color: "text",
        },

        cell: {
          ...numericStyles,
        },
        row: {
          borderBottom: "sm",
          borderColor: "outline.disabled",
          ...numericStyles,
        },
      },

      core: {
        root: {
          boxShadow: "0 0 0 1px var(--shadow-color)",
          shadowColor: "outline.disabled",
          borderRadius: "sm",
        },

        table: {
          overflow: "hidden",
        },
        cell: {
          ...numericStyles,

          borderRight: "sm",
          borderColor: "outline.disabled",

          _last: {
            borderRight: "none",
          },
        },

        columnHeader: {
          ...numericStyles,

          borderRight: "sm",
          borderColor: "outline.disabled",

          _first: {
            borderTopLeftRadius: "sm",
          },
          _last: {
            borderTopRightRadius: "sm",
            borderRight: "none",
          },
        },
        header: {
          borderBottom: "sm",
          borderColor: "outline.disabled",
        },
        row: {
          ...numericStyles,
          borderBottom: "sm",
          borderColor: "outline.disabled",

          _last: {
            borderBottom: "none",
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
