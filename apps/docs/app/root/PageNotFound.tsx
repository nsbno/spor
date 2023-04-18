import { Link } from "@remix-run/react";
import { Box, Button, Center, Heading, Text } from "@vygruppen/spor-react";
import { NotFoundIllustration } from "~/features/illustrations/NotFoundIllustration";

export const PageNotFound = () => {
  return (
    <Center>
      <Box padding={4} textAlign="center">
        <NotFoundIllustration marginX="auto" marginBottom={4} />
        <Heading as="h2" variant="xl-display" marginBottom={1}>
          For en avsporing!
        </Heading>
        <Text marginBottom={6} maxWidth="50ch">
          Det ser ut til at du fant en død lenke, eller skrev inn feil URL.
          Uansett hva som skjedde, så er det i alle fall ingenting her.
        </Text>
        <Button variant="primary" as={Link} to="/">
          Gå tilbake til forsiden
        </Button>
      </Box>
    </Center>
  );
};
