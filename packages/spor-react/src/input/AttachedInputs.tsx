"use client";

import { chakra, Group, RecipeVariantProps } from "@chakra-ui/react";
import { forwardRef } from "react";

import { attachedInputsRecipe } from "@/theme/recipes/attached-inputs";

import { InputGroupProps } from "./InputGroup";

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
  InputGroupProps;

const StyledGroup = chakra(Group, attachedInputsRecipe);

export const AttachedInputs = forwardRef<HTMLDivElement, AttachedInputsProps>(
  (props, ref) => {
    return <StyledGroup ref={ref} attached {...props} />;
  },
);
AttachedInputs.displayName = "AttachedInputs";
