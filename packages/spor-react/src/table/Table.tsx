"use client";
import {
  Table as ChakraTable,
  TableBodyProps as ChakraTableBodyProps,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps,
  TableRootProps as ChakraTableProps,
  TableRowProps as ChakraTableRowProps,
  HStack,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import {
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
} from "@vygruppen/spor-icon-react";
import {
  createContext,
  forwardRef,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

import { tableSlotRecipe } from "../theme/slot-recipes/table";
import {
  getColumnIndex,
  getNextSortState,
  getSortKey,
  sortRows,
  type SortState,
} from "./sort-utils";

type TableVariantProps = RecipeVariantProps<typeof tableSlotRecipe>;

const SortContext = createContext<{
  enabled: boolean;
  sortState: SortState;
  onSort: (key: string, columnIndex: number) => void;
}>({
  enabled: false,
  sortState: { key: null, direction: "asc", columnIndex: null },
  onSort: () => {},
});

export const useTableSort = () => useContext(SortContext);

export type TableProps = Exclude<ChakraTableProps, "variant" | "colorPalette"> &
  PropsWithChildren<TableVariantProps> & {
    variant?: "ghost" | "core";
    colorPalette?: "grey" | "green" | "white";
    sortable?: boolean;
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
export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      variant = "ghost",
      size,
      colorPalette = "green",
      children,
      sortable = false,
      ...rest
    },
    ref,
  ) => {
    <Table></Table>;
    const [sortState, setSortState] = useState<SortState>({
      key: null,
      direction: "asc",
      columnIndex: null,
    });

    const handleSort = (key: string, columnIndex: number) => {
      if (!sortable) return;
      setSortState(getNextSortState(sortState, key, columnIndex));
    };

    const recipe = useSlotRecipe({ key: "table" });
    const styles = recipe({ variant, size });

    return (
      <ChakraTable.Root
        variant={variant}
        size={size}
        colorPalette={colorPalette}
        css={styles}
        ref={ref}
        {...rest}
      >
        <SortContext.Provider
          value={{ enabled: sortable, sortState, onSort: handleSort }}
        >
          {children}
        </SortContext.Provider>
      </ChakraTable.Root>
    );
  },
);
Table.displayName = "Table";

export type TableColumnHeaderProps = ChakraTableColumnHeaderProps;

export const TableColumnHeader = forwardRef<
  HTMLTableCellElement,
  TableColumnHeaderProps
>(({ children, onClick, ...rest }, ref) => {
  const { enabled, sortState, onSort } = useTableSort();
  const key = getSortKey(children);
  const isActive = enabled && key != null && key === sortState.key;

  return (
    <ChakraTable.ColumnHeader
      ref={ref}
      onClick={(event) => {
        if (enabled && key) {
          onSort(key, getColumnIndex(event.currentTarget));
        }
        onClick?.(event);
      }}
      cursor={enabled && key ? "pointer" : undefined}
      {...rest}
    >
      <HStack>
        {children}
        {isActive &&
          (sortState.direction === "asc" ? (
            <DropdownUpFill18Icon />
          ) : (
            <DropdownDownFill18Icon />
          ))}
      </HStack>
    </ChakraTable.ColumnHeader>
  );
});
TableColumnHeader.displayName = "ColumnHeader";

export type TableRowProps = ChakraTableRowProps;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => <ChakraTable.Row ref={ref} {...props} />,
);
TableRow.displayName = "TableRow";

export type TableBodyProps = ChakraTableBodyProps;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...rest }, ref) => {
    const { sortState } = useTableSort();

    const sorted = useMemo(
      () =>
        sortState.columnIndex == null
          ? children
          : sortRows(children, sortState.columnIndex, sortState.direction),
      [children, sortState],
    );

    return (
      <ChakraTable.Body ref={ref} {...rest}>
        {sorted}
      </ChakraTable.Body>
    );
  },
);
TableBody.displayName = "TableBody";
