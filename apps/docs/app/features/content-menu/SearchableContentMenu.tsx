import { Box } from "@vygruppen/spor-react";
import { matchSorter } from "match-sorter";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContentMenu } from "./ContentMenu";
import { searchableMenuStructure } from "./menuStructure";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchableContentMenu = () => {
  const [query, setQuery] = React.useState("");
  const isSearchActive = query.length > 0;
  const navigate = useNavigate();
  const location = useLocation();
  const focusableRef = React.useRef<HTMLButtonElement>(null);

  const hits = React.useMemo(
    () =>
      isSearchActive
        ? matchSorter(searchableMenuStructure, query, {
            keys: ["title", "category", "keywords"],
          })
        : [],
    [query, isSearchActive]
  );

  // We reset the query whenever we navigate
  React.useEffect(() => {
    setQuery("");
  }, [location.pathname]);

  // If there's only a single item left in the search results,
  // we navigate to it whenever the user presses enter
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query && hits.length === 1) {
      navigate(hits[0].href);
      setQuery("");
    }
  };

  // If you press the down arrow, you should focus the first item in the list
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      focusableRef.current?.focus();
    }
  };

  return (
    <>
      <Box as="form" onSubmit={handleSubmit}>
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </Box>
      {isSearchActive ? (
        <SearchResults ref={focusableRef} hits={hits} query={query} />
      ) : (
        <ContentMenu ref={focusableRef} />
      )}
    </>
  );
};
