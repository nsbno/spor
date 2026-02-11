import { defineStyle, SystemConfig } from "@vygruppen/spor-react";

export type SystemStyleObject = ReturnType<typeof defineStyle>;
type ThemingConfig = NonNullable<SystemConfig["theme"]>;
type Recipe = NonNullable<ThemingConfig["recipes"]>;
export type RecipeConfig = Recipe["key"];
type SlotRecipe = NonNullable<ThemingConfig["slotRecipes"]>;
export type SlotRecipeConfig = SlotRecipe["key"];
