import { IconData } from "./generate";

export const typeDefinitionTemplate = (iconsData: IconData[]) => {
  return `
// This file was auto-generated.
// Please do not change this file directly.
import type { BoxProps } from "@chakra-ui/react";
import type { ForwardRefExoticComponent } from "react";

export type IconComponent = ForwardRefExoticComponent<BoxProps>;

${iconsData
  .map(({ componentName }) => `export const ${componentName}: IconComponent;`)
  .join("\n")}
`;
};
