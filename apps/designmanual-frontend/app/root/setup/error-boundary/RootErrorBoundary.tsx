import { Box, Center, Heading, Text } from "@vygruppen/spor-react";
export type RootErrorBoundaryProps = {
  error: unknown;
};
export const RootErrorBoundary = ({ error }: RootErrorBoundaryProps) => {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
    return (
      <Center minHeight="100vh">
        <Box>
          <Heading as="h1">There was an error</Heading>
          <pre>
            {error instanceof Error
              ? `${error.message}\n\n${error.stack}`
              : JSON.stringify(error, null, 2)}
          </pre>
        </Box>
      </Center>
    );
  }
  return (
    <Box>
      <Heading as="h1">Oops, an error occurred!</Heading>
      <Text>
        Sorry about that. We&apos;ve told somebody, and will hopefully fix this
        shortly.
      </Text>
    </Box>
  );
};
