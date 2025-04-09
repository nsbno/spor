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
import { CopyTokenToClipBoard } from "./CopyTokenToClipBoard";

export const OutlineTokens = () => (
  <SharedTokenLayout title="Outlines">
    <OutlineTokensTable />
  </SharedTokenLayout>
);

const OutlineTokensTable = () => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const outlineTokens = Object.entries(designTokens.tokens.size.stroke);

  return (
    <Box>
      <Table colorPalette="white">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Example</TableColumnHeader>
            <TableColumnHeader>Token</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {["", "dashed"].map((variant) =>
            outlineTokens.map(([token, value]) => {
              const tokenWithVariant = variant ? token + `-${variant}` : token;

              return (
                <TableRow key={tokenWithVariant}>
                  <TableCell>
                    <Box
                      height={8}
                      width={8}
                      borderRadius="xs"
                      border={tokenWithVariant}
                    />
                  </TableCell>
                  <TableCell>
                    <CopyTokenToClipBoard>
                      {tokenWithVariant}
                    </CopyTokenToClipBoard>
                  </TableCell>
                  <TableCell>{`${value} ${variant} (${remToPx(value)})`}</TableCell>
                </TableRow>
              );
            }),
          )}
        </TableBody>
      </Table>
    </Box>
  );
};
