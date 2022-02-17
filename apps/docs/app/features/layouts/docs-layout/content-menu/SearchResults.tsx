import { Box } from "@vygruppen/spor-react";
import React, { useMemo } from "react";
import { searchableMenuStructure } from "../content-menu/menuStructure";
import { MenuItem } from "./MenuItem";

export type SearchResultsProps = { query: string };
/** Given a query, this view shows any hits in the menu structure */
export const SearchResults = ({ query }: SearchResultsProps) => {
  const hits = useMemo(
    () =>
      searchableMenuStructure.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().startsWith(query.toLowerCase())
      ),
    [query]
  );
  return (
    <Box mt={2}>
      {hits.map((item) => (
        <MenuItem
          key={item.href}
          href={item.href}
          title={`${item.category}: ${item.title}`}
          height={5}
        />
      ))}
    </Box>
  );
};
