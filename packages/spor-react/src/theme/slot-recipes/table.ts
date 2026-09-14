import { defineSlotRecipe } from "@chakra-ui/react";

import { tableAnatomy } from "./anatomy";

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "right",
  },
};

const rowHover =
  "&:not(:where([data-disable-hover] *)):not(:has(th)):not([data-expandable-content]):hover";
// hovering the expandable content row highlights its trigger row instead of itself
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
          width: "61px",
          minWidth: "61px",
          maxWidth: "61px",
          boxSizing: "border-box",
        },
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
      fontWeight: "bold",
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
      accent: {
        root: {
          boxShadow: "0 0 0 1px var(--shadow-color)",
          shadowColor: "outline",
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

          backgroundColor: "surface.accent",
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
          ...numericStyles,
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

        cell: {
          ...numericStyles,
        },
        row: {
          borderBottom: "sm",
          borderColor: "outline",
          [rowHover]: {
            backgroundColor: "surface.ghost.hover",
          },
          [triggerHoverFromContent]: {
            backgroundColor: "surface.ghost.hover",
          },
          ...numericStyles,

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
