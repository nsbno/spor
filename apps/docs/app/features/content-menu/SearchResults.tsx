import { Box, Text } from "@vygruppen/spor-react";
import { matchSorter } from "match-sorter";
import React from "react";
import { searchableMenuStructure } from "../content-menu/menuStructure";
import { MenuItem } from "./MenuItem";

export type SearchResultsProps = { query: string };
/** Given a query, this view shows any hits in the menu structure */
export const SearchResults = ({ query }: SearchResultsProps) => {
  const hits = matchSorter(searchableMenuStructure, query, {
    keys: ["title", "category", "keywords"],
  });
  return (
    <Box mt={2}>
      {hits.map((item) => (
        <MenuItem key={item.href} href={item.href} height={5}>
          {item.category}: {item.title}
        </MenuItem>
      ))}
      {hits.length === 0 && (
        <Text textAlign="center">Ingen treff på "{query}"</Text>
      )}
    </Box>
  );
};
