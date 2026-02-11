import { defineSemantics } from "../define/semantics";
import { defineSlotRecipe } from "../define/slotRecipe";
import { SystemStyleObject } from "../mergeSystemConfig";

export const dialogRecipe = defineSlotRecipe({
  variants: {
    semantic: defineSemantics((theme) => ({
      content: {
        backgroundColor: theme.colorSemanticFillPulse,
        borderColor: theme.colorSemanticOutline,
        borderWidth: "1px",
      } as SystemStyleObject,
      body: {
        backgroundColor: theme.colorSemanticFill,
        borderColor: theme.colorSemanticOutline,
        borderWidth: "1px",
      },
    })),
  },
});
