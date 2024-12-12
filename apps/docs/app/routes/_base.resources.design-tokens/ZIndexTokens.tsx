import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Code,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from "@vygruppen/spor-react";
import { useTokenFormatter } from "~/routes/_base.resources.design-tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function ZIndexTokens(props: BoxProps) {
  return (
    <SharedTokenLayout {...props} title="Z-index">
      <ZIndexTokensTable />
    </SharedTokenLayout>
  );
}

type ZIndexTokenTableProps = BoxProps;

const ZIndexTokensTable = (props: ZIndexTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  return (
    <Box {...props}>
      <Table variant="line" colorScheme="grey">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Name</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
            <TableColumnHeader>Code</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(tokens.depth["z-index"]).map(([key, token]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{token as string}</TableCell>
              <TableCell>
                <Stack gap={1}>
                  <Box>
                    <Code>{tokenFormatter(`depth.z-index.${key}`)}</Code>
                  </Box>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
