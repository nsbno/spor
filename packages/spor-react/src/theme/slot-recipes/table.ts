import { defineSlotRecipe } from "@chakra-ui/react";

import { tableAnatomy } from "./anatomy";

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "right",
  },
};

const rowHover =
  "&:not(:where([data-disable-hover] *)):not(:has(th)):not([data-expandable-content]):hover";

const triggerHoverFromContent =
  "&[data-expandable-trigger]:not(:where([data-disable-hover] *)):has(+ tr[data-expandable-content]:hover)";

export const tableSlotRecipe = defineSlotRecipe({
  className: "spor-table",
  slots: tableAnatomy.keys(),
  base: {
    root: {
      tableLayout: "fixed",
      borderCollapse: "collapse",
      width: "100%",
      minWidth: "36rem",

      "&:has(tbody tr[data-expandable-trigger]) :is(thead th, tbody td):first-child":
        {
          "--table-toggle-width": "54px",
          width: "var(--table-toggle-width)",
          minWidth: "var(--table-toggle-width)",
          maxWidth: "var(--table-toggle-width)",
          boxSizing: "border-box",
          paddingInline: 0,
        },
    },
    columnHeader: {
      fontWeight: "bold",
      textAlign: "start",

      ...numericStyles,
    },
    row: {
      ...numericStyles,
      "&[data-expandable-content][data-state=open] td": {
        paddingBlock: 2,
      },
    },
    cell: {
      ...numericStyles,

      "&[data-expandable-content-marker]": {
        backgroundImage:
          "linear-gradient(var(--spor-colors-outline-disabled), var(--spor-colors-outline-disabled))",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "content-box",
        backgroundPosition: "center",
        backgroundSize: "2px 100%",
      },
    },

    footer: {
      fontWeight: "bold",
    },
  },

  variants: {
    striped: {
      true: {
        row: {
          '&[data-row-parity="even"]:not([data-expandable-content]) td': {
            backgroundColor: "surface.disabled",
          },
        },
      },
      false: {},
    },
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
      accent: {
        root: {
          boxShadow: "0 0 0 1px var(--shadow-color)",
          shadowColor: "outline",
          borderRadius: "xs",
        },

        columnHeader: {
          backgroundColor: "surface.accent",
          color: "text.accent",
          _first: {
            borderTopLeftRadius: "xs",
          },
          _last: {
            borderTopRightRadius: "xs",
          },
        },
        header: {
          borderBottom: "sm",
          borderColor: "outline",
        },
        row: {
          borderBottom: "sm",
          borderColor: "outline",

          [`${rowHover} td`]: {
            backgroundColor: "surface.accent.hover",
          },

          [`${triggerHoverFromContent} td`]: {
            backgroundColor: "surface.accent.hover",
          },

          "&:last-child:not(:where(tbody:has(+ tfoot) *))": {
            borderBottom: "none",

            "& td:first-child": {
              borderBottomLeftRadius: "xs",
            },
            "& td:last-child": {
              borderBottomRightRadius: "xs",
            },
          },

          '&[data-expandable-trigger][data-state="closed"]:nth-last-child(2):not(:where(tbody:has(+ tfoot) *))':
            {
              borderBottom: "none",

              "& td:first-child": {
                borderBottomLeftRadius: "xs",
              },
              "& td:last-child": {
                borderBottomRightRadius: "xs",
              },
            },

          '&[data-expandable-trigger][data-state="open"]': {
            borderColor: "outline.disabled",
          },

          '&[data-expandable-content][data-state="open"]': {
            borderTop: "none",
          },

          '&[data-expandable-content][data-state="closed"]': {
            border: "none",
            py: 0,

            "& td": {
              py: 0,
              borderWidth: "0",
            },
          },
        },
        footer: {
          borderTopWidth: "2px",
          borderColor: "outline",
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
          borderStyle: "solid",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "outline.floating",
          _first: {
            borderLeftRadius: "xs",
            borderLeftWidth: 1,
          },
          _last: {
            borderRightRadius: "xs",
            borderRightWidth: 1,
          },
        },
        row: {
          [`${rowHover} td`]: {
            backgroundColor: "surface.floating.hover",
            borderColor: "outline.floating.hover",
          },

          [`${triggerHoverFromContent} td`]: {
            backgroundColor: "surface.floating.hover",
            borderColor: "outline.floating.hover",
          },

          "&:not(:has(th))": {
            borderRadius: "xs",
          },

          '&[data-expandable-trigger][data-state="open"] td': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },

          '&[data-expandable-content][data-state="open"] td': {
            borderTop: "none",
            borderTopRadius: 0,
            position: "relative",
            top: "-6px",
          },

          '&[data-expandable-content][data-state="closed"] td': {
            border: "none",
            py: 0,
          },
        },
      },
      ghost: {
        header: {
          backgroundColor: "transparent",
        },
        columnHeader: {
          borderBottom: "sm",
          borderColor: "outline",
          backgroundColor: "none",
          color: "text",
        },

        row: {
          borderBottom: "sm",
          borderColor: "outline",
          [`${rowHover} td`]: {
            backgroundColor: "surface.ghost.hover",
          },
          [`${triggerHoverFromContent} td`]: {
            backgroundColor: "surface.ghost.hover",
          },

          '&[data-expandable-trigger][data-state="open"]': {
            borderColor: "outline.disabled",
          },

          '&[data-expandable-content][data-state="open"]': {
            borderTop: "none",
          },

          '&[data-expandable-content][data-state="closed"]': {
            border: "none",
            py: 0,

            "& td": {
              py: 0,
              borderWidth: "0",
            },
          },
        },

        footer: {
          "& tr": {
            borderBottom: "none",
          },
        },
      },
    },

    size: {
      sm: {
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
        root: {
          "&:has(tbody tr[data-expandable-trigger]) :is(thead th, tbody td):first-child":
            {
              "--table-toggle-width": "66px",
              width: "var(--table-toggle-width)",
              minWidth: "var(--table-toggle-width)",
              maxWidth: "var(--table-toggle-width)",
              boxSizing: "border-box",
            },
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
