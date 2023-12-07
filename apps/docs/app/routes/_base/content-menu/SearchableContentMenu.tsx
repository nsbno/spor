import { useLocation, useNavigate } from "@remix-run/react";
import { Box } from "@vygruppen/spor-react";
import { matchSorter } from "match-sorter";
import React from "react";
import { useMenu } from "~/utils/useMenu";
import { ContentMenu } from "./ContentMenu";
import { GlobalSearchInput } from "./GlobalSearchInput";
import { SearchResults } from "./SearchResults";

export const SearchableContentMenu = () => {
  const menu = useMenu("side-menu");
  const [query, setQuery] = React.useState("");
  const isSearchActive = query.length > 0;
  const navigate = useNavigate();
  const location = useLocation();
  const focusableRef = React.useRef<HTMLButtonElement>(null);
  const searchableMenuStructure = React.useMemo(
    () =>
      menu?.menuItems
        .filter((menuItem) => menuItem._type !== "divider" && menuItem.subItems)
        .flatMap((menuItem) => menuItem.subItems!) ?? [],
    [menu],
  );

  const hits = React.useMemo(
    () =>
      isSearchActive
        ? matchSorter(searchableMenuStructure, query, {
            keys: ["title", "tags"],
          })
        : [],
    [query, isSearchActive],
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
      navigate(hits[0].url);
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
    <Box as="nav" aria-label={isSearchActive ? "Search results" : "Content"}>
      <Box as="form" onSubmit={handleSubmit}>
        <GlobalSearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyUp}
          onReset={() => setQuery("")}
        />
      </Box>
      {isSearchActive ? (
        <SearchResults ref={focusableRef} hits={hits} query={query} />
      ) : (
        <ContentMenu ref={focusableRef} />
      )}
    </Box>
  );
};
