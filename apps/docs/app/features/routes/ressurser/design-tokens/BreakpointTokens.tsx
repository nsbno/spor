import {
  BoxProps,
  Box,
  Code,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";
import tokens from "@vygruppen/spor-design-tokens";
import { useTokenFormatter } from "../../../tokens/useTokenFormatter";

type BreakpointToken = {
  name: string;
  key: "sm" | "md" | "lg";
};

const breakpointTokens: BreakpointToken[] = [
  {
    name: "Tablet",
    key: "sm",
  },
  {
    name: "Desktop",
    key: "md",
  },
  {
    name: "Widescreen",
    key: "lg",
  },
];

export function BreakpointTokens(props: BoxProps) {
  return (
    <SharedTokenLayout {...props} title="Breakpoints">
      <BreakpointTokensTable />
    </SharedTokenLayout>
  );
}

type BreakpointTokenTableProps = BoxProps;

const BreakpointTokensTable = (props: BreakpointTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  return (
    <Box {...props}>
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Navn</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {breakpointTokens.map((token) => (
            <Tr key={token.key}>
              <Td>{token.name}</Td>
              <Td>{tokens.size.breakpoint[token.key].value}</Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>
                      {tokenFormatter(`size.breakpoint.${token.key}`)}
                    </Code>
                  </Box>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
