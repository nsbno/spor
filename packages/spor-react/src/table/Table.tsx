import {
  Box,
  forwardRef,
  Table as ChakraTable,
  TableProps as ChakraTableProps,
} from "@chakra-ui/react";
import React from "react";

export type TableProps = Omit<ChakraTableProps, "variant" | "colorScheme"> & {
  variant?: "simple" | "outline";
  colorScheme?: "grey" | "green";
};
/**
 * These components are used the same way as in Chakra UI. Please refer to [their documentation](https://chakra-ui.com/docs/data-display/table).
 *
 * The `Table` component has support for two different variants - `simple` and `outline`. The `simple` variant has basic lines between rows, while the `outline` variant has borders for each cell, plus a hover effect per row.
 *
 * You can also specify a `grey` or `green` `colorScheme` prop. Use `green` if you want to place the table on a light green background.
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
export const Table = forwardRef<TableProps, "table">((props, ref) => {
  const { variant, size, colorScheme, children, ...rest } = props;
  return (
    <Box {...rest} {...getStyleProps(props)}>
      <Box overflowX="auto" role="region">
        <ChakraTable
          variant={variant}
          size={size}
          colorScheme={colorScheme}
          ref={ref}
        >
          {children}
        </ChakraTable>
      </Box>
    </Box>
  );
});

function getStyleProps(props: TableProps) {
  return props.variant === "outline"
    ? {
        border: "1px solid",
        borderColor: props.colorScheme === "grey" ? "silver" : "blackAlpha.200",
        overflow: "hidden",
        borderRadius: "md",
      }
    : {};
}
