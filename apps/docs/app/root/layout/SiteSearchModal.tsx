import { DialogActionTrigger, DialogTitle } from "@chakra-ui/react";
import { useLocation, useNavigate } from "@remix-run/react";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  DialogBackdrop,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  IconButton,
} from "@vygruppen/spor-react";
import { matchSorter } from "match-sorter";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMenu } from "~/utils/useMenu";
import { GlobalSearchInput, SearchResults } from "./components";

type Props = {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
};

export const SiteSearchModal = ({ isOpen, onOpenChange }: Props) => {
  const menu = useMenu("side-menu");
  const [query, setQuery] = useState("");
  const isSearchActive = query.length > 0;
  const navigate = useNavigate();

  const location = useLocation();
  const focusableRef = useRef<HTMLButtonElement>(null);
  const searchableMenuStructure = useMemo(
    () =>
      menu?.menuItems
        .filter((menuItem) => menuItem._type !== "divider" && menuItem.subItems)
        .flatMap((menuItem) => menuItem.subItems!) ?? [],
    [menu],
  );

  const hits = useMemo(
    () =>
      isSearchActive
        ? matchSorter(searchableMenuStructure, query, {
            keys: ["title", "tags"],
          })
        : [],
    [query, isSearchActive],
  );

  // We reset the query whenever we navigate
  useEffect(() => {
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
    <DialogRoot
      open={isOpen}
      onOpenChange={({ open }) => onOpenChange(open)}
      size="xl"
    >
      <DialogBackdrop />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search docs</DialogTitle>
          <DialogActionTrigger>
            <IconButton
              icon={<CloseOutline24Icon />}
              variant="ghost"
              size="md"
              aria-label="Search documentation"
              onClick={() => onOpenChange(!isOpen)}
            />
          </DialogActionTrigger>
        </DialogHeader>
        <DialogBody>
          <Box as="form" onSubmit={handleSubmit}>
            <GlobalSearchInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleKeyUp}
              onReset={() => setQuery("")}
            />
            {isSearchActive && (
              <SearchResults
                ref={focusableRef}
                hits={hits}
                query={query}
                onResultClick={() => onOpenChange(false)}
              />
            )}
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};
