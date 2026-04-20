import { Box, Text } from "@vygruppen/spor-react";

// Test file to verify the color-tokens transform works
export const TestComponent = () => {
  return (
    <Box backgroundColor="bg.subtle" padding="md">
      <Box backgroundColor="bg.brand">
        <Text color="text.critical">Error text</Text>
        <Text color="text.subtle">Secondary text</Text>
      </Box>
      <Box backgroundColor="surface.info">
        <Text color="text.accent">Accent text</Text>
      </Box>
    </Box>
  );
};
