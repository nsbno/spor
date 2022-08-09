import {
  BackgroundColorProps,
  composeRestyleFunctions,
  createVariant,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import { Language, useTranslation } from "@vygruppen/spor-i18n-react";
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
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import React from "react";

type Variant = VariantProps<Theme, "lineIconVariants", "variant">;
const variant = createVariant({
  themeKey: "lineIconVariants",
});

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  variant,
]);

type VariantType =
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

const texts: Record<VariantType, Record<Language, string>> = {
  "local-train": {
    nb: "Lokaltog",
    sv: "",
    en: "Local train",
  },
  "region-train": {
    nb: "Regiontog",
    sv: "",
    en: "Region train",
  },
  "region-express-train": {
    nb: "Ekspress regionstog",
    sv: "",
    en: "Express region train",
  },
  "long-distance-train": {
    nb: "Langtidsstog",
    sv: "",
    en: "Long distance train",
  },
  "airport-express-train": {
    nb: "Flytog",
    sv: "",
    en: "Airport express train",
  },
  "vy-bus": {
    nb: "Vy-buss",
    sv: "Vy-buss",
    en: "Vy bus",
  },
  "local-bus": {
    nb: "Lokalbuss",
    sv: "",
    en: "Local bus",
  },
  ferry: {
    nb: "Ferge",
    sv: "",
    en: "Ferry",
  },
  subway: {
    nb: "T-bane",
    sv: "",
    en: "Subway",
  },
  tram: {
    nb: "Trikk",
    sv: "",
    en: "Tram",
  },
  "alt-transport": {
    nb: "Alternativ transport",
    sv: "",
    en: "Alternative transport",
  },
  walk: {
    nb: "Gange",
    sv: "",
    en: "Walk",
  },
};

type Size = "sm" | "md" | "lg";
type IconType = "travel" | "info";

type LineIconProps = RestyleProps & {
  variant: VariantType;
  size: Size;
  lineIconType: IconType;
  iconColor?: string;
  accessibilityLabel?: string;
};

function isTrain(variant: VariantType) {
  return (
    variant === "local-train" ||
    variant === "region-train" ||
    variant === "region-express-train" ||
    variant === "long-distance-train" ||
    variant === "airport-express-train"
  );
}

const getIcon = (variant: VariantType, size: Size, iconColor: string) => {
  if (isTrain(variant)) {
    switch (size) {
      case "sm":
        return <TrainFill18Icon color={iconColor} />;
      case "md":
        return <TrainFill24Icon color={iconColor} />;
      case "lg":
        return <TrainFill30Icon color={iconColor} />;
    }
  } else {
    switch (variant) {
      case "vy-bus":
        switch (size) {
          case "sm":
            return <ExpressBusFill18Icon color={iconColor} />;
          case "md":
            return <ExpressBusFill24Icon color={iconColor} />;
          case "lg":
            return <ExpressBusFill30Icon color={iconColor} />;
        }
      case "local-bus":
        switch (size) {
          case "sm":
            return <BusFill18Icon color={iconColor} />;
          case "md":
            return <BusFill24Icon color={iconColor} />;
          case "lg":
            return <BusFill30Icon color={iconColor} />;
        }
      case "ferry":
        switch (size) {
          case "sm":
            return <FerryFill18Icon color={iconColor} />;
          case "md":
            return <FerryFill24Icon color={iconColor} />;
          case "lg":
            return <FerryFill30Icon color={iconColor} />;
        }
      case "subway":
        switch (size) {
          case "sm":
            return <SubwayFill18Icon color={iconColor} />;
          case "md":
            return <SubwayFill24Icon color={iconColor} />;
          case "lg":
            return <SubwayFill30Icon color={iconColor} />;
        }
      case "tram":
        switch (size) {
          case "sm":
            return <TramFill18Icon color={iconColor} />;
          case "md":
            return <TramFill24Icon color={iconColor} />;
          case "lg":
            return <TramFill30Icon color={iconColor} />;
        }
      case "alt-transport":
        switch (size) {
          case "sm":
            return <AltTransportFill18Icon color={iconColor} />;
          case "md":
            return <AltTransportFill24Icon color={iconColor} />;
          case "lg":
            return <AltTransportFill30Icon color={iconColor} />;
        }
      case "walk":
        switch (size) {
          case "sm":
            return <WalkFill18Icon color={iconColor} />;
          case "md":
            return <WalkFill24Icon color={iconColor} />;
          case "lg":
            return <WalkFill30Icon color={iconColor} />;
        }
      default:
        return null;
    }
  }
};

export const LineIcon = ({
  variant,
  size,
  lineIconType,
  iconColor = "white",
  accessibilityLabel,
  ...props
}: LineIconProps) => {
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...props,
  });
  const iconType = `${size}-${lineIconType}`;
  const icon = getIcon(variant, size, iconColor);
  const { t } = useTranslation();

  return (
    <Box
      style={[style as any, getIconStyle(iconType)]}
      accessibilityLabel={
        accessibilityLabel || t(texts[variant as VariantType])
      }
      {...props}
    >
      {icon}
    </Box>
  );
};

const getIconStyle = (iconType: string) => {
  switch (iconType) {
    case "sm-travel":
      return { padding: 3, borderRadius: 6 };
    case "md-travel":
      return { padding: 3, borderRadius: 9 };
    case "lg-travel":
      return { padding: 3, borderRadius: 9 };
    case "sm-info":
      return { padding: 6, borderRadius: 9 };
    case "md-info":
      return { padding: 6, borderRadius: 9 };
    case "lg-info":
      return { padding: 6, borderRadius: 12 };
    default:
      return null;
  }
};
