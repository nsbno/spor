"use client";
import type {
  CircleProps,
  RecipeVariantProps,
  SkeletonProps as ChakraSkeletonProps,
} from "@chakra-ui/react";
import {
  Circle,
  Skeleton as ChakraSkeleton,
  Stack,
  useRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import { forwardRef } from "react";

import { skeletonRecipe } from "@/theme/recipes/skeleton";

type SkeletonVariantProps = RecipeVariantProps<typeof skeletonRecipe>;

export type SkeletonCircleProps = ChakraSkeletonProps &
  SkeletonVariantProps & {
    size?: CircleProps["size"];
  };

export const SkeletonCircle = function SkeletonCircle({
  ref,
  ...props
}: SkeletonCircleProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) {
  const recipe = useRecipe({ key: "skeleton" });

  const [recipeProps, restProps] = recipe.splitVariantProps({
    loading: true,
    variant: "pulse",
    ...props,
  });

  const { size, css, ...rest } = restProps;

  return (
    <Circle size={size} asChild ref={ref}>
      <ChakraSkeleton css={{ ...recipe(recipeProps), ...css }} {...rest} />
    </Circle>
  );
};

export type SkeletonTextProps = ChakraSkeletonProps &
  SkeletonVariantProps & {
    noOfLines?: number;
  };

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const recipe = useRecipe({ key: "skeleton" });
    const [recipeProps, restProps] = recipe.splitVariantProps({
      loading: true,
      variant: "pulse",
      ...props,
    });
    const { noOfLines = 3, height = "0.5rem", gap, css, ...rest } = restProps;

    return (
      <Stack gap={gap} width="full" ref={ref}>
        {Array.from({ length: noOfLines }).map((_, index) => (
          <ChakraSkeleton
            height={height}
            css={{ ...recipe(recipeProps), ...css }}
            key={index}
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
    const recipe = useRecipe({ key: "skeleton" });
    const [recipeProps, restProps] = recipe.splitVariantProps({
      loading: true,
      variant: "pulse",
      ...props,
    });

    const { css, ...rest } = restProps;

    return (
      <ChakraSkeleton
        ref={ref}
        css={{ ...recipe(recipeProps), ...css }}
        {...rest}
      />
    );
  },
);
