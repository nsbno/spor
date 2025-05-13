"use client";

import type { GroupProps, InputElementProps } from "@chakra-ui/react";
import { Group, InputElement } from "@chakra-ui/react";
import * as React from "react";

import { FieldLabel } from "./Field";

export type InputGroupProps = GroupProps & {
  startElementProps?: InputElementProps;
  endElementProps?: InputElementProps;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: React.ReactElement;
  label?: React.ReactNode;
};

/**
 *
 * InputGroup is a wrapper for inputs that have a startElement and/or endElement.
 *
 * It is not exported to users, but used internally in the Input component.
 *
 */

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  (props, ref) => {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      label,
      children,
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
InputGroup.displayName = "InputGroup";
