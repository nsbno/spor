import {
  Box,
  chakra,
  Flex,
  FormLabel,
  ResponsiveValue,
  useFormControlProps,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  DropdownDownFill24Icon,
  DropdownUpFill24Icon,
} from "@vygruppen/spor-icon-react";
import React, { useRef } from "react";
import { HiddenSelect, useButton, useSelect } from "react-aria";
import { Column, useSelectState } from "react-stately";
import { createTexts, useTranslation } from "../";
import { ListBox } from "./ListBox";
import { Popover } from "./Popover";

type InfoSelectProps<T extends object> = {
  /**
   * Either a render function accepting an item, and returning a <Item />,
   * or a list of <Item />s.
   *
   * Render function example:
   * ```tsx
   * <Select items={items}>
   *   {(item) => (
   *     <Item key={item.value} value={item.value}>
   *       {item.label}
   *     </Item>
   *   )}
   * </Select>
   * ```
   *
   * For this to work, the members in `items` need either a `key`
   * or an `id` property.
   *
   * List of <Item />s example:
   * ```tsx
   * <Select label="Choose a color">
   *   <Item>Green</Item>
   *   <Item>Blue</Item>
   *   <Item>Yellow</Item>
   * </Select>
   * ```
   **/
  children: React.ReactElement | ((item: T) => React.ReactElement);
  /**
   * The items to render
   *
   * If you have a dynamic list of items you want to display, you should use this prop instead of mapping them out. This is a performance optimization.
   *
   * You can render each item in a render function, passed in as `children`:
   *
   * ```tsx
   * <Select items={items}>
   *   {(item) => <div>{item.someProp}</div>}
   * </Select>
   * ```
   */
  items?: T[];
  /** Callback for when something is selected */
  onChange?: (value: string | number) => void;
  value?: string | number;
  defaultValue?: string | number;
  /** Controlled open state
   *
   * Useful if you want to control the open state from outside the component.
   */
  isOpen?: boolean;
  /** Callback for when the open state of the select box changes.
   *
   * Useful if you want to control the open state from outside the component.
   */
  onOpenChange?: (isOpen: boolean) => void;
  /** The label describing the choice */
  label: string;
  /** Hide the label visually
   *
   * Should be used sparingly, as it makes the component less accessible.
   * Useful for the label is obvious, like a phone number country code select.
   */
  isLabelSrOnly?: boolean;
  /** The name of the select element */
  name?: string;
  /**
   * What's shown if nothing is selected.
   *
   * Defaults to a localized version of "choose an option"
   */
  placeholder?: string;
  /** The width of the select box.
   *
   * Defaults to the width of the selected content
   */
  width?: ResponsiveValue<string | number>;
  /** The height of the select box.
   *
   * Defaults to "auto"
   */
  height?: ResponsiveValue<string | number>;
  isDisabled?: boolean;
  /** A list of disabled keys.
   *
   * ```tsx
   * <Select label="Choose a color" disabledKeys={["blue", "yellow"]}>
   *   <Item key="green">Green</Item>
   *   <Item key="blue">Blue</Item>
   *   <Item key="yellow">Yellow</Item>
   * </Select>
   * ```
   **/
  disabledKeys?: string[];
  /** Whether or not the input is invalid */
  "aria-invalid"?: boolean;
  variant?: "base" | "floating";
};
/**
 * A styled select component.
 *
 * This select component lets you choose between a list of options.
 * Compared to the NativeSelect component, the InfoSelect component lets you style the options however you'd like – including both text, icons and other elements.
 *
 * ```tsx
 * <InfoSelect label="Choose a color">
 *   <SelectOption>Blue</SelectOption>
 *   <SelectOption>Yellow</SelectOption>
 *   <SelectOption>Green</SelectOption>
 * </InfoSelect>
 * ```
 *
 * Alternatvely, you can pass the items into the `items` prop, and create a render function for the items.
 *
 * ```tsx
 * <InfoSelect
 *   label="Choose a color"
 *   items={[
 *     { value: "#f00", label: "Red" },
 *     { value: "#0f0", label: "Green" },
 *     { value: "#00f", label: "Blue" },
 *   ]}
 * >
 *   {(item) => (
 *     <Item key={item.key}>
 *       {item.label}
 *     </Item>
 *   )}
 * </InfoSelect>
 * ```
 *
 * @see https://spor.vy.no/components/info-select
 */
export function InfoSelect<T extends object>({
  placeholder,
  onChange,
  value,
  isLabelSrOnly,
  defaultValue,
  variant,
  ...props
}: InfoSelectProps<T>) {
  const renamedProps = {
    onSelectionChange: onChange,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    ...props,
  };
  const state = useSelectState(renamedProps);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    renamedProps,
    state,
    triggerRef,
  );

  const stateStyle = "completed";

  const hasChosenValue = state.selectedItem !== null;

  const styles = useMultiStyleConfig("InfoSelect", {
    isOpen: state.isOpen,
    isLabelSrOnly,
    variant,
    stateStyle,
    hasChosenValue,
  });
  const { buttonProps } = useButton(triggerProps, triggerRef);
  const { t } = useTranslation();
  const formControl = useFormControlProps(props);

  return (
    <Box sx={styles.container}>
      <HiddenSelect
        state={state}
        triggerRef={triggerRef}
        label={props.label}
        name={props.name}
      />

      <chakra.button
        type="button"
        ref={triggerRef}
        sx={styles.button}
        {...buttonProps}
        data-attachable
        aria-invalid={formControl.isInvalid}
        aria-describedby={formControl["aria-describedby"]}
      >
        <chakra.div sx={styles.innerButton}>
          <chakra.div
            {...labelProps}
            sx={{
              ...styles.label,
              ...(hasChosenValue && {
                transform: "scale(0.825) translateY(-10px) translateX(-10%)",
                transitionProperty: "var(--spor-transition-property-common)",
                transitionDuration: "var(--spor-transition-duration-normal)",
              }),
            }}
          >
            {props.label}
          </chakra.div>
          <Box
            {...valueProps}
            h={isLabelSrOnly ? "" : !hasChosenValue ? "0px" : "18px"}
            hidden={!hasChosenValue}
            transform={isLabelSrOnly ? "" : "scale(1) translateY(-12px)"}
            transitionProperty={"var(--spor-transition-property-common)"}
            transitionDuration={"var(--spor-transition-duration-normal)"}
          >
            {state.selectedItem
              ? state.selectedItem.textValue ?? state.selectedItem.rendered
              : placeholder ?? t(texts.selectAnOption)}
          </Box>
        </chakra.div>
        <Box sx={styles.arrowIcon}>
          {state.isOpen ? <DropdownUpFill24Icon /> : <DropdownDownFill24Icon />}
        </Box>
      </chakra.button>

      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={triggerRef}
          // The minimum padding should be 0, because the popover always should be
          // aligned with the trigger field regardless of the left padding in the container.
          containerPadding={0}
        >
          <ListBox
            {...menuProps}
            state={state}
            listBoxRef={listboxRef}
            borderBottomRadius="sm"
            variant={variant}
          >
            {props.children}
          </ListBox>
        </Popover>
      )}
    </Box>
  );
}

const texts = createTexts({
  selectAnOption: {
    nb: "Velg et alternativ",
    nn: "Velg eit alternativ",
    sv: "Välj ett alternativ",
    en: "Choose an option",
  },
});
