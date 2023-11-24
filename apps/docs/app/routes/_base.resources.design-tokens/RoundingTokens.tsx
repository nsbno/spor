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
import { useTokenFormatter } from "~/routes/_base.resources.design-tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function RoundingTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Rounding"
      description={
        <Text>
          The rounding follows the size of the component. Small components have
          small rounding, and large components have larger rounding. All
          components that consist of a 'box/card' have rounding. We rarely use
          completely square components (0 px rounding). An easy way to determine
          which rounding you should use is to follow the rule of thumb:
          components with 1-2 lines of text or very compact elements will always
          have a rounding of 12 px. When there are more lines horizontally, such
          as cards or boxes, we use a rounding of 18 px. In addition, 24 px
          rounding is used on drawers, 30 px rounding on buttons, and 36 px
          rounding on the app header.
        </Text>
      }
    >
      <RoundingTokensTable />
    </SharedTokenLayout>
  );
}

type RoundingTokenTableProps = BoxProps;

const RoundingTokensTable = (props: RoundingTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
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
          {Object.entries(tokens.size["border-radius"]).map(([key, token]) => (
            <Tr key={key}>
              <Td>
                <Box
                  width={"150px"}
                  height={"72px"}
                  borderRadius={key}
                  border="md"
                  borderColor="greenHaze"
                  backgroundColor="mint"
                />
              </Td>
              <Td>
                {key} / {token}
              </Td>
              <Td>
                <Stack spacing={1}>
                  <Box>
                    <Code>
                      {tokenFormatter(`tokens.size.border-radius.${key}`)}
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
