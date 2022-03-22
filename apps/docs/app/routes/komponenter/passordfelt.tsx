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
    { name: "label", defaultValue: "Passord", type: "input" },
    {
      name: "isInvalid",
      defaultValue: false,
      type: "choiceChip",
    },
    {
      name: "isDisabled",
      defaultValue: false,
      type: "choiceChip",
    },
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
        <Text>
          Passordfelt brukes når vi skal legge inn passord i felt. Store
          inputbokser brukes når vi skal legge inn lengre tekster i felt.
        </Text>
        <InteractiveCode>
          {`<PasswordInput label="Jeg er et passordfelt"  />`}
        </InteractiveCode>
      </Stack>
    </Stack>
  );
};
