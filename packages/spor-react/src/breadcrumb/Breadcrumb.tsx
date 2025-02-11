"use client";

import React, { forwardRef, PropsWithChildren } from "react";
import { BoxProps } from "../layout";
import { breadcrumbSlotRecipe } from "../theme/slot-recipes/breadcrumb";
import { RecipeVariantProps, useSlotRecipe } from "@chakra-ui/react";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbCurrentLink as ChakraBreadcrumbCurrentLink,
  BreadcrumbEllipsis as ChakraBreadcrumbEllipsis,
} from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";

type BreadcrumbVariants = RecipeVariantProps<typeof breadcrumbSlotRecipe>;

export type BreadcrumbProps = Exclude<
  BoxProps,
  "size" | "colorPalette" | "unstyled" | "separator" | "separatorGap"
> &
  PropsWithChildren<BreadcrumbVariants> & {
    children: React.ReactNode;
    /* "core" or "ghost". Defaults to "core". */
    variant?: "core" | "ghost";
  };

/**
 * A breadcrumb component.
 *
 * Used to create customizable breadcrumbs.
 * BreadcrumbCurrentLink is used to set the last breadcrumb.
 * BreadcrumbLink is used to set the other breadcrumbs.
 * ```tsx
 * <Breadcrumb>
 *     <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *    <BreadcrumbLink href="/Breadcrumb">Breadcrumb</BreadcrumbLink>
 *    <BreadcrumbCurrentLink href="/about">About</BreadcrumbCurrentLink>
 * </Breadcrumb>
 * ```
 */
export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ variant = "core", children, ...props }, ref) => {
    const recipe = useSlotRecipe({ key: "breadcrumb" });
    const styles = recipe({ variant });

    const validChildren = React.Children.toArray(children).filter(
      React.isValidElement,
    );

    return (
      <ChakraBreadcrumb.Root ref={ref} {...props}>
        <ChakraBreadcrumb.List css={styles.list}>
          {validChildren.map((child, index) => {
            const isLast = index === validChildren.length - 1;
            return (
              <React.Fragment key={index}>
                <ChakraBreadcrumb.Item>
                  {React.cloneElement(child as React.ReactElement, {
                    css: isLast ? styles.currentLink : styles.link,
                  })}
                </ChakraBreadcrumb.Item>
                {!isLast && (
                  <ChakraBreadcrumb.Separator aria-hidden="true">
                    {<DropdownRightFill18Icon color="icon.disabled" />}
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
