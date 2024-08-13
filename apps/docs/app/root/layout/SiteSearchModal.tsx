import { useLocation, useNavigate } from "@remix-run/react";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@vygruppen/spor-react";
import { matchSorter } from "match-sorter";
import { useEffect, useMemo, useRef, useState } from "react";
import { GlobalSearchInput, SearchResults } from "./components";
import { useMenu } from "~/utils/useMenu";

type SiteSearchModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

export const SiteSearchModal = ({
  isModalOpen,
  setIsModalOpen,
}: SiteSearchModalProps) => {
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
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(!isModalOpen)}
      closeOnOverlayClick={true}
      closeOnEsc={true}
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Search docs</ModalHeader>
        <ModalBody>
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
                onResultClick={() => setIsModalOpen(false)}
              />
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
