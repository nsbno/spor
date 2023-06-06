import React, { useRef } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import { ColorSpinner, Input, InputProps, ListBox } from "..";
import { Popover } from "./Popover";

export type ComboboxProps<T> = AriaComboBoxProps<T> & {
  /** The label of the combobox */
  label: string;
  /** Whether or not the combobox is waiting for new suggestions */
  isLoading?: boolean;
  /** Optional UI to show when there are no matching items */
  emptyContent?: React.ReactNode;
} & Pick<
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
  ...rest
}: ComboboxProps<T>) {
  const { contains } = useFilter({ sensitivity: "base" });

  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

  const state = useComboBoxState({
    ...rest,
    defaultFilter: contains,
    allowsEmptyCollection: Boolean(emptyContent),
  });

  const {
    inputProps: { size, ...inputProps },
    listBoxProps,
  } = useComboBox(
    {
      ...rest,
      inputRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  return (
    <>
      <Input
        {...inputProps}
        ref={inputRef}
        label={label}
        borderBottomLeftRadius={state.isOpen ? 0 : borderBottomLeftRadius}
        borderBottomRightRadius={state.isOpen ? 0 : borderBottomRightRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        marginBottom={marginBottom}
        marginTop={marginTop}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginX={marginX}
        marginY={marginY}
        paddingBottom={paddingBottom}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingLeft={paddingLeft}
        paddingX={paddingX}
        paddingY={paddingY}
        leftIcon={leftIcon}
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
          ) : (
            rightIcon
          )
        }
      />
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={inputRef}
          ref={popoverRef}
          placement="bottom start"
        >
          <ListBox
            {...listBoxProps}
            state={state}
            listBoxRef={listBoxRef}
            emptyContent={emptyContent}
          >
            {rest.children}
          </ListBox>
        </Popover>
      )}
    </>
  );
}
