import React from "react";
import { ContentMenu } from "./ContentMenu";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchableContentMenu = () => {
  const [query, setQuery] = React.useState("");
  const isSearchActive = query.length > 0;

  return (
    <>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      {isSearchActive ? <SearchResults query={query} /> : <ContentMenu />}
    </>
  );
};
