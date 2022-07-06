import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import {
  AltTransportFill18Icon,
  AltTransportFill24Icon,
  AltTransportFill30Icon,
  BusFill18Icon,
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

type VariantProps =
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

type LineIconProps = {
  variant: VariantProps;
  size: "sm" | "md" | "lg";
  type: "travel" | "info";
};

const getIcon = (variant: VariantProps, size: string) => {
  switch (variant) {
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

export const LineIcon = ({ variant, size, ...props }: LineIconProps) => {
  const icon = getIcon(variant, size);
  return <Box>{icon}</Box>;
};
