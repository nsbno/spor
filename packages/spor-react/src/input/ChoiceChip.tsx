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
  size?: "sm" | "md" | "lg" | "xl";
  chipType?: "icon" | "choice" | "filter";
  variant?: "base" | "accent" | "floating";
};
/**
 * Choice chips are checkboxes that look like selectable buttons.
 *
 * Choice chips are available in four different sizes - `sm`, `md`, `lg` and `xl`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *   <ChoiceChip size="lg">Bus</ChoiceChip>
 *   <ChoiceChip size="lg">Train</ChoiceChip>
 * </Stack>
 * ```
 *
 * There are also three different variants - `icon`, `choice` and `filter`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *  <ChoiceChip variant="icon" icon={<Bus24Icon />}>Bus</ChoiceChip>
 *  <ChoiceChip variant="choice" icon={<Bus24Icon />}>Bus</ChoiceChip>
 *  <ChoiceChip variant="filter" icon={<Bus24Icon />}>Bus</ChoiceChip>
 * </Stack>
 *
 * You can add an icon as well, if you want to!
 *
 * ```tsx
 * <Stack flexDirection="row">
 *   <ChoiceChip size="md" icon={<BusIcon />}>Bus</ChoiceChip>
 *   <ChoiceChip size="lg" icon={<TrainIcon />}>Train</ChoiceChip>
 * </Stack>
 * ```
 */
export const ChoiceChip = forwardRef((props: ChoiceChipProps, ref) => {
  const {
    children,
    icon,
    isDisabled,
    size = "md",
    chipType = "choice",
    variant = "base",
  } = props;

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
    hasLabel: Boolean(children),
  });

  const id = `choice-chip-${useId()}`;

  return (
    <chakra.label
      htmlFor={id}
      {...getRootProps()}
      aria-label={String(children)}
    >
      <chakra.input {...getInputProps({}, ref)} id={id} disabled={isDisabled} />
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
});
