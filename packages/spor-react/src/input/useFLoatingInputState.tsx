import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";

export type UseFloatingInputStateProps<
  T extends HTMLInputElement | HTMLTextAreaElement,
> = {
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onFocus?: (event: FocusEvent<T>) => void;
  onBlur?: (event: FocusEvent<T>) => void;
  onChange?: (event: ChangeEvent<T>) => void;
  inputRef?: React.RefObject<T>;
};

export function useFloatingInputState<
  T extends HTMLInputElement | HTMLTextAreaElement,
>({
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  inputRef,
}: UseFloatingInputStateProps<T>) {
  const [focused, setFocused] = useState(false);
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ? String(defaultValue) : "",
  );

  const inputValue = isControlled ? String(value ?? "") : uncontrolledValue;
  const shouldFloat = inputValue.length > 0 || focused;

  // Allow imperative sync (e.g. after react-hook-form setValue)
  const syncFromRef = React.useCallback(() => {
    if (!isControlled && inputRef?.current) {
      const v = inputRef.current.value;
      if (v !== uncontrolledValue) {
        setUncontrolledValue(v);
      }
    }
  }, [isControlled, inputRef, uncontrolledValue]);

  // Observe input value changes for uncontrolled inputs
  useEffect(() => {
    if (!isControlled && inputRef?.current) {
      const input = inputRef.current;

      // Initial sync
      syncFromRef();

      // Watch for programmatic value changes (e.g., from react-hook-form)
      const observer = new MutationObserver(() => {
        syncFromRef();
      });

      // Observe attributes (some libraries set the value attribute)
      observer.observe(input, {
        attributes: true,
        attributeFilter: ["value"],
      });

      // Poll periodically as a fallback (some value changes don't trigger mutations)
      const intervalId = setInterval(syncFromRef, 100);

      return () => {
        observer.disconnect();
        clearInterval(intervalId);
      };
    }
  }, [isControlled, inputRef, syncFromRef]);

  const handleFocus = (event: FocusEvent<T>) => {
    onFocus?.(event);
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<T>) => {
    onBlur?.(event);
    setFocused(false);
  };

  const handleChange = (event: ChangeEvent<T>) => {
    onChange?.(event);
    if (!isControlled) {
      setUncontrolledValue(event.target.value);
    }
  };

  return {
    inputValue,
    shouldFloat,
    handleFocus,
    handleBlur,
    handleChange,
    isControlled,
    focused,
    setUncontrolledValue, // Exposed if needed for custom logic
  };
}
