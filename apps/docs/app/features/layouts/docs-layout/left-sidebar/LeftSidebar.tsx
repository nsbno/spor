import { Box } from "@vygruppen/spor-react";
import React from "react";
import { ContentMenu } from "../content-menu/ContentMenu";
import { SearchInput } from "../content-menu/SearchInput";
import { SearchResults } from "../content-menu/SearchResults";

export const LeftSidebar = () => {
  const [query, setQuery] = React.useState("");
  const isSearchActive = query.length > 0;

  return (
    <Box
      display={["none", "block"]}
      as="nav"
      aria-label="content"
      flex="1"
      maxWidth="340px"
      px={1.5}
      py={2}
      borderRight="9px solid"
      borderRightColor="alias.lightGrey"
    >
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      {isSearchActive ? <SearchResults query={query} /> : <ContentMenu />}
    </Box>
  );
};
