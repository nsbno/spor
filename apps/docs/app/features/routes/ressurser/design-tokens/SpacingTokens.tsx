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
import { Fragment } from "react";
import { useTokenFormatter } from "~/features/tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

const { px: spacingPxs, ...spacingSizes } = tokens.size.spacing;

export function SpacingTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Spacing"
      description={
        <Text>
          Vy bruker en spacing-skala basert på 6 px, i kombinasjon med et 3 px
          baseline-grid for mindre komponenter. Det vil si at menyer, bokser,
          marginer og padding tar utgangspunkt i 6 px. Mens komponenter som
          knapper og ikoner tar utgangspunkt i 6 og 12 px.
        </Text>
      }
    >
      <Stack spacing={9}>
        <SpacingTokensTable />
      </Stack>
    </SharedTokenLayout>
  );
}

type SpacingTokenTableProps = BoxProps;

const SpacingTokensTable = (props: SpacingTokenTableProps) => {
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
          {Object.entries(spacingSizes).map(([key, token]) => (
            <Fragment key={key}>
              <Tr>
                <Td>
                  <Box
                    width={token.value}
                    height={token.value}
                    backgroundColor="alias.primaryGreen"
                  />
                </Td>
                <Td>
                  {key} / {token.value}
                </Td>
                <Td>
                  <Stack spacing={1}>
                    <Box>
                      <Code>{tokenFormatter(`size.spacing.[${key}]`)}</Code>
                    </Box>
                  </Stack>
                </Td>
              </Tr>
            </Fragment>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
