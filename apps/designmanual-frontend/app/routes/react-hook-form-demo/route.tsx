import { DestinationOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  AttachedInputs,
  Autocomplete,
  AutocompleteItem,
  AutocompleteItemGroup,
  AutocompleteItemGroupLabel,
  Box,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import React from "react";
import useSwr from "swr";

export default function Component() {
  const countries = [
    { value: "no", label: "Norge" },
    { value: "se", label: "Sverige" },
    { value: "dk", label: "Danmark" },
    { value: "fi", label: "Finland" },
    { value: "de", label: "Tyskland" },
    { value: "fr", label: "Frankrike" },
    { value: "nl", label: "Nederland" },
  ];

  const [value, setValue] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Box padding="2">
      <Autocomplete
        openOnClick
        label="Velg land"
        onValueChange={({ value }) => setValue(value)}
        onInputValueChange={({ inputValue }) => setInputValue(inputValue)}
        inputValue={inputValue}
        variant="floating"
        value={value}
      >
        {countries.map((item) => (
          <AutocompleteItem item={item} key={item.value}>
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </Box>
  );
}
