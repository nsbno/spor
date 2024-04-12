import React from "react";
import {
  Button,
  ButtonGroup,
  Center,
  IconButton,
  createTexts,
  useTranslation,
} from "..";
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

  if (selectedPage === 0) {
    selectedPage = 1;
  }

  if (totalPages <= 1) {
    return null;
  }

  const displayPageNumbers = [];
  const maxVisiblePages = 6;

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
  return (
    <ButtonGroup spacing={[0, 1]}>
      <IconButton
        aria-label={t(texts.previousPage)}
        icon={<DropdownLeftFill18Icon />}
        variant="ghost"
        visibility={selectedPage === 1 ? "hidden" : "visible"}
        onClick={() => onPageChange(selectedPage - 1)}
      />
      {displayPageNumbers.map((pageNumber, index) =>
        pageNumber === "..." ? (
          <Center key={index}>...</Center>
        ) : (
          <Button
            key={index}
            size="xs"
            padding={pageNumber === "..." ? 0 : undefined}
            variant={pageNumber === selectedPage ? "tertiary" : "ghost"}
            onClick={() => {
              if (pageNumber !== "...") {
                onPageChange(+pageNumber);
              }
            }}
            backgroundColor={selectedPage === pageNumber ? "black" : "white"}
            fontWeight={selectedPage === pageNumber ? "bold" : "normal"}
          >
            {pageNumber}
          </Button>
        ),
      )}
      <IconButton
        aria-label={t(texts.nextPage)}
        icon={<DropdownRightFill18Icon />}
        variant="ghost"
        visibility={selectedPage === totalPages ? "hidden" : "visible"}
        onClick={() => onPageChange(selectedPage + 1)}
      />
    </ButtonGroup>
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
