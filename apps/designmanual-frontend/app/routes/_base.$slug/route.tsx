import { Box, Heading, Text } from "@vygruppen/spor-react";
import { useLoaderData } from "react-router";

import { loader } from "~/root";

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  const { slug } = loaderData;
  return (
    <Box backgroundColor="bg" flex="1">
      <Heading as="h1" marginBottom={4}>
        Design Manual {slug}
      </Heading>
      <Text>This is the design system for Vygruppen.</Text>
    </Box>
  );
}
