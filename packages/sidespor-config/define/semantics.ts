import {
  SemanticsList,
  ThemeSemantic,
  useThemeSemantic,
} from "../theme/themeSemantics";
import { SystemStyleObject } from "../types";

/**
 * Example:
 *
 * --- Input looks like this ---
 * (theme) =>
 * ({
 *  backgroundColor: theme.colorSemanticFill,
 *  color: theme.colorSemanticTextMain,
 * })
 * ---------------------------------
 *
 * --- Output looks like this ---
 * {
 *  alarm: {
 *    backgroundColor: "semantics.colorAlarmFill"
 *    color: "semantics.colorAlarmTextMain"
 *  }
 *  info: {
 *    backgroundColor: "semantics.colorInfoFill"
 *    color: "semantics.colorInfoTextMain"
 *  }
 *  ...
 * }
 * ---------------------------------
 *
 * Docs: https://chakra-ui.com/docs/theming/semantic-tokens#using-in-recipes
 */
export const defineSemantics = (
  definitionFunc: (theme: ThemeSemantic) => SystemStyleObject,
) =>
  Object.fromEntries(
    SemanticsList.map((semantic) => {
      const themeSemantic = useThemeSemantic(semantic);
      return [semantic, definitionFunc(themeSemantic)];
    }),
  );
