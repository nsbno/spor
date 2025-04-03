import {
  Box,
  BoxProps,
  Flex,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  Text,
} from "@vygruppen/spor-react";
import { Fragment } from "react";
import { SharedTokenLayout } from "./SharedTokenLayout";
import { remToPx, useDesignTokens } from "./utils";

export const SpacingTokens = () => (
  <SharedTokenLayout
    title="Spacing"
    description={
      <Text>
        Vy uses a spacing scale based on 6 px, in combination with a 3 px
        baseline grid for smaller components. This means that menus, boxes,
        margins, and padding are based on 6 px. While components like buttons
        and icons are based on 6 and 12 px.
      </Text>
    }
  >
    <Stack gap={9}>
      <SpacingTokensTable />
    </Stack>
  </SharedTokenLayout>
);

const SpacingTokensTable = () => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const spacingTokens = Object.entries(designTokens.tokens.size.spacing).sort(
    ([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB),
  );

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
          {spacingTokens.map(([name, token]) => (
            <Fragment key={name}>
              <TableRow>
                <TableCell>
                  <Box
                    width={token as string}
                    height={token as string}
                    backgroundColor={"surface.tertiary"}
                  />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>
                  {remToPx(token)} / {token}
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
