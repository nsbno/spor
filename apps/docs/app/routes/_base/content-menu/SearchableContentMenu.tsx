import { Box } from "@vygruppen/spor-react";
import React from "react";
import { ContentMenu } from "./ContentMenu";

export const SearchableContentMenu = () => {
  const focusableRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Box
      as="nav"
      aria-label={"Content"}
      width={"100%"}
      position="sticky"
      top="7.15rem"
      overflowY="scroll"
      height="90vh"
      paddingBottom={3}
      paddingRight={3}
    >
      <ContentMenu ref={focusableRef} />
    </Box>
  );
};
