import {
  Box,
  BoxProps,
  chakra,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { useContext, useId } from "react";
import { RadioCardGroupContext } from "./RadioCardGroup";

/**
 * Radio cards are used to present a set of options where only one option can be selected.
 *
 * RadioCard components must be wrapped in a RadioCardGroup component.
 *
 * @example
 * ```tsx
 * <RadioCardGroup name="ticket">
 *   <RadioCard value="economy">Economy</RadioCard>
 *   <RadioCard value="business">Business</RadioCard>
 *   <RadioCard value="first-class">First Class</RadioCard>
 * </RadioCardGroup>
 * ```
 *
 * RadioCard inherits props from Box.
 *
 * Be advised to not use the `name` prop on the RadioCard component.
 *
 * Changing the semantics may also cause the component to not work as expected.
 *
 * @see Docs https://spor.vy.no/components/radiocard
 */

export type RadioCardProps = BoxProps & {
  value: string;
  children: React.ReactNode;
  isDisabled?: boolean;
};

export const RadioCard = forwardRef(
  ({ children, value = "base", isDisabled, ...props }: RadioCardProps, ref) => {
    const context = useContext(RadioCardGroupContext);

    if (!context) {
      throw new Error(
        "RadioCard components must be wrapped in a RadioCardGroup component",
      );
    }

    const { name, selectedValue, onChange, variant } = context;

    const styles = useMultiStyleConfig("RadioCard", { variant });

    const isChecked = selectedValue === value;

    const radioCardId = `radio-card-${useId()}`;

    return (
      <Box as="label" aria-label={String(children)}>
        <chakra.input
          type="radio"
          id={radioCardId}
          ref={ref}
          value={value}
          tabIndex={0}
          name={name}
          checked={isChecked}
          onChange={() => onChange(value)}
          disabled={isDisabled}
          __css={styles.radioInput}
        />
        <Box
          {...props}
          __css={{ ...styles.container, ...(isChecked && styles.checked) }}
          data-checked={isChecked}
          data-disabled={isDisabled}
        >
          {children}
        </Box>
      </Box>
    );
  },
);
