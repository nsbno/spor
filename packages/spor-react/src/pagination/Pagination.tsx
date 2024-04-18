import React from "react";
import { Center, createTexts, useTranslation, Flex, TextLink } from "..";
import {
  ListItem,
  UnorderedList,
  useMultiStyleConfig,
  Link,
} from "@chakra-ui/react";
import {
  DropdownLeftFill18Icon,
  DropdownRightFill18Icon,
} from "@vygruppen/spor-icon-react";

type PaginationProps = {
  /** Specify the total amount of pages */
  totalPages: number;
  /** Specify the currently selected page */
  selectedPage: number;
  /** Callback for when a page is clicked */
  onPageChange: (selected: number) => void;
};

/**
 * A pagination component is used to navigate between multiple pages.
 *
 * You specify the total amount of pages and the currently selected page.
 *
 * ```tsx
 * <Pagination
 *   totalPages={10}
 *   selectedPage={3}
 *   onPageChange={handlePageChange}
 * />
 * ```
 **/

export const Pagination = ({
  totalPages,
  selectedPage,
  onPageChange,
}: PaginationProps) => {
  const { t } = useTranslation();

  const style = useMultiStyleConfig("Pagination", { selectedPage });

  const hasPreviousPage = selectedPage > 1;
  const hasNextPage = selectedPage < totalPages;

  const renderPaginationButtons = () => {
    const displayPageNumbers = [];
    const maxVisiblePages = 8;
    if (totalPages <= maxVisiblePages) {
      displayPageNumbers.push(
        ...Array.from({ length: totalPages }, (_, i) => i + 1),
      );
    } else {
      if (selectedPage <= Math.floor(maxVisiblePages / 2) + 1) {
        // If selectedPage is near the beginning, display the first pages.
        displayPageNumbers.push(
          ...Array.from({ length: maxVisiblePages - 1 }, (_, i) => i + 1),
        );
        displayPageNumbers.push("...");
        displayPageNumbers.push(totalPages);
      } else if (selectedPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
        // If selectedPage is near the end, display the last pages.
        displayPageNumbers.push(1);
        displayPageNumbers.push("...");
        displayPageNumbers.push(
          ...Array.from(
            { length: maxVisiblePages - 1 },
            (_, i) => totalPages - maxVisiblePages + 2 + i,
          ),
        );
      } else {
        // Display pages with "..." in the middle.
        displayPageNumbers.push(1);
        displayPageNumbers.push("...");
        for (
          let i = selectedPage - Math.floor((maxVisiblePages - 3) / 2);
          i <= selectedPage + Math.floor((maxVisiblePages - 3) / 2);
          i++
        ) {
          displayPageNumbers.push(i);
        }
        displayPageNumbers.push("...");
        displayPageNumbers.push(totalPages);
      }
    }
    return displayPageNumbers.map((pageNumber, index) =>
      pageNumber === "..." ? (
        <ListItem key={index} sx={style.listItem}>
          <Center>...</Center>
        </ListItem>
      ) : (
        <Link
          key={index}
          as={ListItem}
          onClick={() => {
            if (pageNumber !== "...") {
              onPageChange(+pageNumber);
            }
          }}
          padding={pageNumber === "..." ? 0 : undefined}
          sx={pageNumber === selectedPage ? style.activeButton : style.link}
        >
          {pageNumber}
        </Link>
      ),
    );
  };

  return (
    <Flex as="nav" aria-label="pagination">
      <UnorderedList
        display="flex"
        listStyleType="none"
        gap={[0, 1]}
        padding={0}
        margin={0}
      >
        <ListItem aria-label={t(texts.previousPage)}>
          <TextLink
            onClick={() => onPageChange(selectedPage - 1)}
            sx={hasPreviousPage ? style.link : style.disabled}
          >
            <DropdownLeftFill18Icon sx={style.icon} />
          </TextLink>
        </ListItem>
        {renderPaginationButtons()}
        <ListItem aria-label={t(texts.nextPage)}>
          <TextLink
            onClick={() => onPageChange(selectedPage + 1)}
            sx={hasNextPage ? style.link : style.disabled}
          >
            <DropdownRightFill18Icon sx={style.icon} />
          </TextLink>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

const texts = createTexts({
  previousPage: {
    nb: "Forrige side",
    nn: "Førre side",
    en: "Previous page",
    sv: "Föregående sida",
  },
  nextPage: {
    nb: "Neste side",
    nn: "Neste side",
    en: "Next page",
    sv: "Nästa sida",
  },
});
