"use client";

import {
  Box,
  Pagination as ChakraPagination,
  createContext,
  usePaginationContext,
  useSlotRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import {
  DropdownRightOutline18Icon,
  DropdownLeftOutline18Icon,
} from "@vygruppen/spor-icon-react";
import { createTexts, List, ListItem, useTranslation } from "..";
import { ButtonVariantContext, PaginationRootProps } from "./types";

/**
 * A pagination component is used to navigate between multiple pages.
 *
 * Count is the total number of pages.
 * pageSize is the number of items per page.
 * defaultPage is the default page to show.
 * siblingCount is the number of sibling pages to show.
 *
 * ```tsx
 * <Pagination count={10} pageSize={1} defaultPage={1}>
 *  <PaginationPrevTrigger />
 *  <PaginationItems />
 *  <PaginationNextTrigger />
 * </Pagination>
 * ```
 **/

const [RootPropsProvider, useRootProps] = createContext<ButtonVariantContext>({
  name: "RootPropsProvider",
});

export const Pagination = React.forwardRef<HTMLDivElement, PaginationRootProps>(
  (props, ref) => {
    const { getHref, children, ...rest } = props;
    const recipe = useSlotRecipe({ key: "pagination" });
    const styles = recipe();

    return (
      <RootPropsProvider
        value={{
          getHref,
        }}
      >
        <ChakraPagination.Root
          ref={ref}
          type={getHref ? "link" : "button"}
          {...rest}
        >
          <List css={styles.list}>{children}</List>
        </ChakraPagination.Root>
      </RootPropsProvider>
    );
  },
);

export const PaginationEllipsis = React.forwardRef<
  HTMLDivElement,
  ChakraPagination.EllipsisProps
>((props, ref) => {
  return (
    <ListItem>
      <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
        <Box cursor="default">...</Box>
      </ChakraPagination.Ellipsis>
    </ListItem>
  );
});

export const PaginationItem = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.ItemProps
>((props, ref) => {
  const rootProps = useRootProps();
  const { t } = useTranslation();
  const { page, totalPages } = usePaginationContext();

  if (rootProps.getHref) {
    return (
      <ListItem>
        <ChakraPagination.Item
          as={props.as ?? "a"}
          {...{
            href: rootProps.getHref(props.value as number),
            to: rootProps.getHref(props.value as number),
          }}
          ref={ref}
          aria-label={t(texts.pageOf(props.value, totalPages))}
          {...props}
        >
          {props.value}
        </ChakraPagination.Item>
      </ListItem>
    );
  }

  return (
    <ListItem>
      <ChakraPagination.Item
        as={props.as ?? "button"}
        ref={ref}
        aria-label={t(texts.pageOf(props.value, totalPages))}
        aria-selected={page === props.value}
        {...props}
      >
        {props.value}
      </ChakraPagination.Item>
    </ListItem>
  );
});

export const PaginationPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.PrevTriggerProps
>((props, ref) => {
  const { page } = usePaginationContext();
  const recipe = useSlotRecipe({ key: "pagination" });
  const styles = recipe();
  const { t } = useTranslation();
  const rootProps = useRootProps();

  if (page <= 1) return null;

  if (rootProps.getHref) {
    return (
      <ListItem>
        <ChakraPagination.PrevTrigger
          as={props.as ?? "a"}
          asChild
          {...{
            href: rootProps.getHref(props.value as number),
            to: rootProps.getHref(props.value as number),
          }}
          ref={ref}
          css={styles.item}
          aria-label={t(texts.previousPage)}
          {...props}
        >
          <DropdownLeftOutline18Icon />
        </ChakraPagination.PrevTrigger>
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ChakraPagination.PrevTrigger
        ref={ref}
        asChild
        aria-label={t(texts.previousPage)}
        as={props.as || "button"}
        css={styles.item}
        {...props}
      >
        <DropdownLeftOutline18Icon />
      </ChakraPagination.PrevTrigger>
    </ListItem>
  );
});

export const PaginationNextTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.NextTriggerProps
>((props, ref) => {
  const { page, totalPages } = usePaginationContext();
  const recipe = useSlotRecipe({ key: "pagination" });
  const styles = recipe();
  const { t } = useTranslation();
  const rootProps = useRootProps();

  if (page >= totalPages) return null;

  if (rootProps.getHref) {
    return (
      <ListItem>
        <ChakraPagination.NextTrigger
          ref={ref}
          {...{
            href: rootProps.getHref(props.value as number),
            to: rootProps.getHref(props.value as number),
          }}
          css={styles.item}
          aria-label={t(texts.nextPage)}
          {...props}
        >
          <DropdownRightOutline18Icon />
        </ChakraPagination.NextTrigger>
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ChakraPagination.NextTrigger
        ref={ref}
        css={styles.item}
        aria-label={t(texts.nextPage)}
        as={props.as || "button"}
        {...props}
      >
        <DropdownRightOutline18Icon />
      </ChakraPagination.NextTrigger>
    </ListItem>
  );
});

export const PaginationItems = (
  props: React.HTMLAttributes<HTMLElement> & {},
) => {
  return (
    <ChakraPagination.Context>
      {({ pages }) =>
        pages.map((page, index) => {
          return page.type === "ellipsis" ? (
            <PaginationEllipsis
              key={`ellipsis-${index}`}
              index={index}
              {...props}
            />
          ) : (
            <PaginationItem
              key={`pagination-item-${page.value}`}
              value={page.value}
              type="page"
              {...props}
            />
          );
        })
      }
    </ChakraPagination.Context>
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
  pageOf: (page, totalPages) => {
    return {
      nb: `Side ${page} av ${totalPages}`,
      nn: `Side ${page} av ${totalPages}`,
      en: `Page ${page} of ${totalPages}`,
      sv: `Sida ${page} av ${totalPages}`,
    };
  },
});
