import { Link } from "@remix-run/react";
import { Box, Button, Center, Heading, Text } from "@vygruppen/spor-react";
import { NotFoundIllustration } from "~/features/illustrations/NotFoundIllustration";

export const PageNotFound = () => {
  return (
    <Center>
      <Box padding={4} textAlign="center">
        <NotFoundIllustration marginX="auto" marginBottom={4} />
        <Heading as="h2" variant="xl-display" marginBottom={1}>
          That went off the rails!
        </Heading>
        <Text marginBottom={5} maxWidth="50ch">
          It looks like you found a dead link, or entered a wrong URL. Whatever
          happened, there's nothing here.
        </Text>
        <Button variant="primary" as={Link} to="/">
          Go back to the Spor front page
        </Button>
      </Box>
    </Center>
  );
};
