import { Field, SearchInput } from "@vygruppen/spor-react";
import React from "react";

type GlobalSearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onReset: () => void;
};
const GlobalSearchInput = ({
  value,
  onChange,
  onKeyUp,
  onReset,
}: GlobalSearchInputProps) => {
  const inputRef = useSearchHotkey();
  return (
    <Field>
      <SearchInput
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onReset={onReset}
        aria-keyshortcuts="Meta+K"
        label="F.ex. icons, components, or pages"
        autoFocus={true}
      />
    </Field>
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

export default GlobalSearchInput;
