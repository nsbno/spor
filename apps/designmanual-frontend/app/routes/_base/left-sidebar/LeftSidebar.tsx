import { Box } from "@vygruppen/spor-react";
import React from "react";

import { ContentMenu } from "../content-menu/ContentMenu";

export const LeftSidebar = ({ headerOffset }: { headerOffset: number }) => {
  const focusableRef = React.useRef<HTMLButtonElement>(null);
  const [refreshKey, setRefreshKey] = React.useState(0);

  const handleRefresh = () => {
    setRefreshKey((previous) => previous + 1);
  };
  return (
    <Box
      width={[null, null, null, "19rem"]}
      height={["100vh", null, null, `calc(100vh - ${headerOffset}px)`]}
      display={["none", null, null, "block"]}
      top={`${headerOffset}px`}
      alignSelf="flex-start"
      position="fixed"
      overflow="auto"
      transition="all .3s linear"
      paddingBottom="14rem"
    >
      <ContentMenu
        ref={focusableRef}
        refreshKey={refreshKey}
        handleRefresh={handleRefresh}
      />
    </Box>
  );
};
