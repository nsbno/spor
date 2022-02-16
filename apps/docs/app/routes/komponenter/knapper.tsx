import { Box, Button, Heading, Stack, Text } from "@vygruppen/spor-react";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
export default function ButtonsPage() {
  return (
    <Box>
      <Stack spacing={2} mb={4}>
        <Heading as="h1" textStyle="xl-display">
          Knapper
        </Heading>
        <Text>
          Knapper er det mest grunnleggende interaksjonselementet i moderne
          utvikling. De lar deg starte en handling eller navigere rundt på
          siden.
        </Text>
      </Stack>
      <DemoArea />
    </Box>
  );
}

const DemoArea = () => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    {
      name: "variant",
      values: [
        "control",
        "primary",
        "secondary",
        "tertiary",
        "additional",
        "ghost",
      ],
      defaultValue: "primary",
      type: "select",
    },
    {
      name: "size",
      values: ["xs", "sm", "md", "lg"],
      defaultValue: "md",
      type: "select",
    },
    { name: "isLoading", defaultValue: false, type: "switch" },
    { name: "children", defaultValue: "Kjøp billett", type: "input" },
  ]);
  return (
    <ComponentPlayground
      code={`
<Button 
  ${toPropsString(currentProps)}
/>
`}
      scope={{ Button }}
      propList={propList}
      currentProps={currentProps}
      onPropsChange={onPropsChange}
    />
  );
};
