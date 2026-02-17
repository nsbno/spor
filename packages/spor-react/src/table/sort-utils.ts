import { Children, isValidElement, type ReactNode } from "react";

export type SortDirection = "asc" | "desc";
export type SortState = {
  direction: SortDirection;
  columnIndex: number | null;
};

export const getNextSortState = (
  current: SortState,
  columnIndex: number,
): SortState => {
  if (current.columnIndex !== columnIndex) return { columnIndex, direction: "asc" };
  if (current.direction === "asc") return { columnIndex, direction: "desc" };
  return { direction: "asc", columnIndex: null };
};

export const getColumnIndex = (element: HTMLElement) =>
  Array.prototype.indexOf.call(element.parentElement?.children, element);

const getCellText = (row: React.ReactElement, columnIndex: number) => {
  const cell = Children.toArray(
    (row.props as { children?: ReactNode }).children,
  )[columnIndex];
  if (!isValidElement(cell)) return "";
  const props = cell.props as Record<string, unknown>;
  return (
    (typeof props["data-sort"] === "string" && props["data-sort"]) ||
    (typeof props.children === "string" && props.children.trim()) ||
    ""
  );
};

export const sortRows = (
  children: ReactNode,
  columnIndex: number,
  direction: SortDirection,
) =>
  Children.toArray(children).toSorted((a, b) => {
    if (!isValidElement(a) || !isValidElement(b)) return 0;
    const cmp = getCellText(a, columnIndex).localeCompare(
      getCellText(b, columnIndex),
    );
    return direction === "asc" ? cmp : -cmp;
  });
