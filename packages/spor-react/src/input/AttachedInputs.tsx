"use client";

import {
  chakra,
  Group,
  GroupProps,
  RecipeVariantProps,
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

const StyledGroup = chakra(Group, attachedInputsRecipe);

export const AttachedInputs = forwardRef<HTMLDivElement, AttachedInputsProps>(
  (props, ref) => {
    return <StyledGroup ref={ref} attached {...props} />;
  },
);
AttachedInputs.displayName = "AttachedInputs";
