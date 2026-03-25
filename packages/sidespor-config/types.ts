import { defineStyle, SystemConfig } from "@vygruppen/spor-react";

export type SystemStyleObject = ReturnType<typeof defineStyle>;
type ThemingConfig = NonNullable<SystemConfig["theme"]>;
type Recipe = NonNullable<ThemingConfig["recipes"]>;
export type RecipeConfig = Recipe["key"];
type SlotRecipe = NonNullable<ThemingConfig["slotRecipes"]>;
export type SlotRecipeConfig = SlotRecipe["key"];

export interface DefaultTheme {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Grey {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
  "1000": string;
  "1100": string;
}
export interface WhiteAlpha {
  "25": string;
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}
