"use client";

import {
  Group,
  GroupProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";

import { attachedInputsRecipe } from "@/theme/recipes/attached-inputs";

/**
 * Attaches several inputs together, so that they look like one input.
 *
 * ```tsx
 * <AttachedInputs>
 *   <Input />
 *   <NativeSelect>
 *     <Item />
 *   </NativeSelect>
 * </AttachedInputs>
 * ```
 */

export type AttachedInputsProps = RecipeVariantProps<
  typeof attachedInputsRecipe
> &
  GroupProps;

export const AttachedInputs = ({
  ref,
  ...props
}: AttachedInputsProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const recipe = useRecipe({ key: "attachedInputs" });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <Group ref={ref} css={styles} attached isolation="auto" {...restProps} />
  );
};
AttachedInputs.displayName = "AttachedInputs";
