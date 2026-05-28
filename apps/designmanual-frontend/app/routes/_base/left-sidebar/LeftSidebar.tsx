import { Box } from "@vygruppen/spor-react";

import { SearchableContentMenu } from "~/routes/_base/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      width={["100vw", null, null, "20rem"]}
      maxHeight={[
        "100vh",
        null,
        null,
        "calc(100vh - var(--header-height, 0px) - var(--footer-height, 0px))",
      ]}
      minWidth={["100%", null, null, "20rem"]}
      overflowY={["auto", null, null, "auto"]}
      display={["none", null, null, "block"]}
    >
      <SearchableContentMenu />
    </Box>
  );
};
