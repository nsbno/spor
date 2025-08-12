import { attachedInputsRecipe } from "./attached-inputs";
import { badgeRecipie } from "./badge";
import { buttonRecipe } from "./button";
import { closeButtonRecipe } from "./close-button";
import { codeRecipie } from "./code";
import { groupRecipe } from "./group";
import { inputRecipe } from "./input";
import { linkRecipe } from "./link";
import { pressableCardRecipe } from "./pressable-card";
import { progressLoaderRecipe } from "./progress-loader";
import { separatorRecipe } from "./separator";
import { skeletonRecipe } from "./skeleton";
import { staticCardRecipe } from "./static-card";
import { textareaRecipe } from "./textarea";

export const recipes = {
  attachedInputs: attachedInputsRecipe,
  badge: badgeRecipie,
  button: buttonRecipe,
  buttonGroup: groupRecipe,
  closeButton: closeButtonRecipe,
  code: codeRecipie,
  input: inputRecipe,
  link: linkRecipe,
  pressableCard: pressableCardRecipe,
  progressLoader: progressLoaderRecipe,
  seperator: separatorRecipe,
  skeleton: skeletonRecipe,
  staticCard: staticCardRecipe,
  textarea: textareaRecipe,
};
