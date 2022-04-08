import { forwardRef } from "@chakra-ui/react";
import { Box, Text } from "@vygruppen/spor-react";
import { MenuItem as MenuItemType } from "~/utils/menu.server";
import { MenuItem } from "./MenuItem";

export type SearchResultsProps = {
  query: string;
  hits: MenuItemType[];
};
/** Given a query, this view shows any hits in the menu structure */
export const SearchResults = forwardRef<SearchResultsProps, "button">(
  ({ query, hits }, ref) => {
    return (
      <Box mt={2}>
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
          <Text textAlign="center">Ingen treff på "{query}"</Text>
        )}
      </Box>
    );
  }
);
