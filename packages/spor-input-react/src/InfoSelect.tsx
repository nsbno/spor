import {
  Box,
  chakra,
  ResponsiveValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import {
  DropdownDownFill24Icon,
  DropdownUpFill24Icon,
} from "@vygruppen/spor-icon-react";
import React, { useRef } from "react";
import { HiddenSelect, useButton, useSelect } from "react-aria";
import { useSelectState } from "react-stately";
import { ListBox } from "./ListBox";
import { Popover } from "./Popover";

type InfoSelectProps = {
  /**
   * Either a render function accepting an item, and returning a <SelectItem />,
   * or a list of <SelectItem />s.
   *
   * Render function example:
   * ```tsx
   * <Select items={items}>
   *   {(item) => (
   *     <SelectItem key={item.value} value={item.value}>
   *       {item.label}
   *     </SelectItem>
   *   )}
   * </Select>
   * ```
   *
   * For this to work, the members in `items` need either a `key`
   * or an `id` property.
   *
   * List of <SelectItem />s example:
   * ```tsx
   * <Select label="Choose a color">
   *   <SelectItem>Green</SelectItem>
   *   <SelectItem>Blue</SelectItem>
   *   <SelectItem>Yellow</SelectItem>
   * </Select>
   * ```
   **/
  children: any;
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
  isDisabled?: boolean;
  /** A list of disabled keys.
   *
   * ```tsx
   * <Select label="Choose a color" disabledKeys={["blue", "yellow"]}>
   *   <SelectItem key="green">Green</SelectItem>
   *   <SelectItem key="blue">Blue</SelectItem>
   *   <SelectItem key="yellow">Yellow</SelectItem>
   * </Select>
   * ```
   **/
  disabledKeys?: string[];
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
 *     <SelectItem key={item.key}>
 *       {item.label}
 *     </SelectItem>
 *   )}
 * </InfoSelect>
 * ```
 *
 * @see https://spor.cloud.vy.no/komponenter/info-select
 */
export const InfoSelect = ({
  placeholder,
  width = "100%",
  onChange,
  value,
  defaultValue,
  ...props
}: InfoSelectProps) => {
  const renamedProps = {
    onSelectionChange: onChange,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    ...props,
  };
  const state = useSelectState(renamedProps);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    renamedProps,
    state,
    triggerRef
  );

  const styles = useMultiStyleConfig("InfoSelect", { isOpen: state.isOpen });
  const { buttonProps } = useButton(triggerProps, triggerRef);
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <chakra.div {...labelProps} sx={styles.label}>
        {props.label}
      </chakra.div>
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
        width={width}
      >
        <Box {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.textValue ?? state.selectedItem.rendered
            : placeholder ?? t(texts.selectAnOption)}
        </Box>
        <Box aria-hidden="true" sx={styles.arrowIcon}>
          {state.isOpen ? <DropdownUpFill24Icon /> : <DropdownDownFill24Icon />}
        </Box>
      </chakra.button>

      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef}>
          <ListBox {...menuProps} state={state} borderBottomRadius="sm" />
        </Popover>
      )}
    </Box>
  );
};

const texts = createTexts({
  selectAnOption: {
    nb: "Velg et alternativ",
    nn: "Velg eit alternativ",
    sv: "Välj ett alternativ",
    en: "Choose an option",
  },
});
