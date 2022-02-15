import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Code,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import { useTokenFormatter } from "../../../tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

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
          {Object.entries(tokens.size.breakpoint).map(([key, token]) => (
            <Tr key={key}>
              <Td>{token.name}</Td>
              <Td>{token.value}</Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>{tokenFormatter(`size.breakpoint.${key}`)}</Code>
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
