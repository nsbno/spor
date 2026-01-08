import {
  BusOutline24Icon,
  DestinationOutline24Icon,
  PositionOutline24Icon,
  SubwayOutline24Icon,
  TrainOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  AttachedInputs,
  Autocomplete,
  AutocompleteItem,
  AutocompleteItemGroup,
  AutocompleteItemGroupLabel,
  Flex,
  Input,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import React from "react";
import { useEffect } from "react";

const categoryToIcon = {
  train: <TrainOutline24Icon />,
  subway: <SubwayOutline24Icon />,
  bus: <BusOutline24Icon />,
};

export default function Component() {
  const getCategoryIcons = (categories: string[]) => {
    return categories
      .map((category) => categoryToIcon[category])
      .filter(Boolean);
  };

  const [frameworks, setFrameworks] = React.useState([
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFrameworks((previous) => [
        ...previous,
        { label: "Ember", value: "ember" },
        { label: "Backbone", value: "backbone" },
      ]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack
      flexDirection="column"
      gap={2}
      maxW="1000px"
      marginX="auto"
      width="100%"
      bg="#fafafa"
      padding="2"
    >
      <Autocomplete openOnClick label="Select framework">
        {frameworks.map((item) => (
          <AutocompleteItem item={item} key={item.value}>
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <Autocomplete openOnClick variant="floating" label="Select technology">
        <AutocompleteItemGroup>
          <AutocompleteItemGroupLabel>frameworks</AutocompleteItemGroupLabel>
          {frameworks.map((item) => (
            <AutocompleteItem item={item} key={item.value}>
              {item.label}
            </AutocompleteItem>
          ))}
        </AutocompleteItemGroup>

        <AutocompleteItemGroup>
          <AutocompleteItemGroupLabel>languages</AutocompleteItemGroupLabel>
          {languages.map((item) => (
            <AutocompleteItem item={item} key={item.value}>
              {item.label}
            </AutocompleteItem>
          ))}
        </AutocompleteItemGroup>
      </Autocomplete>

      <AttachedInputs
        orientation={{ mdDown: "vertical", md: "horizontal" }}
        onFlip={() => {}}
        flipAriaLabel="flip"
      >
        <Autocomplete
          openOnClick
          label="Hvor reiser du til?"
          leftIcon={<DestinationOutline24Icon />}
          variant="floating"
        >
          <AutocompleteItem item={others[0]}>
            {others[0].label} <PositionOutline24Icon />
          </AutocompleteItem>
          <AutocompleteItemGroup>
            <AutocompleteItemGroupLabel>
              Tidligere søk
            </AutocompleteItemGroupLabel>
            {destinations.map((item) => (
              <AutocompleteItem item={item} key={item.value}>
                <Stack>
                  <Text variant="sm">{item.label}</Text>
                  <Text variant="xs">{item.subLabel}</Text>
                </Stack>
                <Flex gap="1">{getCategoryIcons(item.categories)}</Flex>
              </AutocompleteItem>
            ))}
          </AutocompleteItemGroup>
        </Autocomplete>
        <Autocomplete
          openOnClick
          label="Hvor reiser du til?"
          leftIcon={<DestinationOutline24Icon />}
          variant="floating"
        >
          <AutocompleteItemGroup>
            <AutocompleteItemGroupLabel>
              Tidligere søk
            </AutocompleteItemGroupLabel>
            {destinations.map((item) => (
              <AutocompleteItem item={item} key={item.value}>
                <Stack>
                  <Text variant="sm">{item.label}</Text>
                  <Text variant="xs">{item.subLabel}</Text>
                </Stack>
                <Flex gap="1">{getCategoryIcons(item.categories)}</Flex>
              </AutocompleteItem>
            ))}
          </AutocompleteItemGroup>
        </Autocomplete>
      </AttachedInputs>
    </Stack>
  );
}

const destinations = [
  {
    label: "Skøyen",
    subLabel: "Kollektivknutepunkt i sted",
    value: "skoyen",
    categories: ["train"],
  },
  {
    label: "Jernbanetorget",
    subLabel: "Kollektivknutepunkt i sted",
    value: "jernbanetorget",
    categories: ["subway", "train", "bus"],
  },
  {
    label: "Nasjonalteateret",
    subLabel: "Kollektivknutepunkt i sted",
    value: "Nasjonalteateret",
    categories: ["train", "bus"],
  },
];

const others = [
  {
    label: "Min posisjon",
    value: "min-posisjon",
  },
];

const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C#", value: "csharp" },
  { label: "Ruby", value: "ruby" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "PHP", value: "php" },
  { label: "Swift", value: "swift" },
];
