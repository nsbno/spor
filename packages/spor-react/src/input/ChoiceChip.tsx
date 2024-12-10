"use client";
import {
  chakra,
  RecipeVariantProps,
  useCheckbox,
  useSlotRecipe,
} from "@chakra-ui/react";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import React, {
  ChangeEvent,
  forwardRef,
  PropsWithChildren,
  useId,
} from "react";
import { choiceChipSlotRecipe } from "../theme/components/choice-chip";

type ChoiceChipVariantProps = RecipeVariantProps<typeof choiceChipSlotRecipe>;

export type ChoiceChipProps = PropsWithChildren<ChoiceChipVariantProps> & {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
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
      disabled,
      checked,
      size = "sm",
      chipType = "choice",
      variant = "base",
      ...props
    }: ChoiceChipProps,
    ref,
  ) => {
    const { getRootProps, getLabelProps } = useCheckbox(props);
    const recipe = useSlotRecipe({ key: "choice-chip" });
    const styles = recipe({
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
          /* {...getInputProps({}, ref)} */
          id={id}
          disabled={disabled}
        />
        <chakra.div
          {...getLabelProps()}
          css={styles.root}
          /* data-checked={dataAttr(state.isChecked)}
          data-hover={dataAttr(state.isHovered)}
          data-focus={dataAttr(state.isFocused)}
          data-active={dataAttr(state.isActive)}
          data-disabled={dataAttr(state.isDisabled)} */
        >
          {icon && (
            <chakra.span css={styles.icon}>
              {checked ? icon.checked : icon.default}
            </chakra.span>
          )}
          {chipType !== "icon" && (
            <chakra.span css={styles.label}>{children}</chakra.span>
          )}

          {chipType === "filter" && checked && (
            <CloseOutline24Icon marginLeft={1.5} />
          )}
        </chakra.div>
      </chakra.label>
    );
  },
);
