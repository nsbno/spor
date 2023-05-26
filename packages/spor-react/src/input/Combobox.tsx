import React, { useRef } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import {
  ColorSpinner,
  FormControl,
  Input,
  ListBox,
  SelectItem,
  SelectItemDescription,
  SelectItemLabel,
} from "..";
import { Popover } from "./Popover";

export type ComboboxProps<T> = AriaComboBoxProps<T> & {
  /** The label of the combobox */
  label: string;
  /** Whether or not the combobox is waiting for new suggestions */
  isLoading?: boolean;
};
/**
 * A combobox is a combination of an input and a list of suggestions.
 *
 * It is used to select a single item from a list of suggestions.
 *
 * @example
 * ```tsx
 * <Combobox
 *  label="Choose a color"
 * items={[
 *   { label: "Green", value: "green" },
 *  { label: "Blue", value: "blue" },
 * { label: "Yellow", value: "yellow" },
 * ]}
 * >
 * {(item) => (
 *   <Combobox.Item key={item.value} value={item.value}>
 *      {item.label}
 *   </Combobox.Item>
 *  )}
 * </Combobox>
 */
export function Combobox<T extends object>({
  label,
  isLoading,
  ...rest
}: ComboboxProps<T>) {
  // Setup filter function and state.
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...rest, defaultFilter: contains });

  // Setup refs and get props for child elements.
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

  const {
    inputProps: { size, ...inputProps },
    listBoxProps,
  } = useComboBox(
    {
      ...rest,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );
  return (
    <FormControl>
      <Input
        {...inputProps}
        ref={inputRef}
        label={label}
        borderBottomRadius={state.isOpen ? 0 : "sm"}
        rightIcon={
          isLoading ? (
            <ColorSpinner
              width="1.5rem"
              alignSelf="center"
              css={{
                div: {
                  display: "flex",
                  alignItems: "center",
                },
              }}
            />
          ) : undefined
        }
      />
      {state.isOpen && (
        <Popover state={state} triggerRef={inputRef} placement="bottom start">
          <ListBox
            listBoxOptions={listBoxProps}
            listBoxRef={listBoxRef}
            state={state}
            borderBottomRadius="sm"
          />
        </Popover>
      )}
    </FormControl>
  );
}

Combobox.Item = SelectItem;
Combobox.ItemLabel = SelectItemLabel;
Combobox.ItemDescription = SelectItemDescription;
