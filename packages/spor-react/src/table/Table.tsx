"use client";
import {
  RecipeVariantProps,
  Table as ChakraTable,
  TableRootProps as ChakraTableProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import { forwardRef, PropsWithChildren } from "react";

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
  const { variant = "ghost", size, colorPalette = "green", children } = props;

  const recipe = useSlotRecipe({ recipe: tableSlotRecipe });
  const styles = recipe({ variant, size });
  return (
    <ChakraTable.Root
      variant={variant}
      size={size}
      colorPalette={colorPalette}
      css={styles}
      ref={ref}
      {...props}
    >
      {children}
    </ChakraTable.Root>
  );
});
Table.displayName = "Table";
