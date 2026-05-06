import type { TableProps } from "~/features/portable-text/components/TableChart";
import { TableChart } from "~/features/portable-text/components/TableChart";

type TableChartSerializerProps = {
  value: TableProps;
};

/** Renders tablechart from portable text */
export const TableChartSerializer = ({ value }: TableChartSerializerProps) => (
  <TableChart title={value.title} description={value.description}>
    {value.children}
  </TableChart>
);
