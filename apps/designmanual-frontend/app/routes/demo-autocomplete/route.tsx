/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Stack } from "@chakra-ui/react";
import {
  DestinationOutline24Icon,
  SubwayOutline24Icon,
  TrainOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  AttachedInputs,
  Autocomplete,
  AutocompleteItem,
  AutocompleteItemGroup,
  AutocompleteItemGroupLabel,
  Text,
} from "@vygruppen/spor-react";
import React from "react";
import useSwr from "swr";

export default function DemoAutocomplete() {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const useMockDestinationQuery = (searchQuery: string) => {
    return useSwr(
      [searchQuery, "destinations"],
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 250));
        return [
          { label: "Oslo S", subLabel: "Oslo", value: "oslo-s" },
          { label: "Bergen", subLabel: "Bergen stasjon", value: "bergen" },
          {
            label: "Trondheim",
            subLabel: "Trondheim stasjon",
            value: "trondheim",
          },
          { label: "Tromsø", subLabel: "Tromsø stasjon", value: "tromso" },
        ].filter((destination) =>
          destination.label.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      },
      {
        keepPreviousData: true,
      },
    );
  };

  const [searchQueryFrom, setSearchQueryFrom] = React.useState("");
  const [searchQueryTo, setSearchQueryTo] = React.useState("");

  const [from, setFrom] = React.useState<any>();
  const [to, setTo] = React.useState<any>();

  const { data: destinationsFrom, isLoading: isLoadingFrom } =
    useMockDestinationQuery(searchQueryFrom);

  const { data: destinationsTo, isLoading: isLoadingTo } =
    useMockDestinationQuery(searchQueryTo);

  return (
    <Box width={[null, "100vw"]} height="100vh">
      <Box maxW="800px">
        <AttachedInputs
          onFlip={() => {
            setFrom(to);
            setTo(from);
            setSearchQueryFrom(searchQueryTo);
            setSearchQueryTo(searchQueryFrom);
          }}
          flipAriaLabel="Bytt avgang og avreise"
          orientation={{ xlDown: "vertical", xl: "horizontal" }}
        >
          <Autocomplete
            label="Hvor reiser du fra?"
            leftIcon={<DestinationOutline24Icon />}
            variant="floating"
            filteredExternally
            loading={isLoadingFrom}
            onInputValueChange={({ inputValue }) =>
              setSearchQueryFrom(inputValue)
            }
            onValueChange={({ items }) => setFrom(items[0])}
            value={from?.id}
            inputValue={searchQueryFrom}
          >
            <AutocompleteItemGroup>
              <AutocompleteItemGroupLabel>
                Tidligere søk
              </AutocompleteItemGroupLabel>
              {destinationsFrom?.map((item) => (
                <AutocompleteItem item={item} key={item.value}>
                  <Stack>
                    <Text variant="sm">{item.label}</Text>
                    <Text variant="xs">{item.subLabel}</Text>
                  </Stack>
                  <Flex gap="1">
                    <SubwayOutline24Icon />
                    <TrainOutline24Icon />
                  </Flex>
                </AutocompleteItem>
              ))}
            </AutocompleteItemGroup>
          </Autocomplete>
          <Autocomplete
            label="Hvor reiser du til?"
            leftIcon={<DestinationOutline24Icon />}
            variant="floating"
            filteredExternally
            loading={isLoadingTo}
            onInputValueChange={({ inputValue }) =>
              setSearchQueryTo(inputValue)
            }
            onValueChange={({ items }) => setTo(items[0])}
            value={to?.id}
            inputValue={searchQueryTo}
          >
            <AutocompleteItemGroup>
              <AutocompleteItemGroupLabel>
                Tidligere søk
              </AutocompleteItemGroupLabel>
              {destinationsTo?.map((item) => (
                <AutocompleteItem item={item} key={item.value}>
                  <Stack>
                    <Text variant="sm">{item.label}</Text>
                    <Text variant="xs">{item.subLabel}</Text>
                  </Stack>
                  <Flex gap="1">
                    <SubwayOutline24Icon />
                    <TrainOutline24Icon />
                  </Flex>
                </AutocompleteItem>
              ))}
            </AutocompleteItemGroup>
          </Autocomplete>
        </AttachedInputs>
      </Box>
    </Box>
  );
}
