import {
  BoxProps,
  UseRadioProps,
  chakra,
  forwardRef,
  useRadio,
  useStyleConfig,
} from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import React, { useId } from "react";

type RadioCardProps = UseRadioProps &
  BoxProps & {
    children: React.ReactNode;
    /** Defaults to "base" */
    variant: "floating" | "base";
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

export const RadioCard = forwardRef<RadioCardProps, "div">(
  ({ children, variant = "base", ...props }, ref) => {
    const { getInputProps, getRadioProps, getRootProps, state } =
      useRadio(props);

    const styles = useStyleConfig("RadioCard", { variant });

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
          {...props}
        >
          {children}
        </chakra.div>
      </chakra.label>
    );
  },
);
