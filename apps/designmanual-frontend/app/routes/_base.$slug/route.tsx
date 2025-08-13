import { Box, Heading, Text } from "@vygruppen/spor-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return { slug: params.slug };
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  const { slug } = loaderData;
  return (
    <Box backgroundColor="bg" flex="1">
      <Heading as="h1" marginBottom={4}>
        Design Manual {slug}
      </Heading>
      <Text>This is the design manual for Vygruppen.</Text>
    </Box>
  );
}
