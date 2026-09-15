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
    variant: {
      core: {
        root: {
          boxShadow: "0 0 0 1px var(--shadow-color)",
          shadowColor: "outline.core",
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
          borderColor: "outline.core",
          backgroundColor: "surface.disabled",
        },
        row: {
          ...numericStyles,
          borderBottom: "sm",
          borderColor: "outline.core",
          "&:not(thead *):hover": {
            outline: "1px solid",
            outlineColor: "outline.core.hover",
            outlineOffset: "-1px",
            _last: {
              borderRadius: "0 0 6px 6px",
            },
          },
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
            borderLeftRadius: "sm",
          },
          _last: {
            borderRightRadius: "sm",
          },
        },
        row: {
          ...numericStyles,
          borderRadius: "sm",
          "&:not(:where([data-disable-hover] *)):hover": {
            "& td:not([data-semantic])": {
              backgroundColor: "surface.floating.hover",
            },
          },
          "&:not(thead *)": {
            boxShadow: "sm",
            outline: "1px solid",
            outlineOffset: "-1px",
            outlineColor: "outline.floating",
            _hover: {
              outlineColor: "outline.floating.hover",
            },
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
          "&:not(:where([data-disable-hover] *)):hover": {
            "& td:not([data-semantic])": {
              backgroundColor: "surface.ghost.hover",
            },
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
