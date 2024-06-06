import { BoxProps } from "@chakra-ui/react";
import React from "react";
import { usePride } from "../pride";
import { VyLogoPride } from "./VyLogoPride";
import { VyLogoDefault } from "./VyLogoDefault";

export type VyLogoProps = {
  /** The color of the logo
   *
   * Use `"light"` when the logo is used on a light background.
   * Use `"dark"` when the logo is used on a dark background.
   */
  colorScheme: "light" | "dark";
} & BoxProps;
export const VyLogo = ({ colorScheme, ...boxProps }: VyLogoProps) => {
  const { isPride } = usePride();

  if (isPride) {
    return <VyLogoPride colorScheme={colorScheme} {...boxProps} />;
  }
  return <VyLogoDefault colorScheme={colorScheme} {...boxProps} />;
};
