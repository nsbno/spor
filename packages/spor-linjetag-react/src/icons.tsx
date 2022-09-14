import { Box } from "@chakra-ui/react";
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
} from "@vygruppen/spor-icon-react";
import React from "react";
import type { Size, Variant } from "./types";

const icons: Record<Variant, Record<Size, React.ComponentType>> = {
  "local-train": {
    sm: TrainFill18Icon,
    md: TrainFill24Icon,
    lg: TrainFill30Icon,
  },
  "region-train": {
    sm: TrainFill18Icon,
    md: TrainFill24Icon,
    lg: TrainFill30Icon,
  },
  "region-express-train": {
    sm: TrainFill18Icon,
    md: TrainFill24Icon,
    lg: TrainFill30Icon,
  },
  "long-distance-train": {
    sm: TrainFill18Icon,
    md: TrainFill24Icon,
    lg: TrainFill30Icon,
  },
  "airport-express-train": {
    sm: TrainFill18Icon,
    md: TrainFill24Icon,
    lg: TrainFill30Icon,
  },
  "vy-bus": {
    sm: ExpressBusFill18Icon,
    md: ExpressBusFill24Icon,
    lg: ExpressBusFill30Icon,
  },
  "local-bus": { sm: BusFill18Icon, md: BusFill24Icon, lg: BusFill30Icon },
  ferry: { sm: FerryFill18Icon, md: FerryFill24Icon, lg: FerryFill30Icon },
  subway: { sm: SubwayFill18Icon, md: SubwayFill24Icon, lg: SubwayFill30Icon },
  tram: { sm: TramFill18Icon, md: TramFill24Icon, lg: TramFill30Icon },
  "alt-transport": {
    sm: AltTransportFill18Icon,
    md: AltTransportFill24Icon,
    lg: AltTransportFill30Icon,
  },
  walk: { sm: WalkFill18Icon, md: WalkFill24Icon, lg: WalkFill30Icon },
};

type GetCorrectIconArgs = {
  variant: Variant;
  size: Size;
};
export const getCorrectIcon = ({ variant, size }: GetCorrectIconArgs) => {
  return icons[variant]?.[size] ?? Box;
};
