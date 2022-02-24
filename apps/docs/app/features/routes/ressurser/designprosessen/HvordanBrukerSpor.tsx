import {
  BoxProps,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
} from "@vygruppen/spor-react";

type SporInfoProps = {
  title: string;
  children: React.ReactNode;
};

const SporInfo = ({ title, children }: SporInfoProps) => (
  <Stack spacing={1} textStyle="sm">
    <Heading fontWeight="bold" textStyle="md">
      {title}
    </Heading>
    <Text textStyle="sm"> {children}</Text>
  </Stack>
);

export default function HvordanBrukerSpor() {
  return (
    <Stack spacing={2} textStyle="sm">
      <Heading as="h3" textStyle="md" fontWeight="bold">
        Hvordan bruke Spor
      </Heading>
      <Text>
        Teamet i Spor består av både utviklere og designere, som gjerne deltar i
        diskusjoner eller prosjekter på tvers eller innad i de andre teamene,
        som sparringspartnere for designerne eller utviklerne, for opplæring i
        bruk av Figma eller for gjennomgang av universell utforming. For å ta
        kontakt, kan man enten sende en melding til noen i teamet på Slack,
        poste i Slack-kanalen #designsystemet eller legge inn en oppgave i
        Trello-boardet vårt Vy Designsystem.
      </Text>
      <Text>
        Om man trenger nye komponenter eller varianter som ikke eksisterer, kan
        man bidra inn til designsystemet så andre kan ta dette i bruk senere. Jo
        mer vi tar disse i bruk, diskuterer, justerer og samkjører - jo større
        er effekten av å ha et designsystem. Se beskrivelse av flyten for nye
        komponenter under.
      </Text>
      <BrukerSpor />
    </Stack>
  );
}

const BrukerSpor = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={8}>
      <SimpleGrid columns={[1, 2]} gap={[8, 4]}>
        <Stack spacing={2}>
          <SporInfo title="Flyt i team 'X'">
            <Text textStyle="sm">
              Et team jobber med en ny flyt for å forbedre kundeopplevelsen vår.
              Designet tar utgangspunkt i designsystemet, men ser at deler av
              designet vil bli brukt på tvers av flere team.
            </Text>
          </SporInfo>
        </Stack>
        <Flex>
          <Image
            src="/images/component-examples/card-move-in-team-x-example-1.png"
            alt="Bilder av flyt i team x brukes til å frobedre kundeopplevelsen"
            rounded={"md"}
            objectFit="contain"
          />
        </Flex>
        <Stack spacing={2}>
          <SporInfo title="Komponent">
            <Text textStyle="sm">
              For å kunne få oversikt over omfanget og helheten, er det viktig å
              gjøre noen tester for å se hvordan denne komponenten kan fungere
              på andre flater, og i andre og sammenhenger.
            </Text>
          </SporInfo>
        </Stack>
        <Flex>
          <Image
            src="/images/component-examples/card-component-example-2.png"
            alt="Bilder av komponent brukes til å få oversikt over omfanget og helheten"
            rounded={"md"}
            objectFit="contain"
          />
        </Flex>
        <Stack spacing={2}>
          <SporInfo title="Arbeidsgruppe med andre team">
            <Text textStyle="sm">
              Det kan være nødvendig å samarbeide med designere fra andre team
              eller med noen i Spor for å tilrettelegge designet på komponenten
              for ulike flater.
            </Text>
          </SporInfo>
        </Stack>
        <Flex>
          <Image
            src="/images/component-examples/card-working-group-with-other-teams-example-1.png"
            alt="En profile bilder brukes til å merkervaren og kjernen til vy"
            rounded={"md"}
            objectFit="contain"
          />
        </Flex>
        <Stack spacing={2}>
          <SporInfo title="Utvikling i team 'X'">
            <Text textStyle="sm">
              Teamet som startet arbeidet, ferdigstiller komponentene og
              variantene som man ser behov for. Utviklinge kan deles mellom de
              involverte teamene om det er behov.
            </Text>
          </SporInfo>
        </Stack>
        <Flex>
          <Image
            src="/images/component-examples/card-development-in-team-x-example-1.png"
            alt="En profile bilder brukes til å merkervaren og kjernen til vy"
            rounded={"md"}
            objectFit="contain"
          />
        </Flex>
        <Stack spacing={2}>
          <SporInfo title="I produksjon lokalt">
            <Text textStyle="sm">
              Løsningen settes i produksjon lokalt, sånn at designet kan
              ferdigstilles og prosjektet kan rulle videre uten noen store
              forsinkelser.
            </Text>
          </SporInfo>
        </Stack>
        <Flex>
          <Image
            src="/images/component-examples/card-production-locally-example-3.png"
            alt="En profile bilder brukes til å merkervaren og kjernen til vy"
            rounded={"md"}
            objectFit="contain"
          />
        </Flex>
        <Stack spacing={2}>
          <SporInfo title="Forslag til Spor">
            <Text textStyle="sm">
              Samtidig som løsningen brukes lokalt, blir det gjort en
              pull-request fra det ansvarlige teamet som sendes til
              designsystemet. Spor ser over og godkjenner komponenten og
              variantene, sånn at de kan publiseres i designsystemet. Her kan
              det forekomme justeringer som vil bli pushet tilbake til teamet,
              før det blir gjort en ny gjennomgang før endelig godkjenning og
              implementering i designsystemet.
            </Text>
          </SporInfo>
        </Stack>
        <Flex>
          <Image
            src="/images/component-examples/card-suggestions-for-spor-example-2.png"
            alt="En profile bilder brukes til å merkervaren og kjernen til vy"
            rounded={"md"}
            objectFit="contain"
          />
        </Flex>
      </SimpleGrid>
    </Stack>
  );
};
