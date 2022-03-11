import {
  Box,
  BoxProps,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

export default function StepperDocsPage() {
  return (
    <ComponentDocs
      title="Stepper"
      description="Steppers brukes til å synliggjøre hvilket steg du er på i en flyt."
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    { name: "steps", defaultValue: "5", type: "input" },
    { name: "activeStep", defaultValue: "2", type: "input" },
    { name: "title", defaultValue: "Tittel", type: "input" },
    {
      name: "colorScheme",
      defaultValue: "green",
      type: "select",
      values: ["green", "light", "dark"],
    },
  ]);
  const stepsArray = createRange(1, Number(currentProps.steps));
  const { steps, ...includedCurrentProps } = currentProps;
  const code = `
<Stepper
  width="100%"
  steps={${JSON.stringify(stepsArray.map((step) => `Steg ${step}`))}}
  ${toPropsString(includedCurrentProps, "  ")}
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

const createRange = (start: number, end: number) => {
  return new Array(end - start + 1).fill(0).map((_, i) => i + start);
};

const Guidelines = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={8}>
      <Stack spacing={3}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Retningslinjer
        </LinkableHeading>
        <Text>
          Stepper brukes for å synligghøre hvor du er i en flyt, hvilke valg du
          har gjort og hva som evt. gjenstår. Stepperen består av stegnavn med
          tilhørende tall. Disse er adskilt med en liten pil som indikerer
          retning på flyten. Hvert steg bør være konsist og beskrivende, og
          helst ikke inneholde mange punkter/ord. Stegene må også være beskrevet
          på samme måte; for eksempel er punktet “Velg sete” aktivt og beskriver
          en handling, mens punktet “Billetter” ikke er aktivt.
        </Text>
        <LinkableHeading as="h3" textStyle="lg">
          Når skal du bruke en stepper?
        </LinkableHeading>
        <Text>
          Der brukeren må gjennomføre flere handlinger, ofte over flere sider,
          og der alle valgene ender i ett resultat, skal man vurdere om en
          stepper er nødvendig. Eksempler kan være et komplisert kjøpsløp med
          mange tilleggsvalg, skjemaer som skal fylles ut for å kreve refusjon
          eller påmelding av en ny tjeneste for å dele opp valgene over flere
          sider.
        </Text>
      </Stack>
      <Stack spacing={2}>
        <LinkableHeading as="h3" textStyle="lg">
          Design
        </LinkableHeading>
        <Text>
          Stepper kommer i to hoved-versjoner, en for desktop som viser mer
          informasjon om stegene, og en for mobil som er mye mer komprimert.
          Stepper skal finnes i 3, 4, 5 og 6 steg. Om det er færre eller flere
          steg i en flyt må det vurderes om det skal brukes. Stepper skal alltid
          være full-skjermbredde, mens stegene kan enten være midtstilte eller
          være venstrestilt etter kolonner.
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 2]} gap={[8, 4]}>
        <Stack spacing={1.5}>
          <Image
            src="/images/component-examples/stepper-example-1.png"
            alt="En stepper brukes i mobil versjon"
            borderRadius="sm"
          />
        </Stack>
        <Stack spacing={1.5}>
          <Image
            src="/images/component-examples/stepper-example-2.png"
            alt="En stepper brukes i desktop versjon"
            borderRadius="sm"
          />
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};
