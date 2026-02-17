export type SortDirection = "asc" | "desc";
export type SortState = {
  direction: SortDirection;
  columnIndex: number | null;
};

export const getNextSortState = (
  current: SortState,
  columnIndex: number,
): SortState => {
  if (current.columnIndex !== columnIndex)
    return { columnIndex, direction: "asc" };
  if (current.direction === "asc") return { columnIndex, direction: "desc" };
  return { direction: "asc", columnIndex: null };
};

export const getColumnIndex = (element: HTMLElement) =>
  Array.prototype.indexOf.call(element.parentElement?.children, element);

const getCellSortText = (row: HTMLTableRowElement, columnIndex: number) => {
  const cell = row.cells[columnIndex];
  if (!cell) return "";
  return cell.dataset.sort || cell.textContent?.trim() || "";
};

export const applyDomSort = (
  tbody: HTMLTableSectionElement,
  sortState: SortState,
  originalRows: HTMLTableRowElement[],
) => {
  if (sortState.columnIndex == null) {
    for (const row of originalRows) tbody.append(row);
  } else {
    // eslint-disable-next-line unicorn/prefer-spread -- HTMLCollectionOf is not spreadable
    const rows = Array.from(tbody.rows);
    rows.sort((a, b) => {
      const cmp = getCellSortText(a, sortState.columnIndex!).localeCompare(
        getCellSortText(b, sortState.columnIndex!),
      );
      return sortState.direction === "asc" ? cmp : -cmp;
    });
    for (const row of rows) tbody.append(row);
  }
};

export const captureRowOrder = (tbody: HTMLTableSectionElement) =>
  // eslint-disable-next-line unicorn/prefer-spread -- HTMLCollectionOf is not spreadable
  Array.from(tbody.rows);
