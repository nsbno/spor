import { Input, SearchOutline24Icon } from "@vygruppen/spor-react";
import React from "react";

export type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export const SearchInput = ({ value, onChange, onKeyUp }: SearchInputProps) => (
  <Input
    label="Søk"
    leftIcon={<SearchOutline24Icon />}
    value={value}
    onChange={onChange}
    onKeyUp={onKeyUp}
  />
);
