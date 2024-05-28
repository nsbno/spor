import {
  Box,
  BoxProps,
  UseRadioProps,
  chakra,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { useId } from "react";

/**
 * Radio cards are used to present a set of options where only one option can be selected.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <RadioCard>
 *   Content
 * </RadioCard>
 * ```
 *
 * In order to use RadioCard, you typically want to place these components in a group with several other RadioCards.
 *
 * ```tsx
 * <RadioCardGroup name="ticket">
 *   <RadioCard value="economy">Economy</RadioCard>
 *   <RadioCard value="business">Business</RadioCard>
 *   <RadioCard value="first-class">First Class</RadioCard>
 * </RadioCardGroup>
 * ```
 *
 * You can add styling to each card seperately, or you can add a common style to the group.
 * Group styling overrides single styling if both are present.
 *
 * This example shows how to style all cards in a group:
 *
 * ```tsx
 * <RadioCardGroup name="ticket" variant="floating" padding={3}>
 *  <RadioCard value="economy">Economy</RadioCard>
 *  <RadioCard value="business">Business</RadioCard>
 *  <RadioCard value="first-class">First Class</RadioCard>
 * </RadioCardGroup>
 * ```
 *
 * This example shows how to style a single card:
 *
 * ```tsx
 * <RadioCard variant="floating" padding={3}>
 *  Economy
 * </RadioCard>
 * ```
 */

export type RadioCardProps = UseRadioProps &
  BoxProps & {
    children: React.ReactNode;
    /** Defaults to "base" */
    variant?: "floating" | "base";
  };

export const RadioCard = forwardRef<RadioCardProps, "div">(
  ({ children, variant = "base", isChecked, ...props }, ref) => {
    const styles = useMultiStyleConfig("RadioCard", { variant });

    const id = `radio-card-${useId()}`;

    return (
      <Box as="label" htmlFor={id} aria-label={String(children)} ref={ref}>
        <chakra.input type="radio" id={id} {...props} sx={styles.radioInput} />
        <Box
          {...props}
          __css={{
            ...styles.container,
            ...(isChecked && styles.checked),
          }}
        >
          {children}
        </Box>
      </Box>
    );
  },
);
