import {
  Button,
  Heading,
  Flex,
  Image,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { Link } from "remix";

export default function Profile() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <Stack spacing={2}>
        <Heading as="h3" textStyle="md" fontWeight="bold">
          Profilen
        </Heading>
        <Text textStyle="sm">
          Vy har en tydelig og strukturert designmanual som setter retningen for
          alle oss som jobber i og med selskapets merkevare. Denne omfatter alt
          fra bildestil og typografi, til språk og farger.
        </Text>
        <Text textStyle="sm">
          Det er viktig at man setter seg inn i hvem “vi” er, hvordan Vy som
          merkevare skal fremtre, hvorfor vi gjør det vi gjør.
        </Text>
        <Text textStyle="sm">
          Se gjennom profilen. Les om merkevaren og kjernen til vy. Titt på
          bildemaneren, logo, typografi og forstå språkprofilen vår. Så har du
          kommet langt på vei i arbeidet med Vy.
        </Text>
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
      <Flex>
        <Image
          src="/images/component-examples/profile-example-1.png"
          alt="Profile example"
          rounded={"md"}
          objectFit="contain"
        />
      </Flex>
    </SimpleGrid>
  );
}
