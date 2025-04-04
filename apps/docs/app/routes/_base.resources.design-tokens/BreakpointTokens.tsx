import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";
import { remToPx, useDesignTokens } from "./utils";

export const BreakpointTokens = () => (
  <SharedTokenLayout title="Breakpoints">
    <BreakpointTokensTable />
  </SharedTokenLayout>
);

const BreakpointTokensTable = () => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const breakpointTokens = Object.entries(designTokens.tokens.size.breakpoint);
  return (
    <Box>
      <Table colorPalette="white">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Token</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {breakpointTokens.map(([token, value]): any => (
            <TableRow key={token}>
              <TableCell>{token}</TableCell>

              <TableCell>
                {remToPx(value)} / {value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
