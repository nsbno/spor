"use client";

import {
  Group,
  GroupProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import { forwardRef } from "react";

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

export const AttachedInputs = forwardRef<HTMLDivElement, AttachedInputsProps>(
  (props, ref) => {
    const recipe = useRecipe({ key: "attachedInputs" });
    const [recipeProps, restProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    return (
      <Group ref={ref} css={styles} attached isolation="auto" {...restProps} />
    );
  },
);
AttachedInputs.displayName = "AttachedInputs";
