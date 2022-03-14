import { Box, BoxProps, Stack, Text } from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

export default function FloatingActionButtonPage() {
  return (
    <ComponentDocs
      title="Floating action button"
      description="Floating action buttons brukes til ofte brukte handlinger"
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    {
      name: "colorScheme",
      defaultValue: "dark",
      type: "select",
      values: ["dark", "light", "green"],
    },
    { name: "children", defaultValue: "Kontroll", type: "input" },
    { name: "isTextVisible", defaultValue: true, type: "choiceChip" },
  ]);
  const { isTextVisible, ...remainingProps } = currentProps;
  const code = `
<FloatingActionButton 
  icon={<TicketControlFill30Icon /> }
  ${toPropsString(remainingProps)}
  isTextVisible={${isTextVisible}}
/>`;
  return (
    <Box {...props}>
      <ComponentPlayground
        code={code}
        propList={propList}
        currentProps={currentProps}
        onPropsChange={onPropsChange}
      />
    </Box>
  );
};

const Guidelines = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={8}>
      <Stack spacing={3}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Retningslinjer
        </LinkableHeading>
        <Stack spacing={2}>
          <LinkableHeading as="h3" textStyle="lg">
            Bruk
          </LinkableHeading>
          <Text>
            Dette er en knapp som alltid skal ligge over alt annet innhold slik
            at den alltid er tilgjengelig (utenom skuffer og modaler som åpnes
            over). Den skal kun brukes til en hovedhandling hvor man har behov
            for å gjøre den synlig og tilgjengelig på tvers av flyter, sider
            eller tjenester.
          </Text>
          <Text>
            Man skal helst ikke bruke mange forskjellige FABs på samme tjeneste
            selv om man er på en annen del av tjenesten. Et eksempel kan være å
            “skrive en melding” eller “legge til noe”, hvor dette er
            hovedhandlingen for appen. Da kan det være lurt å ha en FAB.
          </Text>
          <Text>Du skal aldri ha flere enn 1 FAB på en side eller flyt.</Text>
          <LinkableHeading as="h3" textStyle="lg">
            Design
          </LinkableHeading>
          <Text>
            Knappen kommer i 3 ulike farger for at den skal kunne tilpasses den
            flyten eller siden du jobber på. Foreløpig kommer den kun i en
            størrelse, men vi vil se om det er behov for en egen desktop versjon
          </Text>
          <LinkableHeading as="h3" textStyle="lg">
            Interaksjon
          </LinkableHeading>
          <Text>
            Knappen har to hovedstates. Versjonen med navn skal alltid være
            synlig først sånn at brukeren forstår hva knappen gjør. Når man
            skroller nedover på siden kan den animeres slik at kun ikonet er
            synlig. Dette burde skje etter en bestemt lengde slik at ikke
            minimale justeringer opp og ned forårsaker en animasjon. Når man
            skroller oppover skal teksten bli synlig igjen. Det finnes mange
            gode eksempler på dette slik som Gmail på Android.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
