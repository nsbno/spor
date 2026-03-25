import {
  SemanticsList,
  ThemeSemantic,
  useThemeSemantic,
} from "../theme/themeSemantics";
import { SystemStyleObject } from "../types";

/**
 * We cant use semantics="xxx" on TableRow directly since its a slot of Table.
 * Therefore we add css code that activates if TableRow has data-semantics="xxx"
 */
export const defineDataSemantics = (
  definitionFunction: (theme: ThemeSemantic) => SystemStyleObject,
) =>
  Object.fromEntries(
    SemanticsList.map((semantic) => {
      const themeSemantic = useThemeSemantic(semantic);
      return [
        `&[data-semantic='${semantic}']`,
        definitionFunction(themeSemantic),
      ];
    }),
  );
