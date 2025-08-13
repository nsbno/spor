import { Box, Flex, Heading, Text } from "@vygruppen/spor-react";

import { Footer } from "~/root/layout/Footer";

export default function Index() {
  return (
    <Flex
      flex={1}
      flexDirection={"column"}
      as="main"
      id="content"
      maxWidth={[null, null, null, "container.lg", "container.xl"]}
      width={["100%", null, "container.lg", "container.xl"]}
      marginX="auto"
      marginTop={3}
      paddingX={[3, null, 6, 4, 8]}
      marginBottom={["3.75rem", null, "5rem", "5rem"]}
    >
      <Heading as="h1" marginBottom={4}>
        Design Manual frontside
      </Heading>
      <Text flexGrow={1}>
        This is the design manual for Vygruppen. It contains guidelines and
        components that are used across our applications.
      </Text>
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
}
