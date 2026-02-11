import { capitalize, keys } from "../utility";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

export const SemanticsList = [
  "alarm",
  "secondaryAlarm",
  "warning",
  "info",
  "success",
  "neutral",
  "special",
  "ghost",
] as const;

export type Semantics = (typeof SemanticsList)[number];

type ColorTheme = typeof lightTheme & typeof darkTheme;

// Behaves just the same as `theme = useTheme()`, but the values are mapped to `semantics.${key}` instead
const theme = Object.fromEntries(
  keys(lightTheme).map((key) => [key, `semantics.${key}`]),
) as { [K in keyof ColorTheme]: `semantics.${K}` };

export type ThemeSemantic = ColorTheme & {
  [K in keyof ColorTheme as K extends `${infer Prefix}${Capitalize<Semantics>}${infer Suffix}`
    ? `${Prefix}Semantic${Suffix}`
    : K]: string;
};

// Replaces "Semantic" (the string) with `semantics` (the argument) when retrieving values from `theme`
export const useThemeSemantic = (semantics: Semantics) =>
  new Proxy(theme, {
    get(target: ColorTheme, property: string) {
      return target[property.replace("Semantic", capitalize(semantics))];
    },
  }) as ThemeSemantic;
