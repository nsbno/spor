import { Box } from "@vygruppen/spor-react";
import { SearchableContentMenu } from "~/routes/_base/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      display={["none", null, null, "block"]}
      as="nav"
      aria-label="content"
      flex="1"
      maxWidth="22rem"
      minWidth="18rem"
      px={1.5}
      py={2}
      borderRight="9px solid"
      borderRightColor="lightGrey"
    >
      <SearchableContentMenu />
    </Box>
  );
};
