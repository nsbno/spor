import {
  BoxProps,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";

type DesignsystemetDetailsProps = {
  title: string;
  children: React.ReactNode;
};

const DesignsystemetDetails = ({
  title,
  children,
}: DesignsystemetDetailsProps) => (
  <Stack spacing={1} textStyle="sm">
    <Heading fontWeight="bold" textStyle="sm">
      {title}
    </Heading>
    {children}
  </Stack>
);

export default function Designsystemet() {
  return (
    <Stack spacing={2}>
      <Heading as="h3" textStyle="md" fontWeight="bold">
        Designsystemet
      </Heading>
      <Text textStyle="sm">
        Designsystemet skal gjøre det raskere, lettere og mer effektivt å jobbe
        med design og utvikling. Vi skal jobbe med kvalitetssikring av arbeidet
        vårt, samtidig som vi skal utarbeide regler og retningslinjer for design
        og interaksjon på tvers av plattform og tjenester. Vi har som oppgave å
        oppdatere og vedlikeholde komponentbibliotek, ikonbibliotek,
        illustrasjonsbibliotek, samt regler og retningslinjer for bruk. Vårt mål
        er å sikre et helhetlig, brukervennlig og konsekvent grensesnitt for
        kundene våre.
      </Text>
      <Designsystem />
    </Stack>
  );
}

const Designsystem = (props: BoxProps) => {
  return (
    <SimpleGrid {...props} spacing={[3, 4]}>
      <DesignsystemetDetails title="Ansvarsområde">
        <Text>
          Designsystemet har ansvar for alle byggeklossene. Det vil si alle
          elementer som kan gjenbrukes uavhengig av flyt, design, komponent
          eller tjeneste. Eksempler på dette kan være knapper, layout-grid,
          modaler, tekststiler eller input-felt.
        </Text>
        <br />
        <Text>
          Vi har ansvar for de ulike bibliotekene. Vi skal holde de oppdaterte,
          se på forbedringer og gjøre justeringer fortløpende. Bibliotekene vi
          har ansvar for er: Lokale bibliotek i Figma, regler og retningslinjer
          og den digitale plattformen på nett.
        </Text>
        <br />
        <Text>
          Vi har ikke ansvar for komponenter som tilhører teamene som f.eks.:
          billetter, søkeresultater, kvittering eller prisdetaljer. Vi har
          heller ikke ansvar for hvert enkelt teams komponentbibliotek. Men vi
          kan tilrettelegge for å dele de med alle og bistå med design og
          komponent-hjelp.
        </Text>
      </DesignsystemetDetails>
    </SimpleGrid>
  );
};
