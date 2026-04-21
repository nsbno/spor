"use client";
import { CheckboxCard, CheckboxCardRootProps, Span } from "@chakra-ui/react";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import React from "react";

type CheckBoxIcon = {
  default: React.ReactNode;
  checked: React.ReactNode;
};

export type FilterChipProps = Omit<
  CheckboxCardRootProps,
  "onCheckedChange" | "checked"
> & {
  icon?: CheckBoxIcon;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

/**
 * Filter chips are checkboxes that look like selectable buttons.
 *
 * Filter chips are available in four different sizes - `xs`, `sm`, `md` and `lg`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *   <FilterChip size="lg">Bus</FilterChip>
 *   <FilterChip size="lg">Train</FilterChip>
 * </Stack>
 * ```
 *
 * There are also three different variants - `core`, `accent` and `floating`.
 *
 * ```tsx
 * <Stack flexDirection="row">
 *   <FilterChip variant="core">Bus</FilterChip>
 *   <FilterChip variant="accent">Boat</FilterChip>
 *   <FilterChip variant="floating">Train</FilterChip>
 * </Stack>
 * ```
 *
 * @see https://spor.vy.no/components/filter-chip
 */

export const FilterChip = ({
  ref,
  children,
  icon,
  onCheckedChange,
  ...rootProps
}: FilterChipProps & {
  ref?: React.Ref<HTMLInputElement>;
}) => {
  return (
    <CheckboxCard.Root
      {...rootProps}
      {...(onCheckedChange && {
        onCheckedChange: (details) => onCheckedChange(!!details.checked),
      })}
    >
      <CheckboxCard.Context>
        {({ checked }) => (
          <>
            <CheckboxCard.HiddenInput ref={ref} />
            <CheckboxCard.Control>
              <CheckboxCard.Content>
                <CheckboxCard.Label>
                  {checked
                    ? icon?.checked && <Span>{icon.checked}</Span>
                    : icon?.default && <Span>{icon.default}</Span>}

                  {rootProps.chipType !== "icon" && children}

                  {rootProps.chipType === "filter" && checked && (
                    <CloseOutline24Icon />
                  )}
                </CheckboxCard.Label>
              </CheckboxCard.Content>
            </CheckboxCard.Control>
          </>
        )}
      </CheckboxCard.Context>
    </CheckboxCard.Root>
  );
};
