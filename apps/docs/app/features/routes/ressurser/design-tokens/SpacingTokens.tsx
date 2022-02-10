import { SharedTokenLayout } from "./SharedTokenLayout";
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
import tokens from "@vygruppen/spor-design-tokens";
import { useTokenFormatter } from "~/features/tokens/useTokenFormatter";

type SpacingToken = {
  name: string;
  key:
    | "3"
    | "6"
    | "9"
    | "12"
    | "18"
    | "24"
    | "30"
    | "36"
    | "42"
    | "54"
    | "72"
    | "90";
};
const spacingTokens: SpacingToken[] = [
  {
    name: "0.5",
    key: "3",
  },
  {
    name: "1",
    key: "6",
  },
  {
    name: "1.5",
    key: "9",
  },
  {
    name: "2",
    key: "12",
  },
  {
    name: "3",
    key: "18",
  },
  {
    name: "4",
    key: "24",
  },
  {
    name: "5",
    key: "30",
  },
  {
    name: "6",
    key: "36",
  },
  {
    name: "7",
    key: "42",
  },
  {
    name: "8",
    key: "54",
  },
  {
    name: "9",
    key: "72",
  },
  {
    name: "10",
    key: "90",
  },
];

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

type SpacingTokenTableProps = BoxProps & {};

const SpacingTokensTable = ({ ...props }: SpacingTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  return (
    <Box>
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Eksempel</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {spacingTokens.map((token) => (
            <Fragment key={token.key}>
              <Tr>
                <Td>
                  <Box
                    boxSize={tokens.size.spacing.px[token.key].value}
                    bgColor="alias.primaryGreen"
                  ></Box>
                </Td>
                <Td lineHeight="1.333">
                  {tokens.size.spacing.px[token.key].value}
                </Td>
                <Td lineHeight="1.333">
                  <Stack spacing={1}>
                    <Box>
                      <Code colorScheme="grey" variant="outline">
                        {tokenFormatter(`size.spacing.px.[${token.key}]`)}
                      </Code>
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
