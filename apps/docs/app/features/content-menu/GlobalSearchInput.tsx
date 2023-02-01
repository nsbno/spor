import { FormControl, SearchInput } from "@vygruppen/spor-react";
import React from "react";

type GlobalSearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onReset: () => void;
};
export const GlobalSearchInput = ({
  value,
  onChange,
  onKeyUp,
  onReset,
}: GlobalSearchInputProps) => {
  const inputRef = useSearchHotkey();
  return (
    <FormControl>
      <SearchInput
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onReset={onReset}
        aria-keyshortcuts="Meta+K"
      />
    </FormControl>
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
