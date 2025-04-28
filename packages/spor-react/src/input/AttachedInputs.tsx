"use client";

import React, { forwardRef, PropsWithChildren } from "react";
import { chakra, Group, RecipeVariantProps, useRecipe } from "@chakra-ui/react";
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
  (props, ref) => <StyledGroup ref={ref} attached {...props} />,
);
