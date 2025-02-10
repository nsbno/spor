"use client"

import type { ButtonProps, TextProps } from "@chakra-ui/react"
import {
  Box,
  Button,
  Pagination as ChakraPagination,
  PaginationRoot as ChakraPaginationRoot,
  HStack,
  IconButton,
  Text,
  createContext,
  usePaginationContext,
  useSlotRecipe,
} from "@chakra-ui/react"
import * as React from "react"
import {
  HiChevronLeft,
  HiChevronRight,
  HiMiniEllipsisHorizontal,
} from "react-icons/hi2"
import { forwardRef } from "react"
import { createTexts, List, ListItem, useTranslation } from ".."


interface ButtonVariantContext {
  size: ButtonProps["size"]
  getHref?: (page: number) => string
}

const [RootPropsProvider, useRootProps] = createContext<ButtonVariantContext>({
  name: "RootPropsProvider",
})

export interface PaginationProps
  extends Omit<ChakraPagination.RootProps, "type"> {
  size?: ButtonProps["size"]
  getHref?: (page: number) => string
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
    const { size = "sm", getHref, as, ...rest } = props

    return (
      <RootPropsProvider
        value={{ size, getHref }}
        {...rest}
        >
        <ChakraPaginationRoot
          ref={ref}
          {...rest}
        >
           <List>
              <PaginationPrevTrigger />
              <PaginationItems as={as} />
              <PaginationNextTrigger />
             </List>
         </ChakraPaginationRoot>
  </RootPropsProvider>
    )
  }
)

export const PaginationEllipsis = React.forwardRef<
  HTMLDivElement,
  ChakraPagination.EllipsisProps
>(function PaginationEllipsis(props, ref) {
  const { size } = useRootProps()
  const recipe = useSlotRecipe({ key: "pagination" })
  const styles = recipe()

  return (
    <ListItem css={styles.list}>
    <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
      <Box as={props.as || "a"}>
        <HiMiniEllipsisHorizontal />
        </Box>
    </ChakraPagination.Ellipsis>
    </ListItem>
  )
})

export const PaginationItem = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.ItemProps
>(function PaginationItem(props, ref) {
  const { page, totalPages } = usePaginationContext()
  const { size } = useRootProps()
  const recipe = useSlotRecipe({ key: "pagination" })
  const styles = recipe()
  const { t } = useTranslation();

  return (
    <ListItem css={styles.list}>
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
  )
})

export const PaginationPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.PrevTriggerProps
>(function PaginationPrevTrigger(props, ref) {
  const { size } = useRootProps()
  const { previousPage, page } = usePaginationContext()
  const recipe = useSlotRecipe({ key: "pagination" })
  const styles = recipe()
  const { t } = useTranslation();

  return (
    <ListItem css={styles.list}>
    <ChakraPagination.PrevTrigger ref={ref} asChild {...props} >
      <Box
        css={page <= 1 ? { visibility: "hidden" } : styles.listItem}
        aria-label={t(texts.previousPage)} as={props.as || "a"}
      >
        <HiChevronLeft style={{ fontSize: "0.8em" }}/>
      </Box>
    </ChakraPagination.PrevTrigger>
    </ListItem >

  )
})

export const PaginationNextTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.NextTriggerProps
>(function PaginationNextTrigger(props, ref) {
  const { size } = useRootProps()
  const { page, totalPages } = usePaginationContext()
  const recipe = useSlotRecipe({ key: "pagination" })
  const styles = recipe()
  const { t } = useTranslation();

  return (
    <ListItem css={styles.list}>
    <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
      <Box
        css={page >= totalPages ? { visibility: "hidden" } : styles.listItem}
        aria-label={t(texts.nextPage)} as={props.as || "a"}

      >
        <HiChevronRight style={{ fontSize: "0.8em" }}/>
      </Box>
    </ChakraPagination.NextTrigger>
    </ListItem >
  )
})
export const PaginationItems = (props: React.HTMLAttributes<HTMLElement> & {as: React.ElementType | undefined, getHref?: (page: number) => string}) => {
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
          )
        })
      }
    </ChakraPagination.Context>
  )
}

 interface PageTextProps extends TextProps {
  format?: "short" | "compact" | "long"
} 

export const PaginationPageText = forwardRef<HTMLDivElement, PageTextProps >(
  function PaginationPageText(props, ref) {
    const { format = "compact", ...rest } = props
    const { page, totalPages, pageRange, count } = usePaginationContext()
    const content = React.useMemo(() => {
      if (format === "short") return `${page} / ${totalPages}`
      if (format === "compact") return `${page} of ${totalPages}` 
      return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`
    }, [format, page, totalPages, pageRange, count])

    return (
      <Text fontWeight="medium" ref={ref} {...rest}>
        {content}
      </Text>
    )
  }
)

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