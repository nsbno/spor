import {
  Box,
  BoxProps,
  chakra,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useId, useState } from "react";
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
  /** The value that will be passed to the `RadioCardGroup`'s `onChange` function if this `RadioCard` is selected.. */
  value: string;
  /** The content of the RadioCard. */
  children: React.ReactNode;
  /** Determines if the RadioCard is disabled. */
  isDisabled?: boolean;
};

export const RadioCard = forwardRef(
  ({ children, value, isDisabled, ...props }: RadioCardProps, ref) => {
    const context = useContext(RadioCardGroupContext);

    if (!context) {
      throw new Error(
        "RadioCard components must be wrapped in a RadioCardGroup component",
      );
    }

    const { name, selectedValue, onChange, variant } = context;

    const styles = useMultiStyleConfig("RadioCard", { variant });

    const [isKeyboardUser, setKeyboardUser] = useState(false);
    const [isFocused, setFocus] = useState(false);

    const isChecked = selectedValue === value;

    useEffect(() => {
      const handleMouseDown = () => setKeyboardUser(false);
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === " ") {
          setFocus(false);
        } else {
          setKeyboardUser(true);
        }
      };

      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    useEffect(() => {
      if (isKeyboardUser && isChecked) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    }, [isKeyboardUser, isChecked]);

    const inputId = `radio-card-${useId()}`;

    return (
      <Box
        onFocus={() => isKeyboardUser && setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <chakra.input
          type="radio"
          id={inputId}
          name={name}
          ref={ref}
          checked={isChecked}
          onChange={() => onChange(value)}
          disabled={isDisabled}
          __css={styles.radioInput}
        />
        <Box
          as="label"
          name={name}
          htmlFor={inputId}
          aria-checked={isChecked}
          data-checked={isChecked}
          data-disabled={isDisabled}
          {...props}
          __css={{
            ...styles.container,
            ...(isChecked && styles.checked),
            ...(isFocused && !isChecked && styles.focused),
            ...(isChecked && isFocused && styles.focusedChecked),
          }}
        >
          {children}
        </Box>
      </Box>
    );
  },
);
