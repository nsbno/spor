import {
  useRadioGroup,
  RadioGroupProps,
  StackDirection,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { RadioCard, RadioCardProps } from "./RadioCard";

type RadioCardGroupProps = RadioGroupProps & {
  children: React.ReactNode;
  props?: RadioGroupProps;
  /** Defaults to "row" */
  direction?: StackDirection;
  /** Defaults to "base" */
  variant?: string;
  /** The name of the radio group */
  name?: string;
  /** The default value of the radio group */
  defaultValue?: string;
  /** The callback function to be called when the radio group value changes */
  onChange?: (value: string) => void;
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

  const rootProps = getRootProps();

  return (
    <Stack direction={direction} {...rootProps}>
      {recursiveMap(children, (child: React.ReactElement) => {
        if (child.type === RadioCard) {
          const radioProps = getRadioProps({ value: child.props.value });
          const variantValue = variant as "base" | "floating" | undefined;
          return React.cloneElement(
            child as React.ReactElement<RadioCardProps>,
            {
              ...radioProps,
              variant: variantValue,
              ...props,
            },
          );
        }
        return child;
      })}
    </Stack>
  );
};

function recursiveMap(
  children: React.ReactNode,
  fn: (child: React.ReactElement) => React.ReactElement,
): React.ReactNode {
  return React.Children.map(children, (child) => {
    // If this child is a React element and has children, recurse
    if (React.isValidElement(child) && child.props.children) {
      child = React.cloneElement(child as React.ReactElement<any>, {
        children: recursiveMap(child.props.children, fn),
      });
    }

    // Apply the function to the child (if it's a React element)
    if (React.isValidElement(child)) {
      return fn(child);
    }

    return child;
  });
}
