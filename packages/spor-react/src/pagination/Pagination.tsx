"use client";

import {
  Box,
  Pagination as ChakraPagination,
  PaginationItem as ChakraPaginationItem,
  PaginationEllipsis as ChakraPaginationEllipsis,
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
import type { ButtonProps } from "@chakra-ui/react";

interface ButtonVariantContext {
  size: ButtonProps["size"];
  getHref?: (page: number) => string;
  itemAs?: React.ElementType;
}

const [RootPropsProvider, useRootProps] = createContext<ButtonVariantContext>({
  name: "RootPropsProvider",
});

export interface PaginationProps
  extends Omit<ChakraPagination.RootProps, "type" | "translations"> {
  getHref?: (page: number) => string;
  itemAs?: React.ElementType;
}

export interface PaginationRootProps
  extends Omit<ChakraPagination.RootProps, "type"> {
  size?: ButtonProps["size"];
  getHref?: (page: number) => string;
  itemAs?: React.ElementType;
}

export const PaginationRoot = React.forwardRef<
  HTMLDivElement,
  PaginationRootProps
>(function PaginationRoot(props, ref) {
  const { size = "sm", getHref, itemAs, ...rest } = props;

  return (
    <RootPropsProvider
      value={{
        size,
        getHref,
        itemAs: itemAs ?? "a",
      }}
    >
      <ChakraPagination.Root
        ref={ref}
        type={getHref ? "link" : "button"}
        {...rest}
      />
    </RootPropsProvider>
  );
});

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
    let { as, ...rest } = props;
    const recipe = useSlotRecipe({ key: "pagination" });
    const styles = recipe();

    console.log("Pagination", props);

    return (
      <PaginationRoot ref={ref} {...rest}>
        <List css={styles.list}>
          <PaginationPrevTrigger as={as} />
          <PaginationItems />
          <PaginationNextTrigger as={as} />
        </List>
      </PaginationRoot>
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
  const { page } = usePaginationContext();
  const rootProps = useRootProps();

  const recipe = useSlotRecipe({ key: "pagination" });
  const styles = recipe();

  if (rootProps.getHref) {
    return (
      <ListItem>
        <ChakraPagination.Item asChild ref={ref} {...props}>
          <Box
            css={props.value === page ? styles.activeButton : styles.listItem}
            as={rootProps.itemAs || "a"}
            {...{
              href: rootProps.getHref(props.value), // instead of doing this, the consumer could create a proxy component like this (but should be documented): (props: {href: string} => <Link to={href} />
              to: rootProps.getHref(props.value),
            }}
          >
            {props.value}
          </Box>
        </ChakraPagination.Item>
      </ListItem>
    );
  }

  return (
    <ListItem>
      <ChakraPagination.Item asChild ref={ref} {...props}>
        <Box
          css={props.value === page ? styles.activeButton : styles.listItem}
          as={props.as || "button"}
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
  const rootProps = useRootProps();

  if (page <= 1) {
    return null;
  }
  if (rootProps.getHref) {
    return (
      <ListItem>
        <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
          <Box
            css={styles.listItem}
            aria-label={t(texts.previousPage)}
            as={rootProps.itemAs || "a"}
            {...{
              href: rootProps.getHref(props.value as number),
              to: rootProps.getHref(props.value as number),
            }}
          >
            <DropdownLeftOutline18Icon />
          </Box>
        </ChakraPagination.PrevTrigger>
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
        <Box
          css={styles.listItem}
          aria-label={t(texts.previousPage)}
          as={props.as || "button"}
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
  const rootProps = useRootProps();

  if (page >= totalPages) {
    return null;
  }
  if (rootProps.getHref) {
    return (
      <ListItem>
        <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
          <Box
            css={styles.listItem}
            aria-label={t(texts.nextPage)}
            as={rootProps.itemAs || "a"}
            {...{
              href: rootProps.getHref(props.value as number),
              to: rootProps.getHref(props.value as number),
            }}
          >
            <DropdownRightOutline18Icon css={styles.icon} />
          </Box>
        </ChakraPagination.NextTrigger>
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
        <Box
          css={styles.listItem}
          aria-label={t(texts.nextPage)}
          as={props.as || "button"}
        >
          <DropdownRightOutline18Icon css={styles.icon} />
        </Box>
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
            <PaginationEllipsis key={index} index={index} {...props} />
          ) : (
            <PaginationItem
              key={index}
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
});
