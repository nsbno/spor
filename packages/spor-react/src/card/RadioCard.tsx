import {
  UseRadioProps,
  chakra,
  forwardRef,
  useRadio,
  useStyleConfig,
} from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import React, { useId } from "react";

type RadioCardProps = UseRadioProps & {
  children: React.ReactNode;
  variant: "floating" | "base";
  size?: "sm" | "lg";
};

/**
 * Renders a radio card.
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
 */

export const RadioCard = forwardRef<RadioCardProps, "div">(
  ({ children, size = "sm", variant = "base", ...rest }, ref) => {
    const { getInputProps, getRadioProps, getRootProps, state } =
      useRadio(rest);

    const styles = useStyleConfig("RadioCard", { variant, size });

    const input = getInputProps({}, ref);
    const radio = getRadioProps();

    const id = `radio-card-${useId()}`;

    return (
      <chakra.label
        htmlFor={id}
        {...getRootProps()}
        aria-label={String(children)}
      >
        <chakra.input {...input} id={id} disabled={state.isDisabled} />
        <chakra.div
          __css={styles}
          {...radio}
          data-checked={dataAttr(state.isChecked)}
          data-hover={dataAttr(state.isHovered)}
          data-focus={dataAttr(state.isFocused)}
          data-active={dataAttr(state.isActive)}
          data-disabled={dataAttr(state.isDisabled)}
        >
          {children}
        </chakra.div>
      </chakra.label>
    );
  },
);
