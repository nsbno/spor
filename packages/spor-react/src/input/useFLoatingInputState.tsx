import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";

export type UseFloatingInputStateProps<
  T extends HTMLInputElement | HTMLTextAreaElement,
> = {
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onFocus?: (e: FocusEvent<T>) => void;
  onBlur?: (e: FocusEvent<T>) => void;
  onChange?: (e: ChangeEvent<T>) => void;
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

  // New: allow imperative sync (e.g. after react-hook-form setValue)
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

  const handleFocus = (e: FocusEvent<T>) => {
    onFocus?.(e);
    setFocused(true);
  };

  const handleBlur = (e: FocusEvent<T>) => {
    onBlur?.(e);
    setFocused(false);
  };

  const handleChange = (e: ChangeEvent<T>) => {
    onChange?.(e);
    if (!isControlled) {
      setUncontrolledValue(e.target.value);
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
