import {
  Button,
  Card,
  Center,
  Heading,
  HStack,
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
        <Center height="240px" backgroundColor="alias.mint" borderRadius="sm">
          <Image
            src="/images/component-examples/tokens-example-1.png"
            alt="Tokens eksempel"
            borderRadius="sm"
            boxShadow="sm"
          />
        </Center>
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
      <Stack spacing={2}>
        <HStack spacing={2}>
          <Button
            variant="additional"
            size="sm"
            width="fit-content"
            as={Link}
            to="/ressurser/profil"
          >
            Besøk profilen
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
}
