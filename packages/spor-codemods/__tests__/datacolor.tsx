import { Badge, Box, StaticCard, Text } from "@vygruppen/spor-react";

// Test file to verify the color-tokens transform works
export const TestComponent = () => {
  return (
    <StaticCard colorPalette="red">
      <Box>
        <Text color="text.info">Something has happened</Text>
        <Badge colorPalette="blue">Info tag</Badge>
      </Box>
    </StaticCard>
  );
};
