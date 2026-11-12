import { isExpandableContentRow } from "./utils";

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

const groupRows = (rows: HTMLTableRowElement[]) => {
  const groups: HTMLTableRowElement[][] = [];
  for (const row of rows) {
    if (isExpandableContentRow(row) && groups.length > 0) {
      groups.at(-1)!.push(row);
    } else {
      groups.push([row]);
    }
  }
  return groups;
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
    const groups = groupRows(Array.from(tbody.rows));
    groups.sort((a, b) => {
      const cmp = getCellSortText(a[0], sortState.columnIndex!).localeCompare(
        getCellSortText(b[0], sortState.columnIndex!),
      );
      return sortState.direction === "asc" ? cmp : -cmp;
    });
    for (const group of groups) for (const row of group) tbody.append(row);
  }
};

export const captureRowOrder = (tbody: HTMLTableSectionElement) =>
  // eslint-disable-next-line unicorn/prefer-spread -- HTMLCollectionOf is not spreadable
  Array.from(tbody.rows);

/**
 * Patches the source-order snapshot after rows are added or removed.
 *
 * Only used while sorted — the DOM is scrambled then, so recapturing it would
 * enshrine the sorted order as the original and make unsorting impossible.
 * Removed rows are dropped; new rows are appended, since their true source
 * position can't be recovered from a sorted DOM.
 */
export const reconcileRows = (
  tbody: HTMLTableSectionElement,
  previous: HTMLTableRowElement[],
) => {
  // eslint-disable-next-line unicorn/prefer-spread -- HTMLCollectionOf is not spreadable
  const current = Array.from(tbody.rows);
  const live = new Set(current);
  const known = new Set(previous);
  return [
    ...previous.filter((row) => live.has(row)),
    ...current.filter((row) => !known.has(row)),
  ];
};
