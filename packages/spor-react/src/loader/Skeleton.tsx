"use client";
import { skeletonRecipe } from "@/theme/recipes/skeleton";
import type {
  SkeletonProps as ChakraSkeletonProps,
  CircleProps,
  RecipeVariantProps,
} from "@chakra-ui/react";
import {
  Skeleton as ChakraSkeleton,
  Circle,
  Stack,
  useRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import { forwardRef } from "react";

type SkeletonVariantProps = RecipeVariantProps<typeof skeletonRecipe>;

export type SkeletonCircleProps = ChakraSkeletonProps &
  SkeletonVariantProps & {
    size?: CircleProps["size"];
  };

export const SkeletonCircle = React.forwardRef<
  HTMLDivElement,
  SkeletonCircleProps
>(function SkeletonCircle(props, ref) {
  const recipe = useRecipe({ recipe: skeletonRecipe });

  const [recipeProps, restProps] = recipe.splitVariantProps(props);

  const styles = recipe(recipeProps);

  const { size, ...rest } = restProps;

  return (
    <Circle size={size} asChild ref={ref}>
      <ChakraSkeleton {...rest} loading={false} css={styles} />
    </Circle>
  );
});

export type SkeletonTextProps = ChakraSkeletonProps &
  SkeletonVariantProps & {
    noOfLines?: number;
  };

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const recipe = useRecipe({ recipe: skeletonRecipe });

    const [recipeProps, restProps] = recipe.splitVariantProps(props);

    const styles = recipe(recipeProps);

    const { noOfLines = 3, gap, ...rest } = restProps;

    return (
      <Stack gap={gap} width="full" ref={ref}>
        {Array.from({ length: noOfLines }).map((_, index) => (
          <ChakraSkeleton
            height="0.5rem"
            css={styles}
            key={index}
            {...props}
            _last={{ maxW: "80%" }}
            {...rest}
          />
        ))}
      </Stack>
    );
  },
);

export type SkeletonProps = ChakraSkeletonProps & SkeletonVariantProps;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const recipe = useRecipe({ recipe: skeletonRecipe });

    const [recipeProps, restProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    return (
      <>
        <ChakraSkeleton {...restProps} height="6" ref={ref} css={styles} />
      </>
    );
  },
);
