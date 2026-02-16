import { Children, isValidElement, type ReactNode } from "react";

export type SortDirection = "asc" | "desc";
export type SortState = {
  key: string | null;
  direction: SortDirection;
  columnIndex: number | null;
};

export const getNextSortState = (
  current: SortState,
  key: string,
  columnIndex: number,
): SortState => {
  if (current.key !== key) return { key, columnIndex, direction: "asc" };
  if (current.direction === "asc")
    return { key, columnIndex, direction: "desc" };
  return { key: null, direction: "asc", columnIndex: null }; // Initial sort state
};

export const getSortKey = (children: ReactNode) =>
  typeof children === "string" ? children.trim() : null;

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
