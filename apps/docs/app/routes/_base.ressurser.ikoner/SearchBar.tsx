import { Flex, FormControl, Input, NativeSelect } from "@vygruppen/spor-react";
import { useSearchFilter } from "./SearchFilterContext";

/**
 * The search UI for the icon documentation
 */
export function SearchBar() {
  const { searchFilter, setSearchString, setSize, setVariant } =
    useSearchFilter();
  return (
    <Flex as="form" gap={2}>
      <FormControl flex="1 1 60%">
        <Input
          label="Søk opp ikon"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          value={searchFilter.searchString}
        />
      </FormControl>
      <FormControl flex="1 1 170px">
        <NativeSelect
          label="Størrelse"
          value={searchFilter.size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="18">18 x 18px</option>
          <option value="24">24 x 24px</option>
          <option value="30">30 x 30px</option>
        </NativeSelect>
      </FormControl>
      <FormControl flex="1 1 150px">
        <NativeSelect
          label="Variant"
          value={searchFilter.variant}
          onChange={(e) => setVariant(e.target.value)}
        >
          <option value="">Alle</option>
          <option value="outline">Outline</option>
          <option value="fill">Fill</option>
        </NativeSelect>
      </FormControl>
    </Flex>
  );
}
