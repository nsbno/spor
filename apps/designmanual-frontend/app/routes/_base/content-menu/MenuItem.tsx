import { Box, Button, FlexProps } from "@vygruppen/spor-react";
import { Link } from "react-router";

import { sendCustomEvent } from "~/utils/analytics/metabase";

type MenuItemProps = FlexProps & {
  url: string;
  title?: string;
};
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */

export const MenuItem = ({ url, title }: MenuItemProps) => {
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
          {title}
        </Link>
      </Button>
    </Box>
  );
};
