"use client";
import {
  Button,
  HStack,
  RecipeVariantProps,
  Table as ChakraTable,
  TableBodyProps as ChakraTableBodyProps,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps,
  TableRootProps as ChakraTableProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import {
  ArrowDownFill18Icon,
  ArrowUpFill18Icon,
  ChangeDirectionFill18Icon,
} from "@vygruppen/spor-icon-react";
import {
  createContext,
  forwardRef,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { tableSlotRecipe } from "../theme/slot-recipes/table";
import {
  getColumnIndex,
  getNextSortState,
  sortDomRows,
  type SortState,
} from "./sort-utils";

type TableVariantProps = RecipeVariantProps<typeof tableSlotRecipe>;

const SortContext = createContext<{
  enabled: boolean;
  sortState: SortState;
  onSort: (columnIndex: number) => void;
}>({
  enabled: false,
  sortState: { direction: "asc", columnIndex: null },
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
    const [sortState, setSortState] = useState<SortState>({
      direction: "asc",
      columnIndex: null,
    });

    const handleSort = (columnIndex: number) => {
      if (!sortable) return;
      setSortState(getNextSortState(sortState, columnIndex));
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
>(({ children, ...rest }, ref) => {
  const { enabled, sortState, onSort } = useTableSort();
  const [columnIndex, setColumnIndex] = useState<number | null>(null);
  const props = rest as Record<string, unknown>;
  const columnSortable = enabled && !("data-nosort" in props);
  const isActive =
    columnSortable &&
    columnIndex != null &&
    columnIndex === sortState.columnIndex;

  return (
    <ChakraTable.ColumnHeader
      ref={(element: HTMLTableCellElement) => {
        if (element) setColumnIndex(getColumnIndex(element));
        if (typeof ref === "function") ref(element);
        else if (ref) ref.current = element;
      }}
      {...rest}
    >
      <HStack>
        {children}
        {columnSortable && columnIndex != null && (
          <Button
            variant="ghost"
            onClick={() => onSort(columnIndex)}
            p="0px !important"
            size="xs"
          >
            {isActive ? (
              sortState.direction === "asc" ? (
                // eslint-disable-next-line spor/use-semantic-tokens
                <ArrowUpFill18Icon color="var(--spor-colors-outline-focus)" />
              ) : (
                // eslint-disable-next-line spor/use-semantic-tokens
                <ArrowDownFill18Icon color="var(--spor-colors-outline-focus)" />
              )
            ) : (
              <ChangeDirectionFill18Icon
                transform="rotate(90deg)"
                // eslint-disable-next-line spor/use-semantic-tokens
                color="var(--spor-colors-icon-disabled)"
              />
            )}
          </Button>
        )}
      </HStack>
    </ChakraTable.ColumnHeader>
  );
});
TableColumnHeader.displayName = "ColumnHeader";

export type TableBodyProps = ChakraTableBodyProps;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...rest }, ref) => {
    const { sortState } = useTableSort();
    const tbodyRef = useRef<HTMLTableSectionElement | null>(null);

    useLayoutEffect(() => {
      if (tbodyRef.current && sortState.columnIndex != null) {
        sortDomRows(
          tbodyRef.current,
          sortState.columnIndex,
          sortState.direction,
        );
      }
    }, [sortState]);

    return (
      <ChakraTable.Body
        ref={(element: HTMLTableSectionElement) => {
          tbodyRef.current = element;
          if (typeof ref === "function") ref(element);
          else if (ref) ref.current = element;
        }}
        {...rest}
      >
        {children}
      </ChakraTable.Body>
    );
  },
);
TableBody.displayName = "TableBody";
