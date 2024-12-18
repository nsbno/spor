"use client";

import React, { forwardRef, PropsWithChildren } from "react";
import { InputGroupProps } from "..";
import {
  defineStyle,
  Group,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import { attachedInputsRecipe } from "@/theme/recipes/attached-inputs";

type AttachedInputsVariantProps = RecipeVariantProps<
  typeof attachedInputsRecipe
>;

type AttachedInputsProps = Exclude<InputGroupProps, "orientation"> &
  PropsWithChildren<AttachedInputsVariantProps> & {
    orientation?: "horizontal" | "vertical";
  };
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

export const AttachedInputs = forwardRef<HTMLDivElement, AttachedInputsProps>(
  (props, ref) => {
    const { orientation = "horizontal", children } = props;

    const recipe = useRecipe({ key: "attachedInputs" });
    const styles = recipe({ orientation });

    return (
      <Group ref={ref} attached css={styles}>
        {children}
      </Group>
    );
  },
);
