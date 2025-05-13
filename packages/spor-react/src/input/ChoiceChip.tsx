"use client";
import { CheckboxCard, CheckboxCardRootProps, Span } from "@chakra-ui/react";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef } from "react";

type CheckBoxIcon = {
  default: React.ReactNode;
  checked: React.ReactNode;
};

export type ChoiceChipProps = CheckboxCardRootProps & {
  icon?: CheckBoxIcon;
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

export const ChoiceChip = forwardRef<HTMLInputElement, ChoiceChipProps>(
  ({ children, icon, ...rootProps }, ref) => {
    return (
      <CheckboxCard.Root {...rootProps}>
        <CheckboxCard.Context>
          {({ checked }) => (
            <>
              <CheckboxCard.HiddenInput ref={ref} />
              <CheckboxCard.Control>
                <CheckboxCard.Content>
                  <CheckboxCard.Label>
                    {icon && (
                      <Span width="24px">
                        {checked ? icon.checked : icon.default}
                      </Span>
                    )}

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
  },
);

ChoiceChip.displayName = "ChoiceChip";
