import { Box, Button, slugify, Stack, Text } from "@vygruppen/spor-react";
import { Link } from "react-router";

import { useHeadingsMenu } from "~/utils/useHeadingsMenu";

export const RightSidebar = () => {
  const rawHeadingsMenu = useHeadingsMenu();
  const onThisPageLinks = rawHeadingsMenu;

  return (
    <Stack gap={1} as="nav">
      <Text fontWeight="bold" marginLeft={2}>
        On this page
      </Text>
      <Stack gap={1} as="ol">
        {onThisPageLinks?.map((section) => (
          <Box as="li" key={section.title}>
            <Button variant="ghost" size="sm" asChild>
              <Link to={`#${slugify(section.title)}`}>{section.title}</Link>
            </Button>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
