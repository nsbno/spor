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

type ZIndexToken = {
  name: string;
  key:
    | "hide"
    | "base"
    | "docked"
    | "dropdown"
    | "sticky"
    | "banner"
    | "overlay"
    | "modal"
    | "popover"
    | "skipLink"
    | "toast"
    | "tooltip";
};

const zIndexTokens: ZIndexToken[] = [
  {
    name: "Hide",
    key: "hide",
  },
  {
    name: "Base",
    key: "base",
  },
  {
    name: "Docked",
    key: "docked",
  },
  {
    name: "Dropdown",
    key: "dropdown",
  },
  {
    name: "Sticky",
    key: "sticky",
  },
  {
    name: "Banner",
    key: "banner",
  },
  {
    name: "Overlay",
    key: "overlay",
  },
  {
    name: "Modal",
    key: "modal",
  },
  {
    name: "Popover",
    key: "popover",
  },
  {
    name: "SkipLink",
    key: "skipLink",
  },
  {
    name: "Toast",
    key: "toast",
  },
  {
    name: "Tooltip",
    key: "tooltip",
  },
];

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
          {zIndexTokens.map((token) => (
            <Tr key={token.key}>
              <Td>{token.name}</Td>
              <Td>{tokens.depth["z-index"][token.key].value}</Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>{tokenFormatter(`depth.z-index.${token.key}`)}</Code>
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
