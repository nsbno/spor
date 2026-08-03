"use client";
import {
  Button,
  HStack,
  RecipeVariantProps,
  Table as ChakraTable,
  TableBodyProps as ChakraTableBodyProps,
  TableCellProps as ChakraTableCellProps,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps,
  TableRootProps as ChakraTableProps,
  TableRowProps as ChakraTableRowProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import {
  ArrowDownFill18Icon,
  ArrowUpFill18Icon,
  ChangeDirectionFill18Icon,
} from "@vygruppen/spor-icon-react";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { tableSlotRecipe } from "../theme/slot-recipes/table";
import {
  applyDomSort,
  captureRowOrder,
  getColumnIndex,
  getNextSortState,
  type SortState,
} from "./sort-utils";

type TableVariantProps = RecipeVariantProps<typeof tableSlotRecipe>;

type SemanticValue =
  | "info"
  | "success"
  | "warning"
  | "notice"
  | "caution"
  | "critical";

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

const SemanticContext = createContext<{ semantic?: SemanticValue }>({
  semantic: undefined,
});

export type TableProps = Exclude<ChakraTableProps, "variant" | "colorPalette"> &
  PropsWithChildren<TableVariantProps> & {
    variant?: "ghost" | "core" | "floating";
    colorPalette?: "grey" | "green" | "white";
    sortable?: boolean;
    semantic?: SemanticValue;
    disableHover?: boolean;
    ref?: React.Ref<HTMLTableElement>;
  };

export const Table = ({
  variant = "ghost",
  size,
  colorPalette,
  children,
  sortable = false,
  semantic,
  disableHover,
  ref,
  ...rest
}: TableProps) => {
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
      {...(disableHover ? { "data-disable-hover": "" } : {})}
      {...rest}
    >
      <SemanticContext.Provider value={{ semantic }}>
        <SortContext.Provider
          value={{
            enabled: sortable,
            sortState,
            onSort: handleSort,
          }}
        >
          {children}
        </SortContext.Provider>
      </SemanticContext.Provider>
    </ChakraTable.Root>
  );
};

export type TableColumnHeaderProps = ChakraTableColumnHeaderProps & {
  ref?: React.Ref<HTMLTableCellElement>;
};

export const TableColumnHeader = ({
  children,
  ref,
  ...rest
}: TableColumnHeaderProps) => {
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
                <ArrowUpFill18Icon color="outline.focus" />
              ) : (
                <ArrowDownFill18Icon color="outline.focus" />
              )
            ) : (
              <ChangeDirectionFill18Icon
                transform="rotate(90deg)"
                color="icon.disabled"
              />
            )}
          </Button>
        )}
      </HStack>
    </ChakraTable.ColumnHeader>
  );
};

export type TableBodyProps = ChakraTableBodyProps & {
  ref?: React.Ref<HTMLTableSectionElement>;
};

export const TableBody = ({ children, ref, ...rest }: TableBodyProps) => {
  const { sortState } = useTableSort();
  const tbodyRef = useRef<HTMLTableSectionElement | null>(null);
  const originalOrder = useRef<HTMLTableRowElement[]>([]);
  const previousChildren = useRef(children);

  useLayoutEffect(() => {
    const tbody = tbodyRef.current;
    if (!tbody) return;

    if (
      previousChildren.current !== children ||
      originalOrder.current.length === 0
    ) {
      originalOrder.current = captureRowOrder(tbody);
      previousChildren.current = children;
    }

    applyDomSort(tbody, sortState, originalOrder.current);
  }, [sortState, children]);

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
};

export type TableRowProps = ChakraTableRowProps & {
  semantic?: SemanticValue;
};

export const TableRow = ({ children, semantic, ...rest }: TableRowProps) => {
  const { semantic: tableSemantic } = useContext(SemanticContext);
  const effectiveSemantic = semantic ?? tableSemantic;
  const recipe = useSlotRecipe({ key: "tableRow" });
  const styles = recipe({ semantic: effectiveSemantic });
  return (
    <ChakraTable.Row css={styles.row} {...rest}>
      {children}
    </ChakraTable.Row>
  );
};

export type TableCellProps = ChakraTableCellProps & {
  semantic?: SemanticValue;
};

export const TableCell = ({ children, semantic, ...rest }: TableCellProps) => {
  const recipe = useSlotRecipe({ key: "tableCell" });
  const styles = recipe({ semantic });
  return (
    <ChakraTable.Cell css={styles.cell} data-semantic={semantic} {...rest}>
      {children}
    </ChakraTable.Cell>
  );
};


