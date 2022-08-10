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
  IconComponent,
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
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Size, Variant } from "./types";

type VariantStyling = {
  icons: Record<Size, IconComponent>;
  mainBackgroundColor: keyof Theme["colors"];
  accentBackgroundColor: keyof Theme["colors"];
  iconColor: "darkGrey" | "white";
  borderColor?: keyof Theme["colors"];
};

export const variantStyling: Record<Variant, VariantStyling> = {
  "local-train": {
    icons: { sm: TrainFill18Icon, md: TrainFill24Icon, lg: TrainFill30Icon },
    mainBackgroundColor: "linjetag.lokaltog",
    accentBackgroundColor: "linjetag.lokaltogLight",
    iconColor: "white",
  },
  "region-train": {
    icons: { sm: TrainFill18Icon, md: TrainFill24Icon, lg: TrainFill30Icon },
    mainBackgroundColor: "linjetag.regiontog",
    accentBackgroundColor: "linjetag.regiontogLight",
    iconColor: "white",
  },
  "region-express-train": {
    icons: { sm: TrainFill18Icon, md: TrainFill24Icon, lg: TrainFill30Icon },
    mainBackgroundColor: "linjetag.regionEkspress",
    accentBackgroundColor: "linjetag.regionEkspressLight",
    iconColor: "white",
  },
  "long-distance-train": {
    icons: { sm: TrainFill18Icon, md: TrainFill24Icon, lg: TrainFill30Icon },
    mainBackgroundColor: "linjetag.fjerntog",
    accentBackgroundColor: "linjetag.fjerntogLight",
    iconColor: "white",
  },
  "airport-express-train": {
    icons: { sm: TrainFill18Icon, md: TrainFill24Icon, lg: TrainFill30Icon },
    mainBackgroundColor: "linjetag.flytog",
    accentBackgroundColor: "linjetag.flytogLight",
    iconColor: "white",
  },
  "vy-bus": {
    icons: {
      sm: ExpressBusFill18Icon,
      md: ExpressBusFill24Icon,
      lg: ExpressBusFill30Icon,
    },
    mainBackgroundColor: "linjetag.vyBuss",
    accentBackgroundColor: "linjetag.vyBussLight",
    iconColor: "white",
  },
  "local-bus": {
    icons: { sm: BusFill18Icon, md: BusFill24Icon, lg: BusFill30Icon },
    mainBackgroundColor: "linjetag.lokalbuss",
    accentBackgroundColor: "linjetag.lokalbussLight",
    iconColor: "white",
  },
  ferry: {
    icons: { sm: FerryFill18Icon, md: FerryFill24Icon, lg: FerryFill30Icon },
    mainBackgroundColor: "linjetag.ferge",
    accentBackgroundColor: "linjetag.fergeLight",
    iconColor: "white",
  },
  subway: {
    icons: { sm: SubwayFill18Icon, md: SubwayFill24Icon, lg: SubwayFill30Icon },
    mainBackgroundColor: "linjetag.tbane",
    accentBackgroundColor: "linjetag.tbaneLight",
    iconColor: "white",
  },
  tram: {
    icons: { sm: TramFill18Icon, md: TramFill24Icon, lg: TramFill30Icon },
    mainBackgroundColor: "linjetag.trikk",
    accentBackgroundColor: "linjetag.trikkLight",
    iconColor: "white",
  },
  "alt-transport": {
    icons: {
      sm: AltTransportFill18Icon,
      md: AltTransportFill24Icon,
      lg: AltTransportFill30Icon,
    },
    mainBackgroundColor: "linjetag.altTransport",
    accentBackgroundColor: "linjetag.altTransportLight",
    iconColor: "darkGrey",
  },
  walk: {
    icons: { sm: WalkFill18Icon, md: WalkFill24Icon, lg: WalkFill30Icon },
    mainBackgroundColor: "white",
    accentBackgroundColor: "white",
    iconColor: "darkGrey",
    borderColor: "osloGrey",
  },
};
