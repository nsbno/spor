"use client";

import React from "react";
import { AlertIcon } from "./AlertIcon";
import { Alert, AlertProps } from "./Alert";
import { Box, Flex } from "@chakra-ui/react";

type StaticAlertProps = AlertProps;

/**
 * A static alert component.
 *
 * This alert component cannot be closed, nor dismissed.
 *
 * ```tsx
 * <StaticAlert variant="info" title="Nice to know">
 *   Thomas the Train was originally only a wooden toy made for the creator’s son.
 * </StaticAlert>
 * ```
 */
export const StaticAlert = ({
  children,
  title,
  ...props
}: StaticAlertProps) => {
  return (
    <Alert {...props}>
      <AlertIcon variant={props.variant} />
      <Flex direction="column" gap={title ? 2 : undefined} textAlign="left">
        {title && <Box fontWeight="bold">{title}</Box>}
        <Box>{children}</Box>
      </Flex>
    </Alert>
  );
};
