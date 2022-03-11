import { Box, BoxProps, Stack, Text } from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { InteractiveCode } from "~/features/interactive-code/InteractiveCode";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

export default function PopoverPage() {
  return (
    <ComponentDocs
      title="Popovers"
      description="Popovers gir hint og guides til brukeren under onboarding av nye features og mye annet"
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    {
      name: "size",
      values: ["sm", "lg"],
      defaultValue: "sm",
      type: "select",
    },
    {
      name: "children",
      defaultValue:
        "Nå kan du endre rekkefølgen på favoritter ved å dra rundt på dem.",
      type: "input",
    },
    {
      name: "placement",
      values: ["top", "bottom", "left", "right"],
      defaultValue: "bottom",
      type: "select",
    },
    {
      name: "withCloseButton",
      defaultValue: false,
      type: "choiceChip",
    },
  ]);
  const code = `
<SimplePopover 
  ${toPropsString(currentProps)}
  triggerElement={<Button variant="secondary" size="md">Klikk for å toggle</Button>}
>
  
</SimplePopover>`;
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
        <Text>
          Popover brukes til å kommunisere informasjon rundt ny eller endret
          funksjonalitet, eller som ekstra informasjon for å tydeliggjøre en
          handling.
        </Text>
        <LinkableHeading as="h3" textStyle="lg">
          Flerstegs-guide
        </LinkableHeading>
        <Text>
          Har du flere steg du vil ta en bruker gjennom, kan du bruke en
          flerstegs-guide, også kalt en wizard. Her er et eksempel:
        </Text>
        <InteractiveCode>
          {`
<WizardPopover 
  triggerElement={
    <Button variant="secondary" size="md">
      Se nye features!
    </Button>
  }
>
  <Text>Dette er den første featuren. Den er flott!</Text>
  <Text>Dette er den andre nye featuren.</Text>
  <Stack>
    <Text>Den tredje featuren har flere avsnitt.</Text>
    <Text>Den er nemlig spesiell!</Text>
  </Stack>
</WizardPopover>`}
        </InteractiveCode>
      </Stack>
      <Stack spacing={2}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Design
        </LinkableHeading>
        <Text>
          Kommer i Small og Large variant. Small har 2 varianter med og uten
          “lukke-kryss”, og i 2 ulike størrelser. Large har en variant med
          mulighet for link og/eller knapp og med “lukke-kryss”, og en variant
          med karusell. Retningen på pilen kan endres i varianter slik at den
          kan brukes uavhengig av plassering. Størrelsen på boksen endres etter
          tekstmengde og etter hvor mange linjeskift man legger inn.
        </Text>
      </Stack>
      <Stack spacing={2}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Språk
        </LinkableHeading>
        <Text>
          Meldingene skal skrives som korte setninger, så langt det er plass -
          med et forståelig, hyggelig og enkelt språk, ikke teknisk.
        </Text>
      </Stack>
      <Stack spacing={2}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Godt å vite
        </LinkableHeading>
        <Text>
          Når du bruker Large Carousel-varianten, husk å endre antall og farge
          på prikkene avhengig av hvor mange popovers som er i
          informasjonsserien. På det siste tipset i serien, kan man ta bort
          pilen i knappen og skrive “Fullfør”, for å avslutte serien.
        </Text>
      </Stack>
    </Stack>
  );
};
