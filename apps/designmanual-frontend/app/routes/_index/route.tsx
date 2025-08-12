import { Box, Heading, Text } from "@vygruppen/spor-react";

import { Footer } from "~/root/layout/Footer";

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
          Design Manual frontside
        </Heading>
        <Text>
          This is the design manual for Vygruppen. It contains guidelines and
          components that are used across our applications.
        </Text>
      </Box>
      <Box maxWidth="container.lg" marginX="auto" marginY={3} paddingX={4}>
        <Footer />
      </Box>
    </Box>
  );
}
