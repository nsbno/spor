import { forwardRef } from "@chakra-ui/react";
import { Box, Text } from "@vygruppen/spor-react";
import { MenuItem as MenuItemType } from "~/utils/initialSanityData.server";
import { MenuItem } from "./MenuItem";

export type SearchResultsProps = {
  query: string;
  hits: MenuItemType[];
};
/** Given a query, this view shows any hits in the menu structure */
export const SearchResults = forwardRef<SearchResultsProps, "button">(
  ({ query, hits }, ref) => {
    return (
      <Box
        marginTop={2}
        aria-live="polite"
        aria-label={`${hits.length || "No"} hit${
          hits.length !== 1 ? "s" : ""
        } for ${query}.`}
      >
        {hits
          .filter((item) => item.url)
          .map((item, index) => (
            <MenuItem
              ref={index === 0 ? ref : undefined}
              key={item.url}
              url={item.url}
              height={5}
            >
              {item.title}
            </MenuItem>
          ))}
        {hits.length === 0 && (
          <Text textAlign="center">No hits for "{query}"</Text>
        )}
      </Box>
    );
  },
);
