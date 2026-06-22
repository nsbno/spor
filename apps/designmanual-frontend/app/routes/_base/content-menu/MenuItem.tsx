import { Box, Button, FlexProps, Stack } from "@vygruppen/spor-react";
import { LinkOutOutline18Icon } from "@vygruppen/spor-react/icons";
import { Link } from "react-router";

import { ArticleBadge } from "~/features/portable-text/components/ArticleBadge";
import { sendCustomEvent } from "~/utils/analytics/metabase";
import { ArticleBadgeType } from "~/utils/initialSanityData.server";

type MenuItemProps = FlexProps & {
  url: string;
  title?: string;
  badges?: ArticleBadgeType[];
  icon?: React.ReactNode;
};
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */

export const MenuItem = ({ url, title, badges, icon }: MenuItemProps) => {
  const isExternal = url.includes("http");
  return (
    <Box as="li" listStyle="none">
      <Button
        asChild
        variant="ghost"
        key={url}
        onClick={() => {
          sendCustomEvent({
            event: "content_menu_click",
            properties: {
              url: url,
              title: title,
            },
          });
        }}
        justifyContent="left"
        width="100%"
        size="sm"
        fontWeight="normal"
      >
        <Link
          to={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          <Stack direction="row" alignItems="center" width="100%">
            {icon && icon}
            {title}
            {badges && (
              <Stack direction="row">
                {badges.map((badge) => (
                  <ArticleBadge key={badge.badgeType} {...badge} size="sm" />
                ))}
              </Stack>
            )}
          </Stack>
          {isExternal && <LinkOutOutline18Icon />}
        </Link>
      </Button>
    </Box>
  );
};
