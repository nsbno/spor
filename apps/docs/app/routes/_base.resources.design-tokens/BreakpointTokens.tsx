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

export function BreakpointTokens(props: BoxProps) {
  return (
    <SharedTokenLayout {...props} title="Breakpoints">
      <BreakpointTokensTable />
    </SharedTokenLayout>
  );
}

type Breakpoint = keyof typeof tokens.size.breakpoint;
const breakpointDisplayNames: Record<Breakpoint, string> = {
  sm: "Phone, landscape",
  md: "Tablet",
  lg: "Desktop",
  xl: "Widescreen",
};

type BreakpointTokenTableProps = BoxProps;
const BreakpointTokensTable = (props: BreakpointTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  return (
    <Box {...props}>
      <Table variant="line" colorPalette="grey">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Name</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
            <TableColumnHeader>Code</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(tokens.size.breakpoint).map(([key, token]): any => (
            <TableRow key={key}>
              <TableCell>
                {breakpointDisplayNames[key as Breakpoint] || key}
              </TableCell>
              <TableCell>{token as any}</TableCell>
              <TableCell>
                <Stack padding={1}>
                  <Box>
                    <Code>{tokenFormatter(`size.breakpoint.${key}`)}</Code>
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
