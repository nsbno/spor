import { Flex, Input, NativeSelect } from "@vygruppen/spor-react";

import { useSearchFilter } from "./SearchFilterContext";

/**
 * The search UI for the icon documentation
 */
export function SearchBar() {
  const { searchFilter, setSearchString, setSize, setVariant } =
    useSearchFilter();

  return (
    <Flex as="form" gap={2}>
      <Input
        label="Look up icon"
        onChange={(event) => {
          setSearchString((event.target as HTMLInputElement).value);
        }}
        value={searchFilter.searchString}
      />

      <NativeSelect
        label="Size"
        onChange={(event) => setSize((event.target as HTMLSelectElement).value)}
        value={searchFilter.size}
      >
        <option value="18">18 x 18px</option>
        <option value="24">24 x 24px</option>
        <option value="30">30 x 30px</option>
      </NativeSelect>

      <NativeSelect
        label="Variant"
        value={searchFilter.variant}
        onChange={(event) =>
          setVariant((event.target as HTMLSelectElement).value)
        }
      >
        <option value="">All</option>
        <option value="outline">Outline</option>
        <option value="fill">Fill</option>
      </NativeSelect>
    </Flex>
  );
}
