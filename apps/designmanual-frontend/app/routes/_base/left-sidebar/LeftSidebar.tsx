import { Box } from "@vygruppen/spor-react";

import { SearchableContentMenu } from "~/routes/_base/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      width={["100%", null, null, "20rem"]}
      minWidth={["100%", null, null, "20rem"]}
      position="sticky"
      top="0"
    >
      <SearchableContentMenu />
    </Box>
  );
};
