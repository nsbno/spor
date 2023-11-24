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
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Code</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(tokens.depth["z-index"]).map(([key, token]) => (
            <Tr key={key}>
              <Td>{key}</Td>
              <Td>{token}</Td>
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
