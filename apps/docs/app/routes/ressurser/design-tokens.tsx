import { Box, BoxProps, Heading, Stack, Text } from "@vygruppen/spor-react";

export default function DesignTokensPage() {
  return (
    <Box>
      <Heading as="h1" textStyles="xl-display" mb={2}>
        Design tokens
      </Heading>
      <Stack spacing={6} fontSize={["mobile.sm", "desktop.sm"]}>
        <Text>
          Designtokens er alle verdiene man trenger for å konstruere og
          vedlikeholde et designsystem. Disse verdiene kan representere alt som
          er definert av design: en farge som en RGB-verdi, en opasitet som et
          tall, en enkel animasjon som Bezier-koordinater. Vi bruker Tokens i
          stedet for hardkodede verdier for å sikre fleksibilitet og enhet på
          tvers av alle produktopplevelser.
        </Text>
        <Text>
          Designtokens er direkte integrert i komponentbiblioteket vårt. De
          dekker de ulike alternativene for vekter, fargetemaer, komponentstates
          og mer.
        </Text>
      </Stack>
      <Divider mt={4} mb={9} />
      <ColorTokens />
      <TypographyTokens />
      <SpacingTokens />
      <RoundingTokens />
      <ShadowTokens />
      <OutlineTokens />
      <BreakpointTokens />
      <AnimationTokens />
      <ZIndexTokens />
    </Box>
  );
}

function Divider(props: BoxProps) {
  return (
    <Box
      as="hr"
      height="2px"
      border="0"
      borderRadius="1px"
      backgroundColor="palette.blackAlpha.200"
      width="100%"
      {...props}
    />
  );
}

type SharedTokenLayoutProps = {
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
};
function SharedTokenLayout({
  title,
  description,
  children,
}: SharedTokenLayoutProps) {
  return (
    <Box>
      <Heading as="h2" textStyles="xl-display" mb={2}>
        {title}
      </Heading>
      <Text mb={6} textStyle="sm">
        {description}
      </Text>
      {children}
    </Box>
  );
}

function ColorTokens() {
  return (
    <SharedTokenLayout
      title="Farger"
      description={
        <Text>
          Hovedfargene våre er de fargene vi bruker mest. Disse brukes som bla.
          bakgrunnsfarger, i hovedfunksjonalitet, navigasjon og knapper – for å
          lage et rammeverk for våre tjenester. Ved å bruke mest av disse
          fargene, skaper vi en helhet og gjenkjennbarhet på tvers av våre
          digitale flater.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
function TypographyTokens() {
  return (
    <SharedTokenLayout
      title="Typografi"
      description={
        <Stack>
          <Text>
            Vi har to “sett” med tekststiler; ett for mobil og ett for desktop.
            Tekststilene for Mobil skal brukes i Vy-appen, og web på mobil, mens
            liggende tablet, desktop og widescreen skal bruke tekststilene for
            Desktop. Brekkpunktet er på skjermbredde større eller lik &gt;=756
            piksler bredde. Linjehøyden skal alltid være 1.333 ganger
            skriftstørrelsen rundet av til nærmeste pixel.
          </Text>
          <Text>
            Fonten Vy Display er mindre lesbar i små størrelser, og skal derfor
            helst bare brukes på overskrifter på Epi-sidene, mens vi i Elm- og
            React-apper foretrekker Vy Sans.
          </Text>
        </Stack>
      }
    ></SharedTokenLayout>
  );
}
function SpacingTokens() {
  return (
    <SharedTokenLayout
      title="Spacing"
      description={
        <Text>
          Vy bruker en spacing-skala basert på 6 px, i kombinasjon med et 3 px
          baseline-grid for mindre komponenter. Det vil si at menyer, bokser,
          marginer og padding tar utgangspunkt i 6 px. Mens komponenter som
          knapper og ikoner tar utgangspunkt i 6 og 12 px.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
function RoundingTokens() {
  return (
    <SharedTokenLayout
      title="Rounding"
      description={
        <Text>
          Avrundingen følger størrelsen på komponenten. Små komponenter har
          liten avrunding, og store komponenter har større avrunding. Alle
          komponenter som består av en “boks/kort” har rounding. Vi bruker
          sjeldent helt firkantede komponenter (0 px rounding). En enkel måte å
          se hvilken rounding du burde bruke, er å følge tommelfingerregelen:
          komponenter med 1-2 linjer med tekst eller veldig kompakte elementer,
          vil alltid ha rounding på 12 px. Når det er flere linjer horisontalt,
          sånn som kort eller bokser, bruker vi rounding på 18 px. I tillegg
          brukes 24 px rounding på skuffer, 30 px rounding på knapper og 36 px
          rounding på header i appen.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
function ShadowTokens() {
  return (
    <SharedTokenLayout
      title="Skygger"
      description={
        <Text>
          Skygge brukes for å løfte noe fra bakgrunnen (en handling) og for å
          tydeliggjøre at noe er klikkbart. Det skal kun brukes skygge på
          komponenter som er klikkbare. Vi bruker skygge for å skape et hierarki
          av viktighet. Ikke alle klikkbare elementer har skygge, som f.eks
          inputfelt og knapper. Noen ganger brukes skygge kun i enkelte states
          av komponenter, for å tydeliggjøre en handling. Komponenter med sterke
          farger eller outline trenger ikke skygge. Vi har tre nivåer av skygge:
          Elevation 1, Elevation 2 og Elevation 3.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
function OutlineTokens() {
  return <SharedTokenLayout title="Outlines"></SharedTokenLayout>;
}
function BreakpointTokens() {
  return <SharedTokenLayout title="Breakpoints"></SharedTokenLayout>;
}
function AnimationTokens() {
  return (
    <SharedTokenLayout
      title="Animasjon"
      description={
        <Text>
          Det er viktig at lengden på animasjonen og hvilke attributter som
          animeres ikke virker forstyrrende eller gjør det vanskeligere å
          navigere for brukeren. Vi har satt opp tre grunn-animasjoner man kan
          bruke når man setter opp overganger mellom states. Disse definerer tre
          ulike timinger og hvordan kurven på animasjonen skal utføres: Slow,
          Medium, Fast.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
function ZIndexTokens() {
  return <SharedTokenLayout title="Z-indeks"></SharedTokenLayout>;
}
