import {
  chakra,
  forwardRef,
  useCheckbox,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { ChangeEvent, useId } from "react";

export type ChoiceChipProps = {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
  defaultChecked?: boolean;
  /** The button text */
  children: React.ReactNode;
  icon?: {
    default: React.ReactNode;
    checked: React.ReactNode;
  };
  size?: "xs" | "sm" | "md" | "lg";
  chipType?: "icon" | "choice" | "filter";
  variant?: "base" | "accent" | "floating";
};
/**
 * Choice chips are checkboxes that look like selectable buttons.
 *
 * Choice chips are available in four different sizes - `xs`, `sm`, `md` and `lg`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *   <ChoiceChip size="lg">Bus</ChoiceChip>
 *   <ChoiceChip size="lg">Train</ChoiceChip>
 * </Stack>
 * ```
 *
 * There are also three different chipType - `icon`, `choice` and `filter`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *  <ChoiceChip chipType="icon" icon={<Bus24Icon />}>Bus</ChoiceChip>
 *  <ChoiceChip chipType="choice" icon={<Bus24Icon />}>Bus</ChoiceChip>
 *  <ChoiceChip chipType="filter" icon={<Bus24Icon />}>Bus</ChoiceChip>
 * </Stack>
 *
 * There are also three different variants - `base`, `accent` and `floating`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *   <ChoiceChip variant="base">Bus</ChoiceChip>
 *   <ChoiceChip variant="accent">Boat</ChoiceChip>
 *   <ChoiceChip variant="floating">Train</ChoiceChip>
 * </Stack>
 * ```
 */
export const ChoiceChip = forwardRef(
  (
    {
      children,
      icon,
      isChecked,
      isDisabled,
      size = "sm",
      chipType = "choice",
      variant = "base",
      ...props
    }: ChoiceChipProps,
    ref,
  ) => {
    const {
      state,
      getInputProps,
      getCheckboxProps,
      getRootProps,
      getLabelProps,
    } = useCheckbox(props);
    const styles = useMultiStyleConfig("ChoiceChip", {
      size,
      chipType,
      variant,
      icon,
      hasLabel: chipType !== "icon",
    });

    const id = `choice-chip-${useId()}`;

    return (
      <chakra.label
        htmlFor={id}
        {...getRootProps()}
        aria-label={String(children)}
      >
        <chakra.input
          {...getInputProps({}, ref)}
          id={id}
          disabled={isDisabled}
        />
        <chakra.div
          {...getLabelProps()}
          __css={styles.container}
          data-checked={dataAttr(state.isChecked)}
          data-hover={dataAttr(state.isHovered)}
          data-focus={dataAttr(state.isFocused)}
          data-active={dataAttr(state.isActive)}
          data-disabled={dataAttr(state.isDisabled)}
        >
          {icon && (
            <chakra.span __css={styles.icon}>
              {state.isChecked ? icon.checked : icon.default}
            </chakra.span>
          )}

          <chakra.span __css={styles.label} {...getCheckboxProps()}>
            {chipType !== "icon" && children}
          </chakra.span>

          {chipType === "filter" && state.isChecked && (
            <CloseOutline24Icon marginLeft={1.5} />
          )}
        </chakra.div>
      </chakra.label>
    );
  },
);
