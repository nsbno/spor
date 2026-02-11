import {
  Semantics,
  SemanticsList,
  ThemeSemantic,
  useThemeSemantic,
} from "../theme/themeSemantics";
import { SystemStyleObject } from "../types";

export const defineCompounds = (
  definitionFunction: (
    theme: ThemeSemantic,
    semantic: Semantics,
  ) => { css: SystemStyleObject },
) =>
  SemanticsList.map((semantic) => {
    const themeSemantic = useThemeSemantic(semantic);
    return definitionFunction(themeSemantic, semantic);
  });
