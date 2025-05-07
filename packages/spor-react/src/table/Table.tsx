"use client";
import {
  Box,
  RecipeVariantProps,
  Table as ChakraTable,
  TableRootProps as ChakraTableProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";

import { tableSlotRecipe } from "../theme/slot-recipes/table";

type TableVariantProps = RecipeVariantProps<typeof tableSlotRecipe>;

export type TableProps = Exclude<ChakraTableProps, "variant" | "colorPalette"> &
  PropsWithChildren<TableVariantProps> & {
    variant?: "ghost" | "core";
    colorPalette?: "grey" | "green" | "white";
  };
/**
 * The `Table` component has support for two different variants - `ghost` and `core`. The `ghost` variant has basic lines between rows, while the `core` variant has borders for each cell.
 *
 * You can also specify a `grey` or `green` `colorPalette` prop. Use `green` if you want to place the table on a light green background.
 *
 * Finally, there are three different `size` props you can specify - `sm`, `md` and `lg`.
 *
 * ```tsx
 * <Table variant="core" size="lg">
 *   <Thead>
 *    ...
 *   </Thead>
 *   ...
 * </Table>
 * ```
 */
export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  Table.displayName = "Table";
  const { variant = "ghost", size, colorPalette = "green", children } = props;

  const recipe = useSlotRecipe({ recipe: tableSlotRecipe });
  const styles = recipe({ variant, size });
  return (
    <Box overflowX="auto" role="region" {...getStyleProps(props)} {...props}>
      <ChakraTable.Root
        variant={variant}
        size={size}
        colorPalette={colorPalette}
        css={styles}
        ref={ref}
      >
        {children}
      </ChakraTable.Root>
    </Box>
  );
});

function getStyleProps(props: TableProps) {
  return props.variant === "core"
    ? {
        borderRadius: "sm",
        border: "sm",
        borderColor: "outline.disabled",
      }
    : {};
}
