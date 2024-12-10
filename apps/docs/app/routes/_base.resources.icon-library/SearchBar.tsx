import {
  Field,
  Flex,
  Input,
  NativeSelectField,
  NativeSelectRoot,
} from "@vygruppen/spor-react";
import { useSearchFilter } from "./SearchFilterContext";

/**
 * The search UI for the icon documentation
 */
export function SearchBar() {
  const { searchFilter, setSearchString, setSize, setVariant } =
    useSearchFilter();
  return (
    <Flex as="form" gap={2}>
      <Field flex="1 1 60%">
        <Input
          label="Look up icon"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          value={searchFilter.searchString}
        />
      </Field>
      <Field flex="1 1 170px">
        <NativeSelectRoot>
          <NativeSelectField
            placeholder="Size"
            onChange={(e) => setSize(e.target.value)}
            value={searchFilter.size}
          >
            <option value="18">18 x 18px</option>
            <option value="24">24 x 24px</option>
            <option value="30">30 x 30px</option>
          </NativeSelectField>
        </NativeSelectRoot>
      </Field>
      <Field flex="1 1 150px">
        <NativeSelectRoot>
          <NativeSelectField
            placeholder="Variant"
            value={searchFilter.variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="">All</option>
            <option value="outline">Outline</option>
            <option value="fill">Fill</option>
          </NativeSelectField>
        </NativeSelectRoot>
      </Field>
    </Flex>
  );
}
