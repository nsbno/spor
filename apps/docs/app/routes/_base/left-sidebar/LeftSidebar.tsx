import { Box } from "@vygruppen/spor-react";
import { SearchableContentMenu } from "~/routes/_base/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      display={["none", null, null, "block"]}
      as="nav"
      aria-label="content"
      minWidth="18rem"
      paddingX={1.5}
      paddingY={2}
    >
      <SearchableContentMenu />
    </Box>
  );
};
