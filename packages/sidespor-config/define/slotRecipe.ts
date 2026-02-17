import { RecipeConfig, SlotRecipeConfig } from "../types";

export const defineSlotRecipe = (recipe: RecipeConfig) =>
  recipe as SlotRecipeConfig;
