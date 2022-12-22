import React from "react";
import { AlertIcon } from "./AlertIcon";
import { BaseAlert, BaseAlertProps } from "./BaseAlert";

type StaticAlertProps = BaseAlertProps;

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
export const StaticAlert = ({ children, ...props }: StaticAlertProps) => {
  return (
    <BaseAlert {...props}>
      <AlertIcon variant={props.variant} />
      {children}
    </BaseAlert>
  );
};
