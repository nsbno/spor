export const isExpandableContentRow = (row: HTMLTableRowElement) =>
  Object.hasOwn(row.dataset, "expandableContent");

/**
 * Util method for assigning parity to rows. An expandable row takes up two <tr>s,
 * so both share the parity of the logical row
 */
export const applyRowParity = (tbody: HTMLTableSectionElement) => {
  let rowNumber = 0;
  for (const row of tbody.rows) {
    if (!isExpandableContentRow(row)) {
      rowNumber += 1;
    }
    row.dataset.rowParity = rowNumber % 2 === 0 ? "even" : "odd";
  }
};
