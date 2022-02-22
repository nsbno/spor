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
import Profile from "~/features/routes/ressurser/kom-i-gang/Profile";
import Component from "~/features/routes/ressurser/kom-i-gang/Component";
import Token from "~/features/routes/ressurser/kom-i-gang/Token";

type IntroductionsProps = {
  title: string;
  icon: React.ComponentType<BoxProps>;
  children: React.ReactNode;
};

const IntroductionItem = ({
  title,
  icon: Icon,
  children,
}: IntroductionsProps) => (
  <Stack spacing={3}>
    <Heading textStyle="sm" fontWeight="bold" textAlign="center">
      {title}
    </Heading>
    <Card variant="filled" colorScheme="green">
      <Center height="292px">
        <Icon width="130px" height="130px" color="alias.pine" />
      </Center>
    </Card>
    <Text textStyle="xs">{children}</Text>
  </Stack>
);

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
        <Profile />
        <Divider />
        <Component />
        <Divider />
        <Token />
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
        <IntroductionItem title="Pålitelig" icon={TimeOutline30Icon}>
          Vy skal skal være ans­varlige og pålitelige, sak­lige og presise. Vi
          skal gi deg den informasjonen du trenger, når du trenger den.
        </IntroductionItem>
        <IntroductionItem title="Bevegelig" icon={TrainOutline30Icon}>
          Beveg­else er kjer­nen i virk­somheten til Vy. Beveg­else er både
          his­to­rien og fremti­den. Vi skal være fleksible og aldri stå stille.
        </IntroductionItem>
        <IntroductionItem title="Gledelig" icon={SmileOutline30Icon}>
          Vy skal være overraskende og sjarmerende, og det vi gjør skal skape
          glede i hverdagen.
        </IntroductionItem>
      </SimpleGrid>
    </Stack>
  );
};
