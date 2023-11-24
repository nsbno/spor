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

export function AnimationTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Animation"
      description={
        <Text>
          It is important that the length of the animation and which attributes
          are animated do not appear disturbing or make it more difficult for
          the user to navigate. We have set up three basic animations that one
          can use when setting up transitions between states. These define three
          different timings and how the curve of the animation should be
          executed: Slow, Medium, Fast.
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
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Code</Th>
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
