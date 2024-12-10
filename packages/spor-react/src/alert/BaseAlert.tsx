"use client";

import {
  Box,
  BoxProps,
  ConditionalValue,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { alertSlotRecipe } from "../theme/components/alert";

export type AlertVariantProps = RecipeVariantProps<typeof alertSlotRecipe>;

export type BaseAlertProps = BoxProps &
  Exclude<ConditionalValue<any>, "variant"> &
  PropsWithChildren<AlertVariantProps> & {
    /** The color scheme and icon of the alert */
    variant:
      | "info"
      | "success"
      | "warning"
      | "alt-transport"
      | "error"
      | "service"
      | "global-deviation";
    /** The body content of the alert */
    children: React.ReactNode;
    /** The title of the alert */
    title?: string;
  };

/**
 * A base alert box component. Should only be composed by other alert components.
 */
export const BaseAlert = ({
  variant,
  children,
  ...boxProps
}: BaseAlertProps) => {
  const recipe = useSlotRecipe({ key: "alert" });
  const style = recipe({ variant });
  return (
    <Box css={style} {...boxProps}>
      {children}
    </Box>
  );
};
