import {
  Box,
  BoxProps,
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Divider,
  Link,
} from "@vygruppen/spor-react";

import Designsystemet from "~/features/routes/ressurser/designprosessen/designsystemet";
import HvordanBrukerSpor from "~/features/routes/ressurser/designprosessen/HvordanBrukerSpor";

type DesignProcessPageProps = {
  title: string;
  children: React.ReactNode;
};

const DesignProcessDetails = ({ title, children }: DesignProcessPageProps) => (
  <Stack spacing={1} textStyle="sm">
    <Heading fontWeight="bold" textStyle="sm">
      {title}
    </Heading>
    {children}
  </Stack>
);

export default function DesignProcessPage() {
  return (
    <Box>
      <Heading as="h1" textStyle="xl-display" mb={2}>
        Designprosessen
      </Heading>
      <Stack spacing={6} fontSize={["mobile.md", "desktop.md"]}>
        <Text>
          På denne siden skal vi prøve å gi deg en oversikt over hvordan vi
          jobber i Vy, hvilke verktøy vi bruker og hvordan man kommer i gang som
          ny designer når man skal jobbe (digitalt) med merkevaren vår.
        </Text>
      </Stack>
      <Stack spacing={6} mt={4}>
        <DesignProcess />
        <Divider />
        <Designsystemet />
        <HvordanBrukerSpor />
      </Stack>
    </Box>
  );
}

const DesignProcess = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={6}>
      <Stack>
        <Heading as="h2" textStyle="md" fontWeight="bold">
          Hvordan jobber vi?
        </Heading>
        <Text textStyle="sm">
          Vi er opptatt av å lage gode løsninger for kundene våre. Derfor er det
          viktig for oss å teste hypoteser, utforske ulike løsninger, å snakke
          med kundene våre og å få tilbakmeldinger fra de som bruker tjenestene
          våre. Vi ønsker å være nytenkende, og kunne snu oss raskt om vi
          trenger å endre noe, og hele tiden jobbe for å skape gode løsninger og
          brukeropplevelser. Vi skal måle alt vi gjør, og basert på denne
          innsikten skal vi iterere og forbedre tjenestene våre.
        </Text>
      </Stack>
      <SimpleGrid spacing={[3, 4]}>
        <DesignProcessDetails title="Merkevaren Vy">
          <Text>
            Merkevaren Vy Merkevaren vår er utviklet av Snøhetta. Denne er
            samlet i en Brand book, som du finner her:{" "}
            <Link href="https://snohq.io/xx/">https://snohq.io/xx/.</Link>
            Dette er kjernen i alt vi lager og gjør, og de grunnleggende tankene
            bak opplevelsen vi ønsker at kundene våre skal ha når de bruker
            tjenestene våre. Vi jobber med å videreføre denne merkevaren i alt
            vi gjør, og har i tillegg gjort noen tilpasninger for at denne også
            skal skinne på digitale flater.
          </Text>
        </DesignProcessDetails>
        <DesignProcessDetails title="Verktøy">
          <Text>
            Vi bruker hovedsaklig Figma som designverktøy. Figma er et skybasert
            design- og prototypingverktøy for digitale prosjekter. Det er laget
            sånn at man kan samarbeide om prosjekter og jobbe fra stort sett
            hvor som helst. Vi bruker dette verktøyet til alt fra skisser,
            kartleggign av flyter, til oppsett av prototyper og brukertesting,
            til å samarbeide og gi tilbakemeldinger og til å designe komponenter
            og ferdige sider som deretter skal utvikles.
          </Text>
        </DesignProcessDetails>
        <DesignProcessDetails title="Andre verktøy">
          <Text>
            <em>Slack</em> - Vi bruker Slack som kommunikasjons- og
            samarbeidsverktøy.
          </Text>
          <Text>
            <em>Trello</em> - Brukes som oppgave- og målstryringsverktøy.
          </Text>
          <Text>
            <em>Miro</em> - Bruker vi til planlegging, workshops og
            kundeintervjuer.
          </Text>
          <Text>
            <em> Testflow</em> - Vi bruker Teston for å få raske
            tilbakemeldinger fra brukerne våre, ved å teste ulike løsninger og
            prototyper.
          </Text>
          <Text>
            <em>Teams</em> - Vi bruker Teams til digitale møter.
          </Text>
          <Text>
            <em>Universell utforming</em> - Vi bruker ulike verktøy for å
            konkrete svar på om det vi lage er i tråd med WCAG-kravene. noen av
            disse er{" "}
            <em>Funkify, Contrastchecker, uutilsynet.no, Contrast og Stark.</em>
          </Text>
          <Text>
            <em> Vy test-app</em> - Vi benytter en egen test-app og ulike
            testversjoner av web’en for å teste og validere nye tjenester og
            funksjoner.
          </Text>
          <Text>
            <em>Google Analytics</em> - Brukes for å samle inn data og
            informasjon om brukerne våre, sånn at vi kan måle og analysere.
          </Text>
        </DesignProcessDetails>
        <DesignProcessDetails title="Samarbeid">
          <Text>
            Vi jobber som oftest i tverrfaglige team bestående av utviklere,
            designere, ux’ere, og produkteiere. Teamene varierer i størrelse ut
            i fra hvilket produkt eller flyt de jobber med. Teamene endres
            kontinuerlig ut i fra fokusområder på tvers av Vy og
            digitalavdelingen. Hvert team har gjerne egne stand-up møter i løpet
            av hver uke hvor pågående og innkommende oppgaver blir diskutert. Vi
            har planleggingsmøter for å diskutere fremtidige sprinter og hvor
            fokus skal ligge. Og vi har retroer for å diskutere hvordan det går
            i teamet, hva vi skal fortsette med, og utfordringer vi ser.
          </Text>
          <br />
          <Text>
            I tillegg har vi en felles Designsync hver uke med rullerende
            ansvarsfordeling. Her samles alle designerne for å oppdatere
            hverandre på fokusområder og hva som jobbes med i de forskjellige
            teamene. Det holdes også workshops, presentasjoner av prosjekter og
            design reviews.
          </Text>
          <br />
          <Text>
            I tillegg til dette setter vi opp møter etter behov, og prøver å
            sparre på tvers av team regelmessig. Spor har i tillegg egne
            ukentlige møter, hvor det er åpent for å bli med om man ønsker å
            bidra, gå gjennom en oppgave eller for å få tilbakemeldinger på
            design eller Universell utforming.
          </Text>
        </DesignProcessDetails>
      </SimpleGrid>
    </Stack>
  );
};
