import { defineDataSemantics } from "../define/dataSemantics";
import { defineSlotRecipe } from "../define/slotRecipe";
import { theme } from "../theme/themeSemantics";
import { SystemStyleObject } from "../types";

export const tableRecipe = defineSlotRecipe({
  base: {
    row: defineDataSemantics((theme) => ({
      backgroundColor: theme.colorSemanticFill,
    })),
  } as SystemStyleObject,
  variants: {
    variant: {
      sidespor: {
        root: {
          "&&&": { borderRadius: "6px", backgroundColor: "transparent" },
          // We need to use outline instead of border since borders don't work properly for table roots
          outlineWidth: "1px",
          outlineStyle: "solid",
          outlineColor: theme.colorOutlineDisabled,
          outlineOffset: "-1px",
        },
        columnHeader: {
          "&&&": { fontSize: "mobile.sm" },
          backgroundColor: "var(--spor-colors-bg-tertiary)",
          _first: { borderTopLeftRadius: "6px" },
          _last: { borderTopRightRadius: "6px" },
          padding: "9px 18px",
        },
        row: {
          // We need to use boxShadow instead of border in order to position it inside the table
          borderBottom: `sm`,
          borderColor: theme.colorOutlineDisabled,
          // You can't put borderRadius on rows, so we need to target the cells
          _last: {
            borderBottom: "none",
            "& td:first-of-type": { borderBottomLeftRadius: "6px" },
            "& td:last-of-type": { borderBottomRightRadius: "6px" },
          },
        },
        cell: {
          backgroundColor: "inherit", // Having both the row and cell be the row color helps prevent subpixel gaps
          "&&&": { fontSize: "mobile.sm" },
          padding: "9px 18px",
        },
      } as SystemStyleObject,
      card: {
        root: {
          "&&&": { backgroundColor: "transparent" },
          borderSpacing: "0px 6px",
          borderCollapse: "separate",
          transform: "translate3d(0, 0, 0)",
        },
        columnHeader: {
          backgroundColor: "var(--spor-colors-bg-tertiary)",
          "&:first-of-type": { borderLeftRadius: "6px" },
          "&:last-of-type": { borderRightRadius: "6px" },
          padding: "9px 18px",
        },
        row: {
          backgroundColor: "var(--spor-colors-bg-tertiary)",
        },
        cell: {
          backgroundColor: "inherit", // Having both the row and cell be the row color helps prevent subpixel gaps
          "&:first-of-type": { borderLeftRadius: "6px" },
          "&:last-of-type": { borderRightRadius: "6px" },
          padding: "9px 18px",
        },
      } as SystemStyleObject,
    },
  },
});
