import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
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
import { useTokenFormatter } from "~/features/tokens/useTokenFormatter";

export function ShadowTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Skygger"
      description={
        <Text>
          Skygge brukes for å løfte noe fra bakgrunnen (en handling) og for å
          tydeliggjøre at noe er klikkbart. Det skal kun brukes skygge på
          komponenter som er klikkbare. Vi bruker skygge for å skape et hierarki
          av viktighet. Ikke alle klikkbare elementer har skygge, som f.eks
          inputfelt og knapper. Noen ganger brukes skygge kun i enkelte states
          av komponenter, for å tydeliggjøre en handling. Komponenter med sterke
          farger eller outline trenger ikke skygge. Vi har tre nivåer av skygge:
          Elevation 1, Elevation 2 og Elevation 3.
        </Text>
      }
    >
      <ShadowTokensTable />
    </SharedTokenLayout>
  );
}

type ShadowTokenTableProps = BoxProps;

const ShadowTokensTable = (props: ShadowTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  return (
    <Box {...props}>
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Eksempel</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(tokens.depth.shadow).map(([key, token]) => (
            <Tr key={key}>
              <Td>
                <Box
                  width={8}
                  height={8}
                  boxShadow={token.value}
                  borderRadius="xs"
                />
              </Td>
              <Td>
                {key}/ {token.value}
              </Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>{tokenFormatter(`depth.shadow.${key}`)}</Code>
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
