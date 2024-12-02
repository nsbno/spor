import { Box, BoxProps, RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { dividerRecipe } from "../theme/components";

type DividerVariantProps = RecipeVariantProps<typeof dividerRecipe>;

export type DividerProps = PropsWithChildren<DividerVariantProps> &
  BoxProps & {
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
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      size = "md",
      variant = "solid",
      orientation = "horizontal",
    } = props;
    const recipe = useRecipe({ recipe: dividerRecipe });
    const styles = recipe({ size, variant, orientation });
    return <Box as="hr" css={styles} {...props} ref={ref} />;
  },
);
