import {
  Badge,
  Card,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";

import { Link } from "remix";

export default function Token() {
  return (
    <Stack spacing={4}>
      <SimpleGrid gap={[8, 4]}>
        <Card variant="filled" colorScheme="green">
          <Center height="240px">
            <Image
              src="/images/component-examples/tokens-example-1.png"
              alt="Tokens eksempel"
              borderRadius="sm"
              boxShadow="sm"
            />
          </Center>
        </Card>
      </SimpleGrid>
      <Stack spacing={2}>
        <Heading as="h3" textStyle="md" fontWeight="bold">
          Tokens
        </Heading>
        <Text textStyle="sm">
          Design tokens er alle verdiene du trenger for å konstruere og
          vedlikeholde et designsystem. Det er de felles reglene og
          retningslinjene som binder alt sammen. Hvilken farge kan klossen min
          ha? Hvordan skal hjørnene se ut? Hvor stor avstand skal det være
          mellom hver kloss?
        </Text>
        <Text textStyle="sm">
          De er brukt i stedet for hardkodede verdier for å sørge for at
          designet er fleksibelt, enkelt og oppdatere og alltid følger
          standarden som er satt av designsystemet. Er du usikker på et design
          inneholder riktig farge eller typografi? Da kan du bare sjekke med
          design tokens om dette stemmer.
        </Text>
      </Stack>
      <Stack>
        <TokensLink to="/ressurser/design-tokens">
          <Badge size="md" variant="outline" colorScheme="white">
            <Text textStyle="xs" textColor="alias.darkGrey">
              Gå til Tokens
            </Text>
          </Badge>
        </TokensLink>
      </Stack>
    </Stack>
  );
}

type TokensLinkProps = {
  to: string;
  children: React.ReactNode;
};

function TokensLink({ to, ...props }: TokensLinkProps) {
  return (
    <Flex
      as={Link}
      to={to}
      alignItems="center"
      _hover={{ textDecoration: "underline" }}
      {...props}
    ></Flex>
  );
}
