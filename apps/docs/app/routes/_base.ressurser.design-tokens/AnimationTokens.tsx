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
import { useTokenFormatter } from "~/routes/_base.ressurser.design-tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function AnimationTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Animasjon"
      description={
        <Text>
          Det er viktig at lengden på animasjonen og hvilke attributter som
          animeres ikke virker forstyrrende eller gjør det vanskeligere å
          navigere for brukeren. Vi har satt opp tre grunn-animasjoner man kan
          bruke når man setter opp overganger mellom states. Disse definerer tre
          ulike timinger og hvordan kurven på animasjonen skal utføres: Slow,
          Medium, Fast.
        </Text>
      }
    >
      <AnimationTokensTable />
    </SharedTokenLayout>
  );
}

type AnimationTokenTableProps = BoxProps;

const AnimationTokensTable = (props: AnimationTokenTableProps) => {
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
          {Object.entries(tokens.time.transition).map(([key, token]) => (
            <Tr key={key}>
              <Td>{key}</Td>
              <Td>{token.value}</Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>{tokenFormatter(`time.transition.${key}`)}</Code>
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
