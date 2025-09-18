import { Box } from "@vygruppen/spor-react";

import { SearchableContentMenu } from "~/routes/_base/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      width={["100vw", null, null, "20rem"]}
      height={["100vh", null, null, "auto"]}
      minWidth={["100%", null, null, "20rem"]}
      position={["absolute", null, null, "sticky"]}
      top="0"
      display={["none", null, null, "flex"]}
    >
      <SearchableContentMenu />
    </Box>
  );
};
