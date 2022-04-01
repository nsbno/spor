import { forwardRef } from "@chakra-ui/react";
import { Box, Text } from "@vygruppen/spor-react";
import { MenuItem } from "./MenuItem";

export type SearchResultsProps = {
  query: string;
  hits: {
    category: string;
    title: string;
    href: string;
    isAvailable?: boolean;
  }[];
};
/** Given a query, this view shows any hits in the menu structure */
export const SearchResults = forwardRef<SearchResultsProps, "button">(
  ({ query, hits }, ref) => {
    const firstFocusableIndex = hits.findIndex((item) => item.isAvailable);
    return (
      <Box mt={2}>
        {hits.map((item, index) => (
          <MenuItem
            ref={index === firstFocusableIndex ? ref : undefined}
            key={item.href}
            href={item.href}
            height={5}
            isDisabled={!item.isAvailable}
          >
            {item.category}: {item.title}
          </MenuItem>
        ))}
        {hits.length === 0 && (
          <Text textAlign="center">Ingen treff på "{query}"</Text>
        )}
      </Box>
    );
  }
);
