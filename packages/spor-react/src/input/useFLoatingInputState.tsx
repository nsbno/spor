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

  useEffect(() => {
    if (
      !isControlled &&
      inputRef?.current &&
      uncontrolledValue === "" &&
      inputRef.current.value !== ""
    ) {
      setUncontrolledValue(inputRef.current.value);
    }
  }, [isControlled, uncontrolledValue, inputRef]);

  // Allow imperative sync (e.g. after react-hook-form setValue)
  const syncFromRef = React.useCallback(() => {
    if (!isControlled && inputRef?.current) {
      const v = inputRef.current.value;
      if (v !== uncontrolledValue) {
        setUncontrolledValue(v);
      }
    }
  }, [isControlled, inputRef, uncontrolledValue]);

  // Run a second pass on next frame to catch post-mount mutations
  useEffect(() => {
    if (!isControlled) {
      const id = requestAnimationFrame(syncFromRef);
      return () => cancelAnimationFrame(id);
    }
  }, [isControlled, syncFromRef]);

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
