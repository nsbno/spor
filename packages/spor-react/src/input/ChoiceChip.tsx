"use client";
import {
  chakra,
  RecipeVariantProps,
  useCheckbox,
  useSlotRecipe,
} from "@chakra-ui/react";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { ChangeEvent, forwardRef, PropsWithChildren } from "react";
import { choiceChipSlotRecipe } from "../theme/slot-recipes/choice-chip";

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
  variant?: "core" | "accent" | "floating";
  "aria-label"?: string;
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
 * There are also three different variants - `core`, `accent` and `floating`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *   <ChoiceChip variant="core">Bus</ChoiceChip>
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
      size = "sm",
      chipType = "choice",
      variant = "core",
      ...props
    }: ChoiceChipProps,
    ref
  ) => {
    const {
      getControlProps,
      disabled,
      getRootProps,
      getLabelProps,
      getHiddenInputProps,
      setChecked,

      checked,
    } = useCheckbox(props);

    const x = useCheckbox(props);
    console.log("x", x);

    const recipe = useSlotRecipe({ key: "choiceChip" });
    const styles = recipe({
      size,
      variant,
    });

    console.log("getControlProps", getControlProps());

    return (
        <chakra.label
          {...getLabelProps()}
          aria-label={props["aria-label"] ?? String(children)}
        >
          <chakra.input
            {...getHiddenInputProps()}
            disabled={disabled}
            defaultChecked={checked}
            value={checked ? "on" : "off"}
            role="switch"
            aria-checked={checked}
            onClick={() => {
              setChecked(!checked);
            }}
          />
          <chakra.div 
            css={styles.root} 
            {...getControlProps()} 
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
  }
);
