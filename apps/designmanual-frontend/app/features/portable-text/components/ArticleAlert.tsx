import {
  IconComponent,
  InformationOutline24Icon,
  StarsOutline24Icon,
  TokensFill24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react";
import { Alert, AlertProps } from "@vygruppen/spor-react";

import { ArticleBadgeType } from "~/utils/initialSanityData.server";

import { ArticleBadgeProps } from "./ArticleBadge";

export const ArticleAlert = ({ badgeType, description }: ArticleBadgeType) => {
  const articleBadgeAlertVariant: Record<
    ArticleBadgeProps["badgeType"],
    AlertProps["variant"]
  > = {
    new: "success",
    updated: "info",
    beta: "important",
    deprecated: "error",
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
      variant={articleBadgeAlertVariant[badgeType]}
      icon={articleBadgeAlertIcon[badgeType]}
      role="status"
      aria-live="polite"
    >
      {description}
    </Alert>
  );
};
