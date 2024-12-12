"use client";
import {
  Box,
  Table as ChakraTable,
  TableRootProps as ChakraTableProps,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { tableSlotRecipe } from "../theme/slot-recipes/table";

type TableVariantProps = RecipeVariantProps<typeof tableSlotRecipe>;

export type TableProps = Exclude<ChakraTableProps, "variant" | "colorPalette"> &
  PropsWithChildren<TableVariantProps> & {
    variant?: "line" | "outline";
    colorPalette?: "grey" | "green";
  };
/**
 * These components are used the same way as in Chakra UI. Please refer to [their documentation](https://chakra-ui.com/docs/data-display/table).
 *
 * The `Table` component has support for two different variants - `line` and `outline`. The `line` variant has basic lines between rows, while the `outline` variant has borders for each cell, plus a hover effect per row.
 *
 * You can also specify a `grey` or `green` `colorPalette` prop. Use `green` if you want to place the table on a light green background.
 *
 * Finally, there are three different `size` props you can specify - `sm`, `md` and `lg`.
 *
 * ```tsx
 * <Table variant="outlined" size="lg">
 *   <Thead>
 *    ...
 *   </Thead>
 *   ...
 * </Table>
 * ```
 */
export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { variant, size, colorPalette, children, ...rest } = props;

  const recipe = useSlotRecipe({ recipe: tableSlotRecipe });
  const styles = recipe({ variant, colorPalette, size });
  return (
    <Box {...getStyleProps(props)}>
      <Box overflowX="auto" role="region">
        <ChakraTable.Root
          variant={variant}
          size={size}
          colorPalette={colorPalette}
          css={styles}
          ref={ref}
          {...rest}
        >
          {children}
        </ChakraTable.Root>
      </Box>
    </Box>
  );
});

function getStyleProps(props: TableProps) {
  return props.variant === "outline"
    ? {
        border: "1px solid",
        borderColor:
          props.colorPalette === "grey" ? "silver" : "blackAlpha.200",
        overflow: "hidden",
        borderRadius: "md",
      }
    : {};
}
