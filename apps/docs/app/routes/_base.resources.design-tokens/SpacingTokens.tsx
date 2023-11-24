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
import { useTokenFormatter } from "~/routes/_base.resources.design-tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

const spacingSizes = tokens.size.spacing;

export function SpacingTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Spacing"
      description={
        <Text>
          Vy uses a spacing scale based on 6 px, in combination with a 3 px
          baseline grid for smaller components. This means that menus, boxes,
          margins, and padding are based on 6 px. While components like buttons
          and icons are based on 6 and 12 px.
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
            <Th>Example</Th>
            <Th>Value</Th>
            <Th>Code</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(spacingSizes)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([key, token]) => (
              <Fragment key={key}>
                <Tr>
                  <Td>
                    <Box
                      width={token}
                      height={token}
                      backgroundColor="primaryGreen"
                    />
                  </Td>
                  <Td>
                    {key} / {token}
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
