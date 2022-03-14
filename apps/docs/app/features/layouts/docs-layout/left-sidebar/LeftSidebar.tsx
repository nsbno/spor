import { Box } from "@vygruppen/spor-react";
import React from "react";
import { SearchableContentMenu } from "~/features/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      display={["none", "block"]}
      as="nav"
      aria-label="content"
      flex="1"
      maxWidth="340px"
      px={1.5}
      py={2}
      borderRight="9px solid"
      borderRightColor="alias.lightGrey"
    >
      <SearchableContentMenu />
    </Box>
  );
};
