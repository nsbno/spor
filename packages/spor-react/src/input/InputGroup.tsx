"use client";

import type {
  InputElementProps,
  GroupProps,
  FieldLabelProps,
} from "@chakra-ui/react";
import { Group, InputElement } from "@chakra-ui/react";
import * as React from "react";
import { FieldLabel } from "./Field";

export type InputGroupProps = GroupProps & {
  startElementProps?: InputElementProps;
  endElementProps?: InputElementProps;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: React.ReactElement;
  label?: string;
};

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      label,
      children,
      attached,
      ...rest
    } = props;

    return (
      <Group ref={ref} {...rest}>
        {startElement && (
          <InputElement
            pointerEvents="none"
            paddingX={2}
            {...startElementProps}
          >
            {startElement}
          </InputElement>
        )}
        {React.cloneElement(children, {
          ...children.props,
        })}
        {label && (
          <FieldLabel left={startElement ? 4 : "0"} right={endElement ? 4 : 0}>
            {label}
          </FieldLabel>
        )}

        {endElement && (
          <InputElement placement="end" paddingX={2} {...endElementProps}>
            {endElement}
          </InputElement>
        )}
      </Group>
    );
  },
);

const attachedStyles = {
  "> *:first-of-type:not(:last-of-type) [data-attachable]": {
    borderEndRadius: 0,
  },
  "> *:not(:first-of-type):not(:last-of-type) [data-attachable]": {
    borderRadius: 0,
  },
  "> *:not(:first-of-type):last-of-type [data-attachable]": {
    borderStartRadius: 0,
  },
};
