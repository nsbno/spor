import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  SearchOutline24Icon,
} from "@vygruppen/spor-react";
import React from "react";

export type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SearchInput = ({ value, onChange }: SearchInputProps) => (
  <FormControl>
    <InputGroup>
      <InputLeftElement width="48px">
        <SearchOutline24Icon />
      </InputLeftElement>
      <Input label="Søk" pl="48px" value={value} onChange={onChange} />
    </InputGroup>
  </FormControl>
);
