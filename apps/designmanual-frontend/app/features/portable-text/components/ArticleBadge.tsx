import {
  DeleteCircleOutline18Icon,
  IconComponent,
  NightOutline18Icon,
  StarsOutline18Icon,
  UpdateOutline18Icon,
} from "@vygruppen/spor-icon-react";
import { Badge, BadgeProps } from "@vygruppen/spor-react";

import { ArticleBadgeType } from "~/utils/initialSanityData.server";

type ArticleBadgeProps = Omit<ArticleBadgeType, "description">;

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
    updated: UpdateOutline18Icon,
    beta: NightOutline18Icon,
    deprecated: DeleteCircleOutline18Icon,
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
