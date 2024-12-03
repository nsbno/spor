import { Box, BoxProps, RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { switchRecipe } from "../theme/components";

type SwitchVariants = RecipeVariantProps<typeof switchRecipe>;

export type SwitchProps = BoxProps &
  PropsWithChildren<SwitchVariants> & {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
  };

/**
 * A switch lets you toggle between on and off, yes and no. It's an alternative to a checkbox.
 *
 * You can use a Switch component inside of a `FormControl` with an associated `FormLabel`:
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Enable alerts?</FormLabel>
 *   <Switch />
 * </FormControl>
 * ```
 *
 * Switches are available in three different sizes - `sm`, `md` and `lg`.
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Enable alerts?</FormLabel>
 *   <Switch size="sm" />
 * </FormControl>
 * ```
 */
export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ colorPalette = "white", children, ...props }, ref) => {
    const recipe = useRecipe({ recipe: switchRecipe });
    const styles = recipe({ colorPalette });

    return (
      <Box css={styles} {...props} ref={ref}>
        {children}
      </Box>
    );
  },
);
