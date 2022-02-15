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
import { SharedTokenLayout } from "./SharedTokenLayout";
import { useTokenFormatter } from "~/features/tokens/useTokenFormatter";

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
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Navn</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(tokens.depth["z-index"]).map(([key, token]) => (
            <Tr key={token.key}>
              <Td>{key}</Td>
              <Td>{token.value}</Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>{tokenFormatter(`depth.z-index.${key}`)}</Code>
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
