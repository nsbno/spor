import { Box } from "@vygruppen/spor-react";
import React from "react";

import { ContentMenu } from "./ContentMenu";

export const SearchableContentMenu = () => {
  const focusableRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Box
      as="nav"
      width={"100%"}
      paddingBottom={3}
      paddingRight={3}
      alignSelf={"flex-start"}
    >
      <ContentMenu ref={focusableRef} />
    </Box>
  );
};
