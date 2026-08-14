import {
  IconComponent,
  InformationOutline24Icon,
  StarsOutline24Icon,
  TokensFill24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react";
import { Alert } from "@vygruppen/spor-react";

import { ArticleBadgeType } from "~/utils/initialSanityData.server";

import { ArticleBadgeProps } from "./ArticleBadge";

export const ArticleAlert = ({ badgeType, description }: ArticleBadgeType) => {
  const articleBadgeAlertVariant: Record<
    ArticleBadgeProps["badgeType"],
    "success" | "info" | "warning" | "critical"
  > = {
    new: "success",
    updated: "info",
    beta: "warning",
    deprecated: "critical",
  };
  const articleBadgeAlertIcon: Record<
    ArticleBadgeProps["badgeType"],
    IconComponent
  > = {
    new: StarsOutline24Icon,
    updated: InformationOutline24Icon,
    beta: TokensFill24Icon,
    deprecated: WarningOutline24Icon,
  };
  return (
    <Alert
      data-color={articleBadgeAlertVariant[badgeType]}
      icon={articleBadgeAlertIcon[badgeType]}
      role="status"
      aria-live="polite"
    >
      {description}
    </Alert>
  );
};
