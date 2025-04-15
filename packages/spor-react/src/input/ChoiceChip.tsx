"use client";
import { choiceChipRecipe } from "@/theme/recipes/choice-chip";
import {
  chakra,
  RecipeVariantProps,
  Span,
  useCheckbox,
} from "@chakra-ui/react";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { ChangeEvent, PropsWithChildren } from "react";

type ChoiceChipVariantProps = RecipeVariantProps<typeof choiceChipRecipe>;

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
  chipType?: "icon" | "choice" | "filter";
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

const ChoiceChipStyledDiv = chakra("div", choiceChipRecipe);

export const ChoiceChip = ({
  children,
  icon,
  size = "sm",
  chipType = "choice",
  variant = "core",
  ...props
}: ChoiceChipProps) => {
  const {
    getControlProps,
    disabled,
    getLabelProps,
    getHiddenInputProps,
    setChecked,
    checked,
  } = useCheckbox(props);

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
      <ChoiceChipStyledDiv {...getControlProps()}>
        {icon && <Span>{checked ? icon.checked : icon.default}</Span>}
        {chipType !== "icon" && <Span>{children}</Span>}

        {chipType === "filter" && checked && (
          <CloseOutline24Icon marginLeft={1.5} />
        )}
      </ChoiceChipStyledDiv>
    </chakra.label>
  );
};
