import { Box, Heading, Text } from "@vygruppen/spor-react";

export default function Index() {
  return (
    <Box backgroundColor="bg" flex="1">
      <Box
        as="main"
        id="content"
        maxWidth="container.lg"
        marginX="auto"
        marginY={3}
        paddingX={4}
      >
        <Heading as="h1" marginBottom={4}>
          Design Manual Spor
        </Heading>
        <Text>This is the design system for Vygruppen.</Text>
      </Box>
    </Box>
  );
}
