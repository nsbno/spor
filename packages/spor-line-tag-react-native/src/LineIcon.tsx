import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import {
  AltTransportFill18Icon,
  AltTransportFill24Icon,
  AltTransportFill30Icon,
  BusFill18Icon,
  BusFill24Icon,
  BusFill30Icon,
  ExpressBusFill18Icon,
  ExpressBusFill24Icon,
  ExpressBusFill30Icon,
  FerryFill18Icon,
  FerryFill24Icon,
  FerryFill30Icon,
  SubwayFill18Icon,
  SubwayFill24Icon,
  SubwayFill30Icon,
  TrainFill18Icon,
  TrainFill24Icon,
  TrainFill30Icon,
  TramFill18Icon,
  TramFill24Icon,
  TramFill30Icon,
  WalkFill18Icon,
  WalkFill24Icon,
  WalkFill30Icon,
} from "@vygruppen/spor-icon-react-native";
import {
  composeRestyleFunctions,
  createVariant,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@vygruppen/spor-theme-react-native";

type Variant = VariantProps<Theme, "lineIconVariants", "iconVariant">;
const iconVariant = createVariant({
  themeKey: "lineIconVariants",
  property: "iconVariant",
});

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  iconVariant,
]);

type IconVariantProps =
  | "local-train"
  | "region-train"
  | "region-express-train"
  | "long-distance-train"
  | "airport-express-train"
  | "vy-bus"
  | "local-bus"
  | "ferry"
  | "subway"
  | "tram"
  | "alt-transport"
  | "walk";

type LineIconSizeProps = "sm" | "md" | "lg";

type LineIconProps = Exclude<RestyleProps, "variant"> & {
  iconVariant: IconVariantProps;
  size?: LineIconSizeProps;
  type?: "travel" | "info";
};

const getIcon = (iconVariant: IconVariantProps, size: string) => {
  switch (iconVariant) {
    case "local-train" ||
      "region-train" ||
      "region-express-train" ||
      "long-distance-train" ||
      "airport-express-train":
      switch (size) {
        case "sm":
          return <TrainFill18Icon />;
        case "md":
          return <TrainFill24Icon />;
        case "lg":
          return <TrainFill30Icon />;
      }
    case "vy-bus":
      switch (size) {
        case "sm":
          return <ExpressBusFill18Icon />;
        case "md":
          return <ExpressBusFill24Icon />;
        case "lg":
          return <ExpressBusFill30Icon />;
      }
    case "local-bus":
      switch (size) {
        case "sm":
          return <BusFill18Icon />;
        case "md":
          return <BusFill24Icon />;
        case "lg":
          return <BusFill30Icon />;
      }
    case "ferry":
      switch (size) {
        case "sm":
          return <FerryFill18Icon />;
        case "md":
          return <FerryFill24Icon />;
        case "lg":
          return <FerryFill30Icon />;
      }
    case "subway":
      switch (size) {
        case "sm":
          return <SubwayFill18Icon />;
        case "md":
          return <SubwayFill24Icon />;
        case "lg":
          return <SubwayFill30Icon />;
      }
    case "tram":
      switch (size) {
        case "sm":
          return <TramFill18Icon />;
        case "md":
          return <TramFill24Icon />;
        case "lg":
          return <TramFill30Icon />;
      }
    case "alt-transport":
      switch (size) {
        case "sm":
          return <AltTransportFill18Icon />;
        case "md":
          return <AltTransportFill24Icon />;
        case "lg":
          return <AltTransportFill30Icon />;
      }
    case "walk":
      switch (size) {
        case "sm":
          return <WalkFill18Icon />;
        case "md":
          return <WalkFill24Icon />;
        case "lg":
          return <WalkFill30Icon />;
      }
    default:
      return null;
  }
};

export const LineIcon = ({
  iconVariant,
  size,
  type,
  ...props
}: LineIconProps) => {
  const { style } = useRestyle(restyleFunctions, { iconVariant, ...props });
  const icon = getIcon(iconVariant, size);

  return (
    <Box style={style as any} {...props}>
      {icon}
    </Box>
  );
};
