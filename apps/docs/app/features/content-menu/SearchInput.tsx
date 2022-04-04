import { Input, SearchOutline24Icon } from "@vygruppen/spor-react";
import React from "react";

export type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export const SearchInput = ({ value, onChange, onKeyUp }: SearchInputProps) => {
  const inputRef = useSearchHotkey();
  return (
    <Input
      ref={inputRef}
      label="Søk"
      leftIcon={<SearchOutline24Icon />}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};

const useSearchHotkey = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const previousFocusRef = React.useRef<any>(null);
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isInputFocused = document.activeElement === inputRef.current;
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        if (!isInputFocused) {
          previousFocusRef.current = document.activeElement;
        }
        e.preventDefault();
        inputRef.current?.focus();
      } else if (isInputFocused && e.key === "Escape") {
        previousFocusRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return inputRef;
};
