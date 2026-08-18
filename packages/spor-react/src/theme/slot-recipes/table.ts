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
      overflow: "hidden",
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
    },
    footer: {
      fontWeight: "medium",
    },
  },

  variants: {
    colorPalette: {
      green: {
        header: {
          backgroundColor: "bg.brand",
        },
        columnHeader: {
          color: "text.highlight",
        },
      },
      grey: {
        columnHeader: {
          backgroundColor: "surface.disabled",
          _hover: {
            backgroundColor: "surface.disabled",
          },
        },
      },
      white: {
        columnHeader: {
          color: "text",
        },
      },
    },
    variant: {
      core: {
        root: {
          boxShadow: "0 0 0 1px var(--shadow-color)",
          shadowColor: "outline.disabled",
          borderRadius: "xs",
        },

        table: {
          overflow: "hidden",
        },
        cell: {
          ...numericStyles,
        },

        columnHeader: {
          ...numericStyles,
        },
        header: {
          borderBottom: "sm",
          borderColor: "outline.disabled",
          backgroundColor: "surface.disabled",
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
      floating: {
        root: {
          borderCollapse: "separate",
          borderSpacing: "0 6px",
        },
        columnHeader: {
          backgroundColor: "none",
        },
        header: {
          backgroundColor: "none",
        },
        cell: {
          backgroundColor: "surface.floating",
          _first: {
            borderLeftRadius: "xs",
          },
          _last: {
            borderRightRadius: "xs",
          },
        },
        row: {
          borderRadius: "sm",
          "&:not(:where([data-disable-hover] *)):not(:has(th)):hover": {
            backgroundColor: "surface.floating.hover",
          },
        },
      },
      ghost: {
        header: {
          backgroundColor: "transparent",
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
          "&:not(:where([data-disable-hover] *)):not(:has(th)):hover": {
            backgroundColor: "surface.ghost.hover",
          },
          ...numericStyles,
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
