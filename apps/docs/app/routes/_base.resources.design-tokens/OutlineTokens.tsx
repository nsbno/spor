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
            <TableColumnHeader>Variable</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {["", "dashed"].map((variant) =>
            outlineTokens.map(([variable, value]) => {
              const variableWithVariant = variant
                ? variable + `-${variant}`
                : variable;

              return (
                <TableRow key={variableWithVariant}>
                  <TableCell>
                    <Box
                      height={8}
                      width={8}
                      borderRadius="xs"
                      border={variableWithVariant}
                    />
                  </TableCell>
                  <TableCell>{variableWithVariant}</TableCell>
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
