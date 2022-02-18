import { Divider } from "@chakra-ui/layout";
import {
  Box,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  TrainOutline30Icon,
  Card,
  TimeOutline30Icon,
  BoxProps,
  SmileOutline30Icon,
  Center,
} from "@vygruppen/spor-react";
import GetStarted from "~/features/routes/ressurser/kom-i-gang/getstarted";

type IntroductionsProps = {
  title: string;
  description: string;
  icon: React.ComponentType<BoxProps>;
};

const items: IntroductionsProps[] = [
  {
    title: "Pålitelig",
    description:
      "Vy skal skal være ans­varlige og pålitelige, sak­lige og presise. Vi skal gi deg den informasjonen du trenger, når du trenger den",
    icon: TimeOutline30Icon,
  },
  {
    title: "Bevegelig",
    description:
      "Beveg­else er kjer­nen i virk­somheten til Vy. Beveg­else er både his­to­rien og fremti­den. Vi skal være fleksible og aldri stå stille.",
    icon: TrainOutline30Icon,
  },
  {
    title: "Gledelig",
    description:
      "Vy skal være overraskende og sjarmerende, og det vi gjør skal skape glede i hverdagen.",
    icon: SmileOutline30Icon,
  },
];

export default function GettingStartedPage() {
  return (
    <Box>
      <Heading as="h1" textStyle="xl-display" mb={2}>
        Introduksjon
      </Heading>
      <Stack spacing={6} fontSize={["mobile.md", "desktop.md"]}>
        <Text>
          Velkommen til Spor, som er designsystemet til Vy. For oss, er Spor et
          samlet felles språk for designere og utviklere. Det er et laget for å
          hjelpe våre team med å bygge helhetlige brukerreiser av høy kvalitet,
          både for ansatte og for kundene våre.
        </Text>
      </Stack>
      <Stack spacing={6} mt={4}>
        <Introductions />
        <Divider />
        <GetStarted />
        <Divider />
      </Stack>
    </Box>
  );
}

const Introductions = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={6}>
      <Stack>
        <Heading as="h3" textStyle="sm" fontWeight="bold">
          Spor
        </Heading>
        <Text textStyle="sm">
          Spor inneholder retningslinjer for visuelt design (brand guidelines),
          ferdigstilte digitale komponenter, dokumentasjon og retningslinjer for
          bruk, i tillegg til kode (som enkelt kan benyttes av utviklere). Det
          er et behov for at alle designere og utviklere i Vy Digital skal bidra
          til designsystemet, derfor ønsker vi å tilrette legge for denne måten
          å jobbe på.
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 2, 3]} spacing={[3, 4]}>
        {items.map((item) => (
          <Stack spacing={3}>
            <Heading textStyle="sm" fontWeight="bold" textAlign="center">
              {item.title}
            </Heading>
            <Card variant="filled" colorScheme="green">
              <Center height="292px">
                <item.icon width="130px" height="130px" color="alias.pine" />
              </Center>
            </Card>
            <Text textStyle="xs">{item.description}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
