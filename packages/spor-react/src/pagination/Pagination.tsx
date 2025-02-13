"use client";

import {
  Box,
  Pagination as ChakraPagination,
  PaginationRoot as ChakraPaginationRoot,
  Text,
  createContext,
  usePaginationContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import {
  DropdownRightOutline18Icon,
  DropdownLeftOutline18Icon,
} from "@vygruppen/spor-icon-react";
import { forwardRef } from "react";
import { createTexts, List, ListItem, useTranslation } from "..";

interface ButtonVariantContext {
  getHref?: (page: number) => string;
}

const [RootPropsProvider] = createContext<ButtonVariantContext>({
  name: "RootPropsProvider",
});

export interface PaginationProps
  extends Omit<ChakraPagination.RootProps, "type"> {
  getHref?: (page: number) => string;
}
/**
 * A pagination component is used to navigate between multiple pages.
 *
 * Count is the total number of pages.
 * pageSize is the number of items per page.
 * defaultPage is the default page to show.
 * siblingCount is the number of sibling pages to show.
 *
 * ```tsx
 * <Pagination
 *    count={10}
 *     pageSize={1}
 *     defaultPage={1}
 *     siblingCount={2}
 *     >
 * </Pagination>
 * ```
 **/

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination(props, ref) {
    const { getHref, as, ...rest } = props;
    const recipe = useSlotRecipe({ key: "pagination" });
    const styles = recipe();
    return (
      <RootPropsProvider
        value={{
          getHref,
        }}
      >
        <ChakraPaginationRoot ref={ref} {...rest} type="link">
          <List css={styles.list}>
            <PaginationPrevTrigger as={as} />
            <PaginationItems as={as} />
            <PaginationNextTrigger as={as} />
          </List>
        </ChakraPaginationRoot>
      </RootPropsProvider>
    );
  },
);

export const PaginationEllipsis = React.forwardRef<
  HTMLDivElement,
  ChakraPagination.EllipsisProps
>(function PaginationEllipsis(props, ref) {
  return (
    <ListItem>
      <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
        <Box as={props.as || "a"}>...</Box>
      </ChakraPagination.Ellipsis>
    </ListItem>
  );
});

export const PaginationItem = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.ItemProps
>(function PaginationItem(props, ref) {
  const { page, totalPages } = usePaginationContext();
  const recipe = useSlotRecipe({ key: "pagination" });
  const styles = recipe();
  const { t } = useTranslation();

  return (
    <ListItem>
      <ChakraPagination.Item asChild ref={ref} {...props}>
        <Box
          css={props.value === page ? styles.activeButton : styles.listItem}
          aria-label={`${t(texts.page)} ${props.value} ${t(texts.of)} ${totalPages}`}
          as={props.as || "a"}
        >
          {props.value}
        </Box>
      </ChakraPagination.Item>
    </ListItem>
  );
});
export const PaginationPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.PrevTriggerProps
>(function PaginationPrevTrigger(props, ref) {
  const { page } = usePaginationContext();
  const recipe = useSlotRecipe({ key: "pagination" });
  const styles = recipe();
  const { t } = useTranslation();

  if (page <= 1) {
    return null;
  }
  return (
    <ListItem>
      <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
        <Box
          css={styles.listItem}
          aria-label={t(texts.previousPage)}
          as={props.as || "a"}
        >
          <DropdownLeftOutline18Icon />
        </Box>
      </ChakraPagination.PrevTrigger>
    </ListItem>
  );
});

export const PaginationNextTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.NextTriggerProps
>(function PaginationNextTrigger(props, ref) {
  const { page, totalPages } = usePaginationContext();
  const recipe = useSlotRecipe({ key: "pagination" });
  const styles = recipe();
  const { t } = useTranslation();

  if (page >= totalPages) {
    return null;
  }

  return (
    <ListItem>
      <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
        <Box
          css={styles.listItem}
          aria-label={t(texts.nextPage)}
          as={props.as || "a"}
        >
          <DropdownRightOutline18Icon css={styles.icon} />
        </Box>
      </ChakraPagination.NextTrigger>
    </ListItem>
  );
});
export const PaginationItems = (
  props: React.HTMLAttributes<HTMLElement> & {
    as: React.ElementType | undefined;
    getHref?: (page: number) => string;
  },
) => {
  return (
    <ChakraPagination.Context>
      {({ pages }) =>
        pages.map((page, index) => {
          return page.type === "ellipsis" ? (
            <PaginationEllipsis key={index} index={index} {...props} />
          ) : (
            <PaginationItem
              key={index}
              type="page"
              value={page.value}
              {...props}
            />
          );
        })
      }
    </ChakraPagination.Context>
  );
};

export const PaginationPageText = forwardRef<HTMLDivElement>(
  function PaginationPageText(props, ref) {
    const { page, totalPages, pageRange, count } = usePaginationContext();
    const content = React.useMemo(() => {
      return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`;
    }, [page, totalPages, pageRange, count]);

    return (
      <Text fontWeight="medium" ref={ref}>
        {content}
      </Text>
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
  page: {
    nb: "Side",
    nn: "Side",
    en: "Page",
    sv: "Sida",
  },
  of: {
    nb: "av",
    nn: "av",
    en: "of",
    sv: "av",
  },
});
