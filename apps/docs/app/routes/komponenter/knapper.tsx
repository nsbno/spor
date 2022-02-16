import { Box, Button, Heading, Stack, Text } from "@vygruppen/spor-react";
import React from "react";
import {
  ComponentPlayground,
  usePlaygroundProps,
} from "~/features/component-playground/ComponentPlayground";
export default function ButtonsPage() {
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
  ]);

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
      <ComponentPlayground
        code={`
<Button 
  ${toPropsString(currentProps)}
>
  Kjøp billett
</Button>`}
        scope={{ Button }}
        propList={propList}
        currentProps={currentProps}
        onPropsChange={onPropsChange}
      />
    </Box>
  );
}

/** Takes a set of props and turns it into JSX style props */
const toPropsString = (props: Record<string, string | boolean>) => {
  return Object.entries(props)
    .filter(([, value]) => value !== false)
    .map(toPropString)
    .join("\n  ");
};

const toPropString = ([key, value]: [string, string | boolean]) =>
  typeof value === "boolean" ? key : `${key}="${value}"`;
