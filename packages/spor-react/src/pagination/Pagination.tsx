"use client"

import type { ButtonProps, TextProps } from "@chakra-ui/react"
import {
  Button,
  Pagination as ChakraPagination,
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

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination(props, ref) {
    const { size = "sm", getHref, ...rest } = props
    return (
      <RootPropsProvider
        value={{ size, getHref }}
      >
        <ChakraPagination.Root
          ref={ref}
          type={getHref ? "link" : "button"}
          {...rest}
        >
           <HStack>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
             </HStack>
         </ChakraPagination.Root>
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
    <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
      <span  >
        <HiMiniEllipsisHorizontal />
      </span>
    </ChakraPagination.Ellipsis>
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

  return (
    <ChakraPagination.Item ref={ref} {...props} asChild>
      <Button
        css={props.value === page ? styles.activeButton : styles.link}
        size={size} aria-label={`Side ${props.value} av ${totalPages}`}
      >
        {props.value}
      </Button>
    </ChakraPagination.Item>
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

  return (
    <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
      <IconButton
        css={page <= 1 ? { visibility: "hidden" } : styles.link}
        size={size}
        disabled={page <= 1}
      >
        <HiChevronLeft style={{ fontSize: "0.8em" }}/>
      </IconButton>
    </ChakraPagination.PrevTrigger>
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

  return (
    <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
      <IconButton
        css={page >= totalPages ? { visibility: "hidden" } : styles.link}
        size={size}
        disabled={page >= totalPages}
      >
        <HiChevronRight style={{ fontSize: "0.8em" }}/>
      </IconButton>
    </ChakraPagination.NextTrigger>
  )
})
export const PaginationItems = (props: React.HTMLAttributes<HTMLElement>) => {
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