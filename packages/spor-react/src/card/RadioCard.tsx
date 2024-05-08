import { UseRadioProps, chakra, forwardRef, useRadio } from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import React, { useId } from "react";

type RadioCardProps = UseRadioProps & {
  children: React.ReactNode;
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
  ({ children, ...rest }, ref) => {
    const { getInputProps, getRadioProps, getRootProps, state } =
      useRadio(rest);

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
          {...radio}
          data-checked={dataAttr(state.isChecked)}
          data-hover={dataAttr(state.isHovered)}
          data-focus={dataAttr(state.isFocused)}
          data-active={dataAttr(state.isActive)}
          data-disabled={dataAttr(state.isDisabled)}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {children}
        </chakra.div>
      </chakra.label>
    );
  },
);
