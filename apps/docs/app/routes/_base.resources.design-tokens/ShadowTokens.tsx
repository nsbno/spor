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

import { CopyTokenToClipBoard } from "./CopyTokenToClipBoard";
import { SharedTokenLayout } from "./SharedTokenLayout";
import { useDesignTokens } from "./utils";

export const ShadowTokens = () => (
  <SharedTokenLayout
    title="Shadows"
    description={
      <Text>
        "Shadow is used to lift something from the background (an action) and to
        clarify that something is clickable. Shadow should only be used on
        components that are clickable. We use shadow to create a hierarchy of
        importance. Not all clickable elements have shadow, such as input fields
        and buttons. Sometimes shadow is used only in certain states of
        components, to clarify an action. Components with strong colors or
        outline do not need shadow. We have three levels of shadow: Elevation 1,
        Elevation 2, and Elevation 3 (or in code: "sm", "md" and "lg")
      </Text>
    }
  >
    <ShadowTokensTable />
  </SharedTokenLayout>
);

const ShadowTokensTable = () => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const shadowTokens = Object.entries(designTokens.tokens.depth.shadow);

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
          {shadowTokens.map(([token, value]: any) => (
            <TableRow key={token}>
              <TableCell>
                <Box width={8} height={8} boxShadow={token} borderRadius="xs" />
              </TableCell>
              <TableCell>
                <CopyTokenToClipBoard>{token}</CopyTokenToClipBoard>
              </TableCell>
              <TableCell>
                <Code>{value}</Code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
