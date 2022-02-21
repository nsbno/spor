import {
  Heading,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";

export default function Component() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <Flex>
        <Image
          src="/images/component-examples/component-example-1.png"
          alt="Componentexample"
          rounded={"md"}
          objectFit="contain"
        />
      </Flex>
      <Stack spacing={2}>
        <Heading as="h3" textStyle="md" fontWeight="bold">
          Komponenter
        </Heading>
        <Text textStyle="sm">
          Komponenter er interaktive byggeklosser som gjør det enklere å skape
          fullstendige brukeropplevelser. De skal komme innebygget med “states”,
          varianter og interaktivitet. De har blitt grundig testet og skal
          overholde regler for universell utforming og vår egen interne
          standard.
        </Text>
        <Text textStyle="sm">
          De ligger tilgjengelig her på denne plattformen slik at man kan se
          hvordan de fungerer. De samme komponentene finnes også som komponenter
          i Figma for bruk av designerne.
        </Text>
        <Text textStyle="sm">
          Hver komponent har en del regler og retningslinjer som må følges når
          det skal tas i bruk. Mer informasjon om hver enkelt komponent finner
          du i komponentbiblioteket.
        </Text>
      </Stack>
    </SimpleGrid>
  );
}
