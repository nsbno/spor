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
import { useDesignTokens } from "./utils";
import { CopyTokenToClipBoard } from "./CopyTokenToClipBoard";

export const ZIndexTokens = () => {
  return (
    <SharedTokenLayout title="Z-index">
      <ZIndexTokensTable />
    </SharedTokenLayout>
  );
};

const ZIndexTokensTable = () => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const zIndexTokens = Object.entries(designTokens.tokens.depth["z-index"]);

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
          {zIndexTokens.map(([token, value]) => (
            <TableRow key={token}>
              <TableCell>
                <CopyTokenToClipBoard>{token}</CopyTokenToClipBoard>
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
