import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import React from "react";
import { LineIcon } from "./LineIcon";

type VariantProps =
  | "local-train"
  | "region-train"
  | "region-express-train"
  | "long-distance-train"
  | "airport-express-train"
  | "vy-bus"
  | "local-bus"
  | "ferry"
  | "metro"
  | "tram"
  | "alt-transport"
  | "walk";

type DeviationProps =
  | "critical"
  | "important-outline"
  | "important"
  | "info"
  | "unavailable";

type SizeProps = "sm" | "md" | "lg";

type LineTagProps = {
  variant?: VariantProps;
  children?: string;
  lineNumber?: string;
  deviation?: DeviationProps;
  size?: SizeProps;
};
export const LineTag = ({ children, lineNumber, ...props }: LineTagProps) => {
  return (
    <Box>
      <LineIcon variant="vy-bus" size="lg" type="lg-travel"></LineIcon>
    </Box>
  );
};
