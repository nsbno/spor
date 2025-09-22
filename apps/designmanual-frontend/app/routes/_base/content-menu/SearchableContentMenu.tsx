import { Box } from "@vygruppen/spor-react";
import React from "react";

import { ContentMenu } from "./ContentMenu";

export const SearchableContentMenu = ({
  closeMobileMenu,
}: {
  closeMobileMenu: () => void;
}) => {
  const focusableRef = React.useRef<HTMLButtonElement>(null);
  const [refreshKey, setRefreshKey] = React.useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <Box
      as="nav"
      width={["100vw", null, null, "100%"]}
      paddingRight={[6, null, 3]}
      alignSelf={"flex-start"}
    >
      <ContentMenu
        ref={focusableRef}
        refreshKey={refreshKey}
        handleRefresh={handleRefresh}
        closeMobileMenu={closeMobileMenu}
      />
    </Box>
  );
};
