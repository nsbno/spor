import { Box, BoxProps, RecipeVariantProps } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { dividerRecipe } from "../theme/components";

type DividerVariantProps = RecipeVariantProps<typeof dividerRecipe>;

export type DividerProps = PropsWithChildren<DividerVariantProps> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "dashed";
  orientation?: "horizontal" | "vertical";
};
/** A dividing line, used to divide content.
 *
 * You can specify margins if you need to give the content some space, or use a `Stack` component to do it for you
 *
 * ```tsx
 * <Divider marginTop={4} marginBottom={6} />
 * ```
 *
 * There are three different sizes available: `sm`, `md` and `lg`. The default is `md`.
 * There are two different variants available: `solid` and `dashed`. The default is `solid`.
 */
export const Divider = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box as="hr" {...props} ref={ref} />;
});
