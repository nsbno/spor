import { Autocomplete, AutocompleteItem, Box } from "@vygruppen/spor-react";

export default function Demo() {
  const countries = [
    { value: "no", label: "Norge" },
    { value: "se", label: "Sverige" },
    { value: "dk", label: "Danmark" },
    { value: "fi", label: "Finland" },
    { value: "de", label: "Tyskland" },
    { value: "fr", label: "Frankrike" },
    { value: "nl", label: "Nederland" },
  ];

  return (
    <Box maxWidth="400px" p="2">
      <Autocomplete openOnClick label="Velg land">
        {countries.map((item) => (
          <AutocompleteItem item={item} key={item.value}>
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </Box>
  );
}
