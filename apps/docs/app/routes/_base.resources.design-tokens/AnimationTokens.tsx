import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Code,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  Text,
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
      <Table variant="line" colorPalette="grey">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Name</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
            <TableColumnHeader>Code</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(tokens.time.transition).map(([key, token]: any) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{token.value}</TableCell>
              <TableCell>
                <Stack padding={1}>
                  <Box>
                    <Code>{tokenFormatter(`time.transition.${key}`)}</Code>
                  </Box>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
