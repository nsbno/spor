import {
  Alert,
  Badge,
  Box,
  Button,
  StaticCard,
  Text,
} from "@vygruppen/spor-react";

// Test file to verify the color-tokens transform works
export const TestComponent = () => {
  return (
    <StaticCard colorPalette="red">
      <Box>
        <Badge colorPalette="blue">Info tag</Badge>
        <Badge colorPalette="red">Critical tag</Badge>

        <Alert variant="info">Info Alert</Alert>
        <Alert variant="important">Warning Alert</Alert>
        <Alert variant="error">Error Alert</Alert>
        <Alert variant="alt">Notice Alert</Alert>
        <Alert variant="success">Success Alert</Alert>
        <Alert variant="neutral">Neutral Alert</Alert>
        <Alert variant="error-secondary">Caution Alert</Alert>
        <Alert variant="service">Service Alert</Alert>

        <StaticCard colorPalette="white" padding={3}>
          Neutral
        </StaticCard>
        <StaticCard colorPalette="grey" padding={3}>
          Grey
        </StaticCard>
        <StaticCard colorPalette="yellow" padding={3}>
          Yellow
        </StaticCard>
        <StaticCard colorPalette="darkYellow" padding={3}>
          Dark yellow
        </StaticCard>
        <StaticCard colorPalette="red" padding={3}>
          Red
        </StaticCard>
        <StaticCard colorPalette="green" padding={3}>
          Green
        </StaticCard>
        <StaticCard colorPalette="blue" padding={3}>
          Blue
        </StaticCard>
        <StaticCard colorPalette="orange" padding={3}>
          Orange
        </StaticCard>

        {/** Test that this does not get affected */}
        <Button variant="primary">Service Alert</Button>
        <Text color="text.info">Something has happened</Text>
      </Box>
    </StaticCard>
  );
};
