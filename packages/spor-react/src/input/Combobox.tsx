"use client";
import React, { ReactNode, useEffect, useId, useRef, useState } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";

import { ColorSpinner, Input, InputProps, ListBox } from "..";
import { Popover } from "./Popover";

export type ComboboxProps<T> = Exclude<
  InputProps,
  "variant" | "colorPalette" | "size"
> &
  AriaComboBoxProps<T> & {
    /** The label of the combobox */
    label: string;
    /** Whether or not the combobox is waiting for new suggestions */
    loading?: boolean;
    /** Optional UI to show when there are no matching items */
    emptyContent?: React.ReactNode;
    /** A ref to the input field */
    inputRef?: React.RefObject<HTMLInputElement>;
    /** If you want to allow an empty collection */
    allowsEmptyCollection?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    variant?: "core" | "floating";
  };
/**
 * A combobox is a combination of an input and a list of suggestions.
 *
 * It is used to select a single item from a list of suggestions.
 *
 * @example
 * ```tsx
 * <Combobox
 *   label="Choose a color"
 *   items={[
 *     { label: "Green", value: "green" },
 *     { label: "Blue", value: "blue" },
 *     { label: "Yellow", value: "yellow" },
 *   ]}
 * >
 * {(item) => (
 *   <Item key={item.value} value={item.value}>
 *      {item.label}
 *   </Item>
 *  )}
 * </Combobox>
 * ```
 */

export const Combobox = (props: ComboboxProps<object>) => {
  const {
    label,
    loading,
    leftIcon,
    rightIcon,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    marginBottom,
    marginTop,
    marginX,
    marginY,
    marginRight,
    marginLeft,
    paddingBottom,
    paddingRight,
    paddingTop,
    paddingLeft,
    paddingX,
    paddingY,
    emptyContent,
    inputRef: externalInputRef,
    children,
    variant,
    allowsEmptyCollection,
    onSelectionChange,
    inputValue,
    onInputChange,
    menuTrigger,
    allowsCustomValue,
    onFocusChange,
    defaultInputValue,
    defaultItems,
    defaultSelectedKey,
    onOpenChange,
    ...restProps
  } = props;
  const { contains } = useFilter({ sensitivity: "base" });

  const fallbackInputRef = useRef<HTMLInputElement>(null);
  const inputRef = externalInputRef ?? fallbackInputRef;
  const listBoxRef = useRef<HTMLUListElement>(null);
  const popoverRef = useRef(null);

  const listboxId = useId();

  const inputWidth = useInputWidth(inputRef);

  const state = useComboBoxState({
    defaultFilter: contains,
    shouldCloseOnBlur: true,
    allowsEmptyCollection,
    onSelectionChange,
    inputValue,
    onInputChange,
    menuTrigger,
    allowsCustomValue,
    onFocusChange,
    defaultInputValue,
    defaultItems,
    defaultSelectedKey,
    onOpenChange,
    ...props,
  });

  const comboBoxProps = {
    borderTopLeftRadius,
    borderTopRightRadius,
    marginBottom,
    marginTop,
    marginRight,
    marginLeft,
    marginX,
    marginY,
    paddingBottom,
    paddingRight,
    paddingTop,
    paddingLeft,
    paddingX,
    paddingY,
  };

  const { inputProps, listBoxProps } = useComboBox(
    {
      ...props,
      inputRef,
      listBoxRef,
      popoverRef,
      label,
      onSelectionChange,
      inputValue,
      onInputChange,
      menuTrigger,
      allowsCustomValue,
      onFocusChange,
      defaultInputValue,
      defaultItems,
      defaultSelectedKey,
      onOpenChange,
    },
    state,
  );

  // Remove aria-labelledby and id from inputProps, as these are handled by the Input component
  // This prevents potential conflicts or duplication of accessibility attributes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { "aria-labelledby": _, id: __, ...filteredInputProps } = inputProps;

  return (
    <>
      <Input
        {...restProps}
        {...styleProps(comboBoxProps)}
        aria-haspopup="listbox"
        ref={inputRef}
        role="combobox"
        errorText={props.errorText}
        helperText={props.helperText}
        required={props.required}
        disabled={props.disabled}
        invalid={props.invalid}
        label={label}
        variant={variant}
        aria-expanded={state.isOpen}
        aria-autocomplete="list"
        aria-controls={listboxId}
        borderBottomLeftRadius={
          state.isOpen && !loading ? 0 : borderBottomLeftRadius
        }
        borderBottomRightRadius={
          state.isOpen && !loading ? 0 : borderBottomRightRadius
        }
        _active={{ backgroundColor: "core.surface.active" }}
        {...filteredInputProps}
        startElement={leftIcon}
        endElement={
          loading ? (
            <ColorSpinner
              width="1.5rem"
              alignSelf="center"
              paddingRight={paddingRight}
              css={{
                div: {
                  display: "flex",
                  alignItems: "center",
                },
              }}
            />
          ) : (
            rightIcon
          )
        }
        placeholder=""
        data-attachable
      />
      <span aria-hidden="true" data-trigger="multiselect"></span>
      {state.isOpen && !loading && (
        <Popover
          state={state}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          triggerRef={inputRef as any} /* Find a way to not use type any */
          ref={popoverRef}
          isNonModal
          placement="bottom start"
          shouldFlip={false}
          hasBackdrop={false}
          // The minimum padding should be 0, because the popover always should be
          // aligned with the input field regardless of the left padding in the container.
          containerPadding={0}
        >
          <ListBox
            {...listBoxProps}
            {...{
              autoFocus:
                typeof listBoxProps.autoFocus === "boolean"
                  ? listBoxProps.autoFocus
                  : undefined,
            }}
            state={state}
            id={listboxId}
            listBoxRef={listBoxRef}
            emptyContent={emptyContent}
            maxWidth={inputWidth}
            variant={variant}
          >
            {children}
          </ListBox>
        </Popover>
      )}
    </>
  );
};

Combobox.displayName = "Combobox";

const useInputWidth = (inputRef: React.RefObject<HTMLInputElement>) => {
  const [inputWidth, setInputWidth] = useState("auto");

  useEffect(() => {
    const onResize = debounce(() => {
      if (inputRef.current) {
        setInputWidth(`${inputRef.current.offsetWidth}px`);
      }
    }, 67);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [inputRef]);
  return inputWidth;
};

function styleProps(object: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => value !== undefined),
  );
}

const debounce = (function_: () => void, ms = 100) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      function_();
    }, ms);
  };
};
