"use client";
import React, { forwardRef } from "react";
import {
  Center,
  createTexts,
  useTranslation,
  Flex,
  TextLink,
} from "..";
import {
  Link,
  useSlotRecipe,
  Box,
  RecipeVariantProps,
} from "@chakra-ui/react";
import {
  DropdownLeftFill18Icon,
  DropdownRightFill18Icon,
} from "@vygruppen/spor-icon-react";
import { paginationSlotRecipe } from "../theme/slot-recipes/pagination";

type PaginationVariantProps = RecipeVariantProps<typeof paginationSlotRecipe>;

type PaginationProps = PaginationVariantProps & {
  /** Specify the total amount of pages */
  totalPages: number;
  /** Specify the currently selected page */
  selectedPage: number;
  /** Callback for when a page is clicked */
  onPageChange: (selected: number) => void;
  variant?: "core" | "floating";
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

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ totalPages, selectedPage, onPageChange, variant = "core" }, ref) => {
    const { t } = useTranslation();

    const recipe = useSlotRecipe({ recipe: paginationSlotRecipe });
    const styles = recipe({ variant });

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
          <Box as="li" key={index} css={styles.listItem}>
            <Center>...</Center>
          </Box>
        ) : (
          <Link
            key={index}
            as={Box}
            onClick={() => {
              if (pageNumber !== "...") {
                onPageChange(+pageNumber);
              }
            }}
            padding={pageNumber === "..." ? 0 : undefined}
            css={pageNumber === selectedPage ? styles.activeButton : styles.link}
          >
            {pageNumber}
          </Link>
        ),
      );
    };

    return (
      <Flex as="nav" aria-label="pagination" ref={ref}>
        <Box
          as="ul"
          display="flex"
          listStyleType="none"
          gap={[0, 1]}
          padding={0}
          margin={0}
        >
          <Box as="li" aria-label={t(texts.previousPage)}>
            <TextLink
              onClick={() => onPageChange(selectedPage - 1)}
              css={hasPreviousPage ? styles.link : styles.disabled}
            >
              <DropdownLeftFill18Icon css={styles.icon} />
            </TextLink>
          </Box>
          {renderPaginationButtons()}
          <Box as="li" aria-label={t(texts.nextPage)}>
            <TextLink
              onClick={() => onPageChange(selectedPage + 1)}
              css={hasNextPage ? styles.link : styles.disabled}
            >
              <DropdownRightFill18Icon css={styles.icon} />
            </TextLink>
          </Box>
        </Box>
      </Flex>
    );
  },
);

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