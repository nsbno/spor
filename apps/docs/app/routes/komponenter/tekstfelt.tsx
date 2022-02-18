import {
  Box,
  BoxProps,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { InteractiveCode } from "~/features/interactive-code/InteractiveCode";

export default function InputsDocsPage() {
  return (
    <ComponentDocs
      title="Tekstfelt"
      description="Tekstfelt brukes for å innhente informasjon fra brukerne."
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    { name: "label", defaultValue: "Fornavn", type: "input" },
    { name: "isInvalid", defaultValue: false, type: "choiceChip" },
    { name: "isDisabled", defaultValue: false, type: "choiceChip" },
  ]);
  const code = `
<FormControl>
  <Input 
    ${toPropsString(currentProps, "    ")}
  />
</FormControl>`;
  return (
    <Box {...props}>
      <ComponentPlayground
        code={code}
        scope={{ Input, FormControl }}
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
        <Heading as="h2" textStyle="xl-display">
          Retningslinjer
        </Heading>
        <Text>Inputbokser brukes når vi skal legge inn tekst i felt.</Text>
        <Heading as="h3" textStyle="lg" fontWeight="bold">
          Ikoner
        </Heading>
        <Text>
          Noen ganger kan det være smart å bruke et ikon for å indikere hva
          slags felt det er snakk om.
        </Text>
        <InteractiveCode>
          {`<Input label="Søk" leftIcon={<SearchOutline24Icon />} />`}
        </InteractiveCode>
      </Stack>
    </Stack>
  );
};
