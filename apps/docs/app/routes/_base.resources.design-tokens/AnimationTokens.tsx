import {
  Box,
  Code,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  Text,
} from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";
import { useDesignTokens } from "./utils";

export const AnimationTokens = () => (
  <SharedTokenLayout
    title="Animation"
    description={
      <Text>
        It is important that the length of the animation and which attributes
        are animated do not appear disturbing or make it more difficult for the
        user to navigate. We have set up three basic animations that one can use
        when setting up transitions between states. These define three different
        timings and how the curve of the animation should be executed: Slow,
        Medium, Fast.
      </Text>
    }
  >
    <AnimationTokensTable />
  </SharedTokenLayout>
);

const AnimationTokensTable = () => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const animationTokens = Object.entries(designTokens.tokens.time.transition);

  return (
    <Box>
      <Table colorPalette="white">
        <TableHeader>
          <TableRow>
            <TableColumnHeader>Example</TableColumnHeader>
            <TableColumnHeader>Token</TableColumnHeader>
            <TableColumnHeader>Value</TableColumnHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {animationTokens.map(([token, value]: any) => (
            <TableRow key={token}>
              <TableCell>
                <Box
                  width="8"
                  height="8"
                  borderRadius="sm"
                  border="md"
                  backgroundColor="mint"
                  borderColor="greenHaze"
                  animation={`${value} infinite alternate`}
                  style={{
                    animationName: "exampleAnimation",
                  }}
                />
              </TableCell>
              <TableCell>{token}</TableCell>
              <TableCell>
                <Box>
                  <Code>{value}</Code>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <style>{`
        @keyframes exampleAnimation {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(10px);
          }
        }
      `}</style>
    </Box>
  );
};
