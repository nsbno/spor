import { Box, BoxProps, Link, Stack, Text } from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

export default function LinksDocsPage() {
  return (
    <ComponentDocs
      title="Lenker"
      description="Tekstlenker fungerer som knapper og brukes for å åpne sider, internt eller eksternt."
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    { name: "children", defaultValue: "Her er en lenke", type: "input" },
    {
      name: "href",
      defaultValue: "/komponenter/lenker",
      type: "input",
    },
    {
      name: "variant",
      defaultValue: "primary",
      type: "select",
      values: ["primary", "secondary", "tertiary"],
    },
    {
      name: "fontSize",
      defaultValue: "16px",
      type: "select",
      values: ["16px", "18px", "24px"],
    },
    { name: "isExternal", defaultValue: false, type: "choiceChip" },
  ]);
  const code = `
<Link 
  ${toPropsString(currentProps, "  ")}
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
        <Text>
          Tekstlenker brukes der det er behov for å ta brukeren til et nytt sted
          i app / web. Eller der man må gjennomføre en handling, men ikke har
          plass eller det ikke er naturlig å bruke en knapp. Gode eksempler på
          bruk er lenker i <Link href="/">kjøpsbekreftelsen</Link> som tar deg
          til “Min side” på web, eller “Les mer” lenke i feilmeldinger i appen.
        </Text>
        <LinkableHeading as="h3" textStyle="lg" fontWeight="bold">
          Design
        </LinkableHeading>
        <Text>
          Kommer i fire versjoner; Primærlenke, Sekundærlenke, Tertiærlenke og
          Kvartærlenke. Størrelse på lenken skal følge tekststørrelsen på siden
          eller komponenten.
        </Text>
      </Stack>
    </Stack>
  );
};
