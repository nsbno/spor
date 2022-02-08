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
export const Table = forwardRef<TableProps, "table">((props, ref) => {
  const { variant, size, colorScheme, children, ...rest } = props;
  return (
    <Box {...rest} {...getStyleProps(props)}>
      <ChakraTable
        variant={variant}
        size={size}
        colorScheme={colorScheme}
        ref={ref}
      >
        {children}
      </ChakraTable>
    </Box>
  );
});

function getStyleProps(props: TableProps) {
  return props.variant === "outline"
    ? {
        border: "1px solid",
        borderColor:
          props.colorScheme === "grey"
            ? "alias.silver"
            : "palette.blackAlpha.200",
        overflow: "hidden",
        borderRadius: "md",
      }
    : {};
}
