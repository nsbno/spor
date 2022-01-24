import { Box, Heading, Text } from "@vygruppen/spor-react";
export type RootErrorBoundaryProps = {
  error: Error;
};
export const RootErrorBoundary = ({ error }: RootErrorBoundaryProps) => {
  console.log({ Box, Heading, Text });
  if (process.env.NODE_ENV === "development") {
    console.error(error);
    return (
      <Box>
        <Heading as="h1">There was an error</Heading>
        <Text>{error.message}</Text>
      </Box>
    );
  }
  return (
    <Box>
      <Heading as="h1">Oops, an error occurred!</Heading>
      <Text>
        Sorry about that. We've told somebody, and will hopefully fix this
        shortly.
      </Text>
    </Box>
  );
};
