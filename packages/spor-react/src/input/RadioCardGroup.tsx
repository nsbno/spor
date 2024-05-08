import { HStack, useRadioGroup, RadioGroupProps } from "@chakra-ui/react";
import React, { Children } from "react";

type RadioCardGroupProps = RadioGroupProps & {
  children: React.ReactNode;
  props?: RadioGroupProps;
};

export const RadioCardGroup = ({
  children,
  name,
  onChange,
  defaultValue,
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
    <HStack {...group}>
      {Children.map(
        children as React.ReactElement[],
        (child: React.ReactElement) => {
          const radio = getRadioProps({ value: child.props.value });
          return React.cloneElement(child, radio);
        },
      )}
    </HStack>
  );
};
