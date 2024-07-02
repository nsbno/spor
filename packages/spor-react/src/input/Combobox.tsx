import React, { useEffect, useId, useRef, useState } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import { ColorSpinner, Input, InputProps, ListBox } from "..";
import { Popover } from "./Popover";

type OverridableInputProps = Pick<
  InputProps,
  | "marginTop"
  | "marginBottom"
  | "marginRight"
  | "marginLeft"
  | "marginY"
  | "marginX"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
  | "paddingY"
  | "paddingX"
  | "leftIcon"
  | "rightIcon"
  | "borderTopRightRadius"
  | "borderTopLeftRadius"
  | "borderBottomRightRadius"
  | "borderBottomLeftRadius"
  | "onFocus"
>;

export type ComboboxProps<T> = AriaComboBoxProps<T> & {
  /** The label of the combobox */
  label: string;
  /** Whether or not the combobox is waiting for new suggestions */
  isLoading?: boolean;
  /** Optional UI to show when there are no matching items */
  emptyContent?: React.ReactNode;
  /** A ref to the input field */
  inputRef?: React.RefObject<HTMLInputElement>;
  /** If you want to allow an empty collection */
  allowsEmptyCollection?: boolean;
} & OverridableInputProps;
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

export function Combobox<T extends object>({
  label,
  isLoading,
  leftIcon,
  rightIcon,
  borderBottomLeftRadius = "sm",
  borderBottomRightRadius = "sm",
  borderTopLeftRadius = "sm",
  borderTopRightRadius = "sm",
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
  allowsEmptyCollection,
  ...rest
}: ComboboxProps<T>) {
  const { contains } = useFilter({ sensitivity: "base" });

  const fallbackInputRef = useRef<HTMLInputElement>(null);
  const inputRef = externalInputRef ?? fallbackInputRef;
  const listBoxRef = useRef<HTMLUListElement>(null);
  const popoverRef = useRef(null);

  const listboxId = `${useId()}-listbox`;

  const inputWidth = useInputWidth(inputRef);

  const state = useComboBoxState({
    allowsEmptyCollection: Boolean(emptyContent),
    defaultFilter: contains,
    shouldCloseOnBlur: true,
    ...rest,
  });

  const comboBoxProps: OverridableInputProps = {
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
    leftIcon,
  };

  const {
    inputProps: { size, ...inputProps },
    listBoxProps,
  } = useComboBox(
    {
      ...rest,
      inputRef,
      listBoxRef,
      popoverRef,
      label,
    },
    state,
  );

  return (
    <>
      <Input
        {...styleProps(comboBoxProps)}
        aria-haspopup="listbox"
        ref={inputRef}
        role="combobox"
        label={label}
        aria-expanded={state.isOpen}
        aria-autocomplete="list"
        aria-controls={listboxId}
        borderBottomLeftRadius={
          state.isOpen && !isLoading ? 0 : borderBottomLeftRadius
        }
        borderBottomRightRadius={
          state.isOpen && !isLoading ? 0 : borderBottomRightRadius
        }
        {...inputProps}
        rightIcon={
          isLoading ? (
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
      />
      <span aria-hidden="true" data-trigger="multiselect"></span>
      {state.isOpen && !isLoading && (
        <Popover
          state={state}
          triggerRef={inputRef as any}
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
            state={state}
            id={listboxId}
            listBoxRef={listBoxRef}
            emptyContent={emptyContent}
            maxWidth={inputWidth}
          >
            {rest.children}
          </ListBox>
        </Popover>
      )}
    </>
  );
}

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
  }, []);
  return inputWidth;
};

function styleProps(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined),
  );
}

const debounce = (fn: () => void, ms = 100) => {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, ms);
  };
};
