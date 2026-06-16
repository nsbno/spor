import {
  IconComponent,
  InformationOutline18Icon,
  StarsOutline18Icon,
  TokensOutline18Icon,
  WarningOutline18Icon,
} from "@vygruppen/spor-icon-react";
import { Badge, BadgeProps } from "@vygruppen/spor-react";

import { ArticleBadgeType } from "~/utils/initialSanityData.server";

export type ArticleBadgeProps = Omit<ArticleBadgeType, "description">;

export const ArticleBadge = ({
  badgeType,
  ...rest
}: ArticleBadgeProps & BadgeProps) => {
  const badgeColorMap: Record<
    ArticleBadgeProps["badgeType"],
    | "green"
    | "blue"
    | "yellow"
    | "red"
    | "neutral"
    | "grey"
    | "cream"
    | "orange"
    | "brightRed"
    | undefined
  > = {
    new: "green",
    updated: "blue",
    beta: "yellow",
    deprecated: "red",
  };
  const badgeTextMap = {
    new: "New",
    updated: "Updated",
    beta: "Beta",
    deprecated: "Deprecated",
  };
  const badgeIconMap: Record<ArticleBadgeProps["badgeType"], IconComponent> = {
    new: StarsOutline18Icon,
    updated: InformationOutline18Icon,
    beta: TokensOutline18Icon,
    deprecated: WarningOutline18Icon,
  };

  return (
    <Badge
      colorPalette={badgeColorMap[badgeType]}
      {...rest}
      icon={badgeIconMap[badgeType]}
    >
      {badgeTextMap[badgeType]}
    </Badge>
  );
};
