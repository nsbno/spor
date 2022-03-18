import { Box, BoxProps, Stack, Text } from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { InteractiveCode } from "~/features/interactive-code/InteractiveCode";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

export default function PasswordInputPage() {
  return (
    <ComponentDocs
      title="Passordfelt"
      description="Passordfelt brukes for å innhente informasjon fra brukerne."
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    {
      name: "variant",
      defaultValue: "ghost",
      type: "select",
      values: ["ghost", "solid", "unstyled"],
    },
    { name: "label", defaultValue: "Skriv inn passord", type: "input" },
  ]);
  const code = `
<PasswordInput 
  ${toPropsString(currentProps, "    ")}
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
        <Text>Inputbokser brukes når vi skal legge inn tekst i felt.</Text>
        <LinkableHeading as="h3" textStyle="lg" fontWeight="bold">
          Ikoner
        </LinkableHeading>
        <Text>
          Noen ganger kan det være smart å bruke et ikon for å indikere hva
          slags felt det er snakk om.
        </Text>
        <InteractiveCode>
          {`<FormControl>
   <InputGroup>
     <InputLeftElement>🔎</InputLeftElement>
     <Input label="Search" />
   </InputGroup>
  </FormControl>`}
        </InteractiveCode>
      </Stack>
    </Stack>
  );
};
