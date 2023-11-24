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

export function ShadowTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Shadows"
      description={
        <Text>
          "Shadow is used to lift something from the background (an action) and
          to clarify that something is clickable. Shadow should only be used on
          components that are clickable. We use shadow to create a hierarchy of
          importance. Not all clickable elements have shadow, such as input
          fields and buttons. Sometimes shadow is used only in certain states of
          components, to clarify an action. Components with strong colors or
          outline do not need shadow. We have three levels of shadow: Elevation
          1, Elevation 2, and Elevation 3 (or in code: "sm", "md" and "lg")
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
            <Th>Example</Th>
            <Th>Value</Th>
            <Th>Code</Th>
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
                {key} / {token.value}
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
