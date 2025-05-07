import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  Text,
} from "@vygruppen/spor-react";

import { CopyTokenToClipBoard } from "./CopyTokenToClipBoard";
import { SharedTokenLayout } from "./SharedTokenLayout";
import { remToPx, useDesignTokens } from "./utils";

export const RoundingTokens = () => (
  <SharedTokenLayout
    title="Rounding"
    description={
      <Text>
        The rounding follows the size of the component. Small components have
        small rounding, and large components have larger rounding. All
        components that consist of a &apos;box/card&apos; have rounding. We
        rarely use completely square components (0 px rounding). An easy way to
        determine which rounding you should use is to follow the rule of thumb:
        components with 1-2 lines of text or very compact elements will always
        have a rounding of 12 px. When there are more lines horizontally, such
        as cards or boxes, we use a rounding of 18 px. In addition, 24 px
        rounding is used on drawers, 30 px rounding on buttons, and 36 px
        rounding on the app header.
      </Text>
    }
  >
    <RoundingTokensTable />
  </SharedTokenLayout>
);

const RoundingTokensTable = () => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const roundingTokens = Object.entries(
    designTokens.tokens.size["border-radius"],
  );

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
          {roundingTokens.map(([token, value]) => (
            <TableRow key={token}>
              <TableCell>
                <Box
                  width="150px"
                  height="72px"
                  borderRadius={token}
                  border="md"
                  backgroundColor="mint"
                  borderColor="greenHaze"
                />
              </TableCell>

              <TableCell>
                <CopyTokenToClipBoard>{token}</CopyTokenToClipBoard>
              </TableCell>

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
