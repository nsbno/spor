import {
  useRadioGroup,
  RadioGroupProps,
  StackDirection,
  Stack,
} from "@chakra-ui/react";
import React, { Children } from "react";

type RadioCardGroupProps = RadioGroupProps & {
  children: React.ReactNode;
  props?: RadioGroupProps;
  direction?: StackDirection;
};

/**
 * Radio card groups are used to group several radio cards together.
 *
 * You can and should pass the common `name` prop to the `RadioGroup`, instead of to each `Radio` component.
 *
 * ```tsx
 * <RadioCardGroup name="ticket">
 *   <RadioCard>Economy</RadioCard>
 *   <RadioCard>Business</RadioCard>
 *   <RadioCard>First Class</RadioCard>
 * </RadioCardGroup>
 * ```
 *
 * By default, radio cards show up horizontally. If you want them to show up vertically, please specify the `direction="column"` prop.
 *
 * ```tsx
 * <RadioCardGroup name="ticket" direction="column">
 *   <RadioCard>Economy</RadioCard>
 *   <RadioCard>Business</RadioCard>
 *   <RadioCard>First Class</RadioCard>
 * </RadioCardGroup>
 * ```
 *
 * You can also specify the `defaultValue` prop to set the default value of the radio group.
 *
 * ```tsx
 * <RadioCardGroup name="ticket" defaultValue="Economy">
 *    <RadioCard>Economy</RadioCard>
 *    <RadioCard>Business</RadioCard>
 *    <RadioCard>First Class</RadioCard>
 * </RadioCardGroup>
 * ```
 *
 * Check out RadioCard for more information on how to style the radio cards.
 * @see RadioCard
 */

export const RadioCardGroup = ({
  children,
  name,
  direction = "row",
  onChange,
  defaultValue,
  variant = "base",
  ...props
}: RadioCardGroupProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: defaultValue,
    name: name,
    onChange: onChange,
    ...props,
  });

  const group = getRootProps();

  return (
    <Stack direction={direction} {...group}>
      {Children.map(
        children as React.ReactElement[],
        (child: React.ReactElement) => {
          const radio = getRadioProps({ value: child.props.value });
          return React.cloneElement(child, { ...radio, variant, ...props });
        },
      )}
    </Stack>
  );
};
