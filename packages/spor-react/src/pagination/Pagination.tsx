"use client"

import type { ButtonProps, RecipeVariantProps, TextProps } from "@chakra-ui/react"
import {
  Button,
  Pagination as ChakraPagination,
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
import { LinkButton } from "./link-button"
import { paginationSlotRecipe } from "../theme/slot-recipes/pagination"
import { forwardRef } from "react"

interface ButtonVariantMap {
  current: ButtonProps["variant"]
  default: ButtonProps["variant"]
  ellipsis: ButtonProps["variant"]
}

type PaginationVariant = "outline" | "solid" | "subtle"
type PaginationVariantProps = RecipeVariantProps<typeof paginationSlotRecipe>;


interface ButtonVariantContext {
  size: ButtonProps["size"]
  variantMap: ButtonVariantMap
  getHref?: (page: number) => string
}

const [RootPropsProvider, useRootProps] = createContext<ButtonVariantContext>({
  name: "RootPropsProvider",
})

export interface PaginationProps
  extends Omit<ChakraPagination.RootProps, "type"> {
  size?: ButtonProps["size"]
  variant?: PaginationVariant
  getHref?: (page: number) => string
}

const variantMap: Record<PaginationVariant, ButtonVariantMap> = {
  outline: { default: "ghost", ellipsis: "ghost", current: "primary" },
  solid: { default: "primary", ellipsis: "primary", current: "secondary" },
  subtle: { default: "ghost", ellipsis: "ghost", current: "tertiary" },
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination(props, ref) {
    const { size = "sm", variant = "outline", getHref, ...rest } = props
    return (
      <RootPropsProvider
        value={{ size, variantMap: variantMap[variant], getHref }}
      >
        <ChakraPagination.Root
          ref={ref}
          type={getHref ? "link" : "button"}
          {...rest}
        />
      </RootPropsProvider>
    )
  }
)

export const PaginationEllipsis = React.forwardRef<
  HTMLDivElement,
  ChakraPagination.EllipsisProps
>(function PaginationEllipsis(props, ref) {
  const { size, variantMap } = useRootProps()
  const recipe = useSlotRecipe({ key: "pagination" })
  const styles = recipe({ variant: variantMap.ellipsis })

  return (
    <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
      <Button as="span" css={styles.link} size={size}>
        <HiMiniEllipsisHorizontal />
      </Button>
    </ChakraPagination.Ellipsis>
  )
})

export const PaginationItem = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.ItemProps
>(function PaginationItem(props, ref) {
  const { page } = usePaginationContext()
  const { size, variantMap, getHref } = useRootProps()
  const recipe = useSlotRecipe({ key: "pagination" })
  const current = page === props.value
  const variant = current ? variantMap.current : variantMap.default
  const styles = recipe({ variant })

  if (getHref) {
    return (
      <LinkButton href={getHref(props.value)} css={styles.link} size={size}>
        {props.value}
      </LinkButton>
    )
  }

  return (
    <ChakraPagination.Item ref={ref} {...props} asChild>
      <Button css={styles.link} size={size}>
        {props.value}
      </Button>
    </ChakraPagination.Item>
  )
})

export const PaginationPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.PrevTriggerProps
>(function PaginationPrevTrigger(props, ref) {
  const { size, variantMap, getHref } = useRootProps()
  const { previousPage } = usePaginationContext()
  const recipe = useSlotRecipe({ key: "pagination"  })
  const styles = recipe({ variant: variantMap.default })

  if (getHref) {
    return (
      <LinkButton
        href={previousPage != null ? getHref(previousPage) : undefined}
        css={styles.link}
        size={size}
      >
        <HiChevronLeft />
      </LinkButton>
    )
  }

  return (
    <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
      <IconButton css={styles.link} size={size}>
        <HiChevronLeft />
      </IconButton>
    </ChakraPagination.PrevTrigger>
  )
})

export const PaginationNextTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.NextTriggerProps
>(function PaginationNextTrigger(props, ref) {
  const { size, variantMap, getHref } = useRootProps()
  const { nextPage } = usePaginationContext()
  const recipe = useSlotRecipe({ key: "pagination" })
  const styles = recipe({ variant: variantMap.default })

  if (getHref) {
    return (
      <LinkButton
        href={nextPage != null ? getHref(nextPage) : undefined}
        css={styles.link}
        size={size}
      >
        <HiChevronRight />
      </LinkButton>
    )
  }

  return (
    <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
      <IconButton css={styles.link} size={size}>
        <HiChevronRight />
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

export const PaginationPageText = forwardRef<HTMLDivElement, PageTextProps>(
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