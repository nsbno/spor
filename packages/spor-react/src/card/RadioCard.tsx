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
 * Radio cards can also be rendered as whatever DOM element you want – like a li (list item) or an article. You do this by specifying the `as` prop:
 *
 * ```tsx
 * <RadioCard colorScheme="green" as="section">
 *   This is now a <section /> element
 * </RadioCard>
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
