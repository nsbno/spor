"use client";
import {
  Button,
  Collapsible,
  HStack,
  RecipeVariantProps,
  Table as ChakraTable,
  TableBodyProps as ChakraTableBodyProps,
  TableCellProps as ChakraTableCellProps,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps,
  TableRootProps as ChakraTableProps,
  TableRowProps as ChakraTableRowProps,
  useSlotRecipe,
  useTableStyles,
} from "@chakra-ui/react";
import {
  ArrowDownFill18Icon,
  ArrowUpFill18Icon,
  ChangeDirectionFill18Icon,
  DropdownDownFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Children,
  createContext,
  PropsWithChildren,
  ReactNode,
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
  reconcileRows,
  type SortState,
} from "./sort-utils";
import { applyRowParity } from "./utils";

type TableVariantProps = RecipeVariantProps<typeof tableSlotRecipe>;

const SortContext = createContext<{
  enabled: boolean;
  sortState: SortState;
  onSort: (columnIndex: number) => void;
  dataColor?: string;
}>({
  enabled: false,
  sortState: { direction: "asc", columnIndex: null },
  onSort: () => {},
  dataColor: undefined,
});

const TableSizeContext = createContext<{ size: "lg" | "md" | "sm" }>({
  size: "md",
});

export const useTableSort = () => useContext(SortContext);
const useTableSize = () => useContext(TableSizeContext);

const RowContext = createContext<{ rowDataColor?: string }>({
  rowDataColor: undefined,
});

export type TableProps = Exclude<ChakraTableProps, "variant"> &
  PropsWithChildren<TableVariantProps> & {
    sortable?: boolean;
    disableHover?: boolean;
    ref?: React.Ref<HTMLTableElement>;
  };

export const Table = ({
  variant = "ghost",
  size = "md",
  children,
  sortable = false,
  striped = false,
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

  const dataColor = (rest as Record<string, unknown>)["data-color"] as
    | string
    | undefined;

  const recipe = useSlotRecipe({ key: "table" });
  const styles = recipe({ variant, size, striped });

  return (
    <ChakraTable.Root
      variant={variant}
      size={size}
      striped={striped}
      css={styles}
      ref={ref}
      {...(disableHover ? { "data-disable-hover": "" } : {})}
      {...rest}
    >
      <TableSizeContext.Provider
        value={{ size: typeof size === "string" ? size : "md" }}
      >
        <SortContext.Provider
          value={{
            enabled: sortable,
            sortState,
            onSort: handleSort,
            dataColor,
          }}
        >
          {children}
        </SortContext.Provider>
      </TableSizeContext.Provider>
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
      aria-sort={
        enabled
          ? sortState.direction === "asc"
            ? "ascending"
            : "descending"
          : "none"
      }
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
  const lastAppliedSortState = useRef<SortState>(sortState);

  useLayoutEffect(() => {
    const tbody = tbodyRef.current;
    if (!tbody) return;

    const sync = () => {
      observer.disconnect();
      originalOrder.current =
        sortState.columnIndex === null &&
        lastAppliedSortState.current?.columnIndex === null
          ? captureRowOrder(tbody)
          : reconcileRows(tbody, originalOrder.current);
      applyDomSort(tbody, sortState, originalOrder.current);
      applyRowParity(tbody);
      lastAppliedSortState.current = sortState;
      observer.observe(tbody, { childList: true });
    };

    const observer = new MutationObserver(sync);

    sync();

    return () => observer.disconnect();
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

const ExpandableRowContext = createContext<{
  open: boolean;
  onToggle: () => void;
}>({ open: false, onToggle: () => {} });

export const useExpandableTableRow = () => useContext(ExpandableRowContext);

export type ExpandableTableRowProps = PropsWithChildren<{
  /** Content rendered in the expanded row, spanning all columns of the table */
  content: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  "data-color"?: string;
  ref?: React.Ref<HTMLTableRowElement>;
}>;

export const ExpandableTableRow = ({
  children,
  content,
  defaultOpen = false,
  open: openProperty,
  onOpenChange,
  "data-color": rowDataColor,
  ref,
}: ExpandableTableRowProps) => {
  const styles = useTableStyles();
  const { dataColor } = useTableSort();
  const color = rowDataColor ?? dataColor;
  const [isOpen, setIsOpen] = useState(openProperty ?? defaultOpen);
  const columnCount = Children.count(children);
  const { size } = useTableSize();
  const DropdownIcon =
    size === "lg" ? DropdownDownFill24Icon : DropdownDownFill18Icon;

  const onToggle = () => {
    const next = !isOpen;
    onOpenChange?.(next);
    if (openProperty === undefined) setIsOpen(next);
  };

  return (
    <RowContext.Provider value={{ rowDataColor: color }}>
      <ExpandableRowContext.Provider value={{ open: isOpen, onToggle }}>
        <ChakraTable.Row
          ref={ref}
          data-part="expandable-trigger"
          data-state={isOpen ? "open" : "closed"}
          data-color={color}
          css={styles.expandableTrigger}
        >
          <TableCell>
            <Button
              variant="ghost"
              size="xs"
              onClick={onToggle}
              aria-expanded={isOpen}
              marginInline="auto"
            >
              <DropdownIcon
                transform={isOpen ? "rotate(180deg)" : undefined}
                transition="transform 0.2s"
              />
            </Button>
          </TableCell>
          {children}
        </ChakraTable.Row>
      </ExpandableRowContext.Provider>
      <ChakraTable.Row
        data-part="expandable-content"
        data-state={isOpen ? "open" : "closed"}
        data-color={color}
        css={styles.expandableContent}
      >
        <TableCell
          data-part="expandable-content-marker"
          css={styles.expandableContentMarker}
        />
        <TableCell colSpan={columnCount}>
          <Collapsible.Root open={isOpen}>
            <Collapsible.Content>{content}</Collapsible.Content>
          </Collapsible.Root>
        </TableCell>
      </ChakraTable.Row>
    </RowContext.Provider>
  );
};
export type TableCellProps = ChakraTableCellProps & {
  ref?: React.Ref<HTMLTableCellElement>;
};

export const TableCell = ({ children, ref, ...rest }: TableCellProps) => {
  const { dataColor } = useTableSort();
  const { rowDataColor } = useContext(RowContext);
  const { "data-color": cellDataColor, ...restWithoutDataColor } =
    rest as Record<string, unknown> & typeof rest;

  return (
    <ChakraTable.Cell
      ref={ref}
      data-color={
        (cellDataColor ?? rowDataColor ?? dataColor) as string | undefined
      }
      {...restWithoutDataColor}
    >
      {children}
    </ChakraTable.Cell>
  );
};

export type TableRowProps = ChakraTableRowProps & {
  ref?: React.Ref<HTMLTableRowElement>;
};

export const TableRow = ({ children, ref, ...rest }: TableRowProps) => {
  const { "data-color": rowDataColor, ...restWithoutDataColor } =
    rest as Record<string, unknown> & typeof rest;

  return (
    <RowContext.Provider
      value={{ rowDataColor: rowDataColor as string | undefined }}
    >
      <ChakraTable.Row
        ref={ref}
        data-color={rowDataColor as string | undefined}
        {...restWithoutDataColor}
      >
        {children}
      </ChakraTable.Row>
    </RowContext.Provider>
  );
};
