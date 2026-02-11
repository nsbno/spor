import { defineDataSemantics } from "../define/dataSemantics";
import { defineSlotRecipe } from "../define/slotRecipe";
import { SystemStyleObject } from "../types";

export const tableRecipe = defineSlotRecipe({
  base: {
    row: defineDataSemantics((theme) => ({
      backgroundColor: theme.colorSemanticFill,
    })),
  } as SystemStyleObject,
  variants: {
    variant: {
      gap: {
        root: {
          "&&&": { backgroundColor: "transparent" },
          borderSpacing: "0 6px",
          borderCollapse: "separate",
        },
        columnHeader: {
          backgroundColor: "var(--spor-colors-bg-tertiary)",
          "&:first-of-type": { borderLeftRadius: "6px" },
          "&:last-of-type": { borderRightRadius: "6px" },
          padding: "9px 18px",
        },
        row: {
          backgroundColor: "var(--spor-colors-bg)",
        },
        cell: {
          "&:first-of-type": { borderLeftRadius: "6px" },
          "&:last-of-type": { borderRightRadius: "6px" },
          padding: "9px 18px",
        },
      } as SystemStyleObject,
    },
  },
});
