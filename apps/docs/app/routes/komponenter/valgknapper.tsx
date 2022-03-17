import { Box, BoxProps, Stack, Text } from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { InteractiveCode } from "~/features/interactive-code/InteractiveCode";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

export default function ChioceChipsPage() {
  return (
    <ComponentDocs
      title="Valgknapper"
      description="Valgknapper gjør det mulig å skru av og på funksjonalitet, eller velge et eller flere alternativer."
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
      values: ["sm", "md", "lg"],
      defaultValue: "sm",
      type: "select",
    },
    {
      name: "children",
      defaultValue: "Bus",
      type: "input",
    },
    {
      name: "isChecked",
      defaultValue: false,
      type: "choiceChip",
    },
  ]);
  const { isSelected, ...remainingProps } = currentProps;
  const icon =
    remainingProps.variant === "dark"
      ? "<BusOutline30Icon/>"
      : "<BusFill30Icon/>";
  const code = `
<ChoiceChip 
icon={${icon}}
  ${toPropsString(remainingProps)}
  isSelected={${isSelected}}
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
        <LinkableHeading as="h3" textStyle="md" fontWeight="bold">
          Choice chips
        </LinkableHeading>
        <Text>
          Dette er knapper som ofte brukes til å definere et resultat. Du skal
          kunne skru av og på samtlige choice chips og få resultater deretter,
          som for eksempel et reisesøk hvor du kun ønsker å se buss og togreiser
          fra kun en leverandør. Ett annet eksempel er muligheten til å velge
          flere kategorier i tilbakemeldingsmodalen. Det skal helst være flere
          valg-alternativer før man bruker Choice chips.
        </Text>
        <LinkableHeading as="h3" textStyle="md" fontWeight="bold">
          Filter chips
        </LinkableHeading>
        <Text>
          Når man aktivt skal vise filtrering av resultatene som gis kan det
          være lurt å bruke Filter chips. Her tydeliggjør man at valgene man har
          tatt kan krysses ut og resultatet vil endre seg. Designer man et
          keyword søk eller har et navigasjonsmønster som endrer seg etter
          valgte kategorier kan det være lurt å bruke Filter chips. Et god
          eksempel er filtrering av Turtips, hvor du først får et valg om sted,
          deretter får du et valg om vanskelighetsgrad og type tur du ønsker å
          ta. Med Filter chips kan du enkelt velge bort deler eller alle valgene
          du har gjort.
        </Text>
        <LinkableHeading as="h3" textStyle="md" fontWeight="bold">
          Icon chips
        </LinkableHeading>
        <Text>
          Disse brukes i hovedsak for å tydeliggjøre valgene du har gjort i en
          oversikt som henger sammen med resultatene du ser. De brukes der det
          er viktig å bruke liten plass, men samtidig visualisere valgene du har
          gjort og raskt ta deg tilbake til f.eks. modalen eller skuffen med
          valg-alternativene.
        </Text>
      </Stack>
      <InteractiveCode>
        {`
<Stack direction="row">
<ChoiceChip size="lg" icon={<NightOutline30Icon />}>Nattog</ChoiceChip>
<ChoiceChip size="lg" icon={<NightFill30Icon />}></ChoiceChip>
</Stack>
`}
      </InteractiveCode>
      <Stack spacing={2}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Design
        </LinkableHeading>
        <Text>
          Chips kommer i tre størrelser, Large, Medium, Small, og med og uten
          ikon. Det er tre versjoner av chips: Choice, Filter og Icon som har
          sitt eget bruksområde. Knappen skal alltid følge bredden på innholdet,
          men høyden varierer ut i fra størrelsen som er valgt.
        </Text>
      </Stack>
    </Stack>
  );
};
