"use client";

import React, { forwardRef, PropsWithChildren } from "react";
import { BoxProps } from "../layout";
import { breadcrumbRecipe } from "../theme/recipes/breadcrumb";
import { RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import { useColorModeValue } from "../color-mode";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbCurrentLink as ChakraBreadcrumbCurrentLink,
  BreadcrumbEllipsis as ChakraBreadcrumbEllipsis,
} from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";

type BreadcrumbVariants = RecipeVariantProps<typeof breadcrumbRecipe>;

export type BreadcrumbProps = BoxProps &
  PropsWithChildren<BreadcrumbVariants> & {
    children: React.ReactNode;
    /* "core" or "ghost". Defaults to "core". */
    variant?: "core" | "ghost";
    /* Seperator for the crumbs */
    separator?: React.ReactNode;
    /* Spacing between the seperator */
    separatorGap?: string | number;
  };

/**
 * A breadcrumb component.
 *
 * Used to create customizable breadcrumbs.
 *
 * ```tsx
 * <Breadcrumb separator=">" separatorGap="4">
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *   </BreadcrumbItem>
 *   <BreadcrumbItem isCurrentPage>
 *    <BreadcrumbCurrentLink href="/about">About</BreadcrumbCurrentLink>
 *  </BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      variant = "core",
      separator,
      separatorGap = "0.5rem",
      children,
      ...props
    },
    ref,
  ) => {
    const recipe = useRecipe({ recipe: breadcrumbRecipe });
    const styles = recipe({ variant });
    const iconColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");

    const validChildren = React.Children.toArray(children).filter(
      React.isValidElement,
    );

    return (
      <ChakraBreadcrumb.Root ref={ref} {...props}>
        <ChakraBreadcrumb.List
          display="inline-flex"
          flexWrap="nowrap"
          alignItems="center"
          gap={separatorGap}
        >
          {validChildren.map((child, index) => {
            const isLast = index === validChildren.length - 1;
            return (
              <React.Fragment key={index}> 
                <ChakraBreadcrumb.Item>
                  {!isLast ? (
                    <ChakraBreadcrumbLink css={styles.link}>
                      {child}
                    </ChakraBreadcrumbLink>
                  ) : (
                    <ChakraBreadcrumbCurrentLink css={styles.currentLink}>
                      {child}
                    </ChakraBreadcrumbCurrentLink>
                  )}
                </ChakraBreadcrumb.Item>
                {!isLast && (
                  <ChakraBreadcrumb.Separator>
                    {separator || <DropdownRightFill18Icon color={iconColor} />}
                  </ChakraBreadcrumb.Separator>
                )}
              </React.Fragment>
            );
          })}
        </ChakraBreadcrumb.List>
      </ChakraBreadcrumb.Root>
    );
  },
);

export const BreadcrumbLink = ChakraBreadcrumbLink;
export const BreadcrumbCurrentLink = ChakraBreadcrumbCurrentLink;
export const BreadcrumbEllipsis = ChakraBreadcrumbEllipsis;