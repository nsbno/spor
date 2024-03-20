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
  useColorModeValue,
} from "@vygruppen/spor-react";
import { useTokenFormatter } from "~/routes/_base.resources.design-tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

type OutlineToken = {
  key: "none" | "sm" | "md" | "lg" | "sm-dashed" | "md-dashed" | "lg-dashed";
  value: string;
};

const outlineTokens: OutlineToken[] = [
  {
    key: "sm",
    value: "1px solid",
  },
  {
    key: "md",
    value: "2px solid",
  },
  {
    key: "lg",
    value: "3px solid",
  },
  {
    key: "sm-dashed",
    value: "1px dashed",
  },
  {
    key: "md-dashed",
    value: "2px dashed",
  },
  {
    key: "lg-dashed",
    value: "3px dashed",
  },
];

export function OutlineTokens(props: BoxProps) {
  return (
    <SharedTokenLayout {...props} title="Outlines">
      <OutlineTokensTable />
    </SharedTokenLayout>
  );
}

type OutlineTokenTableProps = BoxProps;

const OutlineTokensTable = (props: OutlineTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  const borderColor = useColorModeValue(
    "outline.default.light",
    "outline.default.dark",
  );
  return (
    <Box {...props}>
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Example</Th>
            <Th>Value</Th>
            <Th>Code</Th>
          </Tr>
        </Thead>
        <Tbody>
          {outlineTokens.map((token) => (
            <Tr key={token.key}>
              <Td>
                <Box
                  height={8}
                  width={8}
                  border={token.key}
                  borderRadius="xs"
                  borderColor={borderColor}
                />
              </Td>
              <Td>
                {token.value} / {token.key}
              </Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>{tokenFormatter(`size.stroke.${token.key}`)}</Code>
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
