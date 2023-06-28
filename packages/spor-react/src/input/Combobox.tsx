import React, { useEffect, useRef, useState } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import { ColorSpinner, Input, InputProps, ListBox, useOutsideClick } from "..";
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

  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

  const inputWidth = useInputWidth(inputRef);

  const state = useComboBoxState({
    ...rest,
    defaultFilter: contains,
    allowsEmptyCollection: Boolean(emptyContent),
    shouldCloseOnBlur: true,
    label,
  });

  useOutsideClick({
    ref: listBoxRef,
    handler: state.close,
    enabled: true,
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
        borderBottomLeftRadius={
          state.isOpen && !isLoading ? 0 : borderBottomLeftRadius
        }
        borderBottomRightRadius={
          state.isOpen && !isLoading ? 0 : borderBottomRightRadius
        }
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
      {state.isOpen && !isLoading && (
        <Popover
          state={state}
          triggerRef={inputRef as any}
          ref={popoverRef}
          placement="bottom start"
          shouldFlip={false}
        >
          <ListBox
            {...listBoxProps}
            state={state}
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
