"use client";

import {
  RecipeVariantProps,
  Separator as ChakraSeparator,
  SeparatorProps as ChakraSeparatorProps,
  useRecipe,
} from "@chakra-ui/react";
import { forwardRef, PropsWithChildren } from "react";

import { separatorRecipe } from "../theme/recipes/separator";

type SeparatorVariantProps = RecipeVariantProps<typeof separatorRecipe>;

type SeparatorProps = Exclude<ChakraSeparatorProps, "size" | "variant"> &
  PropsWithChildren<SeparatorVariantProps> & {
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "dashed";
  };

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (props, ref) => {
    Separator.displayName = "Separator";
    const {
      size = "md",
      variant = "solid",
      orientation = "horizontal",
    } = props;

    const recipe = useRecipe({ recipe: separatorRecipe });
    const styles = recipe({ size, variant, orientation });
    return <ChakraSeparator css={styles} {...props} ref={ref} />;
  },
);
