import { Box } from "@vygruppen/spor-react";
import { SearchableContentMenu } from "~/routes/_base/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      display={["none", null, null, "flex"]}
      as="nav"
      aria-label="content"
      paddingX={1.5}
      paddingY={2}
      width={["100%", null, "20rem"]}
      position="relative"
    >
      <SearchableContentMenu />
    </Box>
  );
};
