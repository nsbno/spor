import { Button, slugify, Stack, Text } from "@vygruppen/spor-react";
import { Link } from "react-router";

import { useHeadingsMenu } from "~/utils/useHeadingsMenu";

export const RightSidebar = () => {
  const rawHeadingsMenu = useHeadingsMenu();
  const onThisPageLinks = rawHeadingsMenu;

  return (
    <Stack gap={1}>
      <Text fontWeight="bold" marginLeft={2}>
        On this page
      </Text>
      {onThisPageLinks?.map((section) => (
        <Button key={section.title} variant="ghost" size="sm" asChild>
          <Link to={`#${slugify(section.title)}`}>{section.title}</Link>
        </Button>
      ))}
    </Stack>
  );
};
