import {
  HStack,
  useRadioGroup,
  RadioGroupProps,
  RadioProps,
} from "@chakra-ui/react";
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
      {Children.map(children, (child: any) => {
        /* This any value needs to be looked at ^ */
        const radio = getRadioProps({ value: child.props.value });
        return React.cloneElement(child as React.ReactElement, radio);
      })}
    </HStack>
  );
};
