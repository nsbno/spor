"use client";
import {
  RecipeVariantProps,
  useRecipe,
  Separator as ChakraSeparator,
  SeparatorProps as ChakraSeparatorProps,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { separatorRecipe } from "../theme/recipes/separator";

type SeparatorVariantProps = RecipeVariantProps<typeof separatorRecipe>;

type SeparatorProps = ChakraSeparatorProps &
  PropsWithChildren<SeparatorVariantProps>;

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (props, ref) => {
    const recipe = useRecipe({ recipe: separatorRecipe });
    const styles = recipe({});
    return <ChakraSeparator css={styles} {...props} ref={ref} />;
  },
);
