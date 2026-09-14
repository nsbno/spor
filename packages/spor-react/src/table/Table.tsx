"use client";
import {
  Button,
  Collapsible,
  HStack,
  RecipeVariantProps,
  Table as ChakraTable,
  TableBodyProps as ChakraTableBodyProps,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps,
  TableRootProps as ChakraTableProps,
  useSlotRecipe,
  useCollapsibleContext,
  Box,
} from "@chakra-ui/react";
import {
  ArrowDownFill18Icon,
  ArrowUpFill18Icon,
  ChangeDirectionFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Children,
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
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
    variant?: "accent" | "ghost" | "floating";
    colorPalette?: "grey" | "green" | "white";
    sortable?: boolean;
    disableHover?: boolean;
    ref?: React.Ref<HTMLTableElement>;
  };

export const Table = ({
  variant = "ghost",
  size,
  colorPalette,
  children,
  sortable = false,
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
      <SortContext.Provider
        value={{
          enabled: sortable,
          sortState,
          onSort: handleSort,
        }}
      >
        {children}
      </SortContext.Provider>
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
  ref?: React.Ref<HTMLTableRowElement>;
}>;

/**
 * A table row that can be expanded to reveal additional content underneath it.
 *
 * Renders as two `<tr>` elements: the visible row and a second row whose single
 * cell spans every column and holds the collapsible content. This avoids nesting
 * a `<tr>` inside another `<tr>`, which is invalid HTML and causes the content to
 * be pulled out into its own column by the browser.
 *
 * Use `ExpandableTableRowTrigger` inside one of the row's cells to toggle it.
 */
export const ExpandableTableRow = ({
  children,
  content,
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  ref,
}: ExpandableTableRowProps) => {
  const [isOpen, setIsOpen] = useState(openProp ?? defaultOpen);
  const columnCount = Children.count(children);

  const onToggle = () => {
    const next = !isOpen;
    onOpenChange?.(next);
    if (openProp === undefined) setIsOpen(next);
  };

  return (
    <>
      <ExpandableRowContext.Provider value={{ open: isOpen, onToggle }}>
        <ChakraTable.Row
          ref={ref}
          data-expandable-trigger
          data-state={isOpen ? "open" : "closed"}
        >
          <ChakraTable.Cell>
            <Button
              variant="ghost"
              size="xs"
              onClick={onToggle}
              aria-expanded={isOpen}
              marginInline="auto"
            >
              <DropdownDownFill24Icon
                transform={isOpen ? "rotate(180deg)" : undefined}
                transition="transform 0.2s"
              />
            </Button>
          </ChakraTable.Cell>
          {children}
        </ChakraTable.Row>
      </ExpandableRowContext.Provider>
      <ChakraTable.Row
        data-expandable-content
        data-state={isOpen ? "open" : "closed"}
      >
        {/* a background line (not a bordered child with height="100%") since percentage heights inside a <td> aren't reliably resolved across browsers (works in Chromium, not Firefox); backgroundOrigin: content-box keeps it inset by the cell's own padding automatically */}
        <ChakraTable.Cell
          css={{
            backgroundImage:
              "linear-gradient(var(--spor-colors-outline-disabled), var(--spor-colors-outline-disabled))",
            backgroundRepeat: "no-repeat",
            backgroundOrigin: "content-box",
            backgroundPosition: "center",
            backgroundSize: "2px 100%",
          }}
        />
        <ChakraTable.Cell colSpan={columnCount}>
          <Collapsible.Root open={isOpen}>
            <Collapsible.Content>{content}</Collapsible.Content>
          </Collapsible.Root>
        </ChakraTable.Cell>
      </ChakraTable.Row>
    </>
  );
};
