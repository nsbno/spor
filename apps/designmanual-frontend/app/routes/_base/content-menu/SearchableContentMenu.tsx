import { Box } from "@vygruppen/spor-react";
import React from "react";

import { ContentMenu } from "./ContentMenu";

export const SearchableContentMenu = () => {
  const focusableRef = React.useRef<HTMLButtonElement>(null);
  const [refreshKey, setRefreshKey] = React.useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <Box
      as="nav"
      width={["90vw", null, null, "100%"]}
      padding={0}
      alignSelf={"flex-start"}
    >
      <ContentMenu
        ref={focusableRef}
        refreshKey={refreshKey}
        handleRefresh={handleRefresh}
      />
    </Box>
  );
};
