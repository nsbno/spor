import {
  As,
  forwardRef,
  TableProps as ChakraTableProps,
} from "@chakra-ui/react";
import React from "react";

export type TableProps = ChakraTableProps;
export const Table = forwardRef<TableProps, As<any>>((props, ref) => {
  return <Table {...props} ref={ref} />;
});
