"use client";

import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbCurrentLink as ChakraBreadcrumbCurrentLink,
  BreadcrumbEllipsis as ChakraBreadcrumbEllipsis,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbRootProps,
} from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef } from "react";
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
export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbRootProps>(
  ({ children, ...props }, ref) => {
    Breadcrumb.displayName = "Breadcrumb";
    const validChildren = React.Children.toArray(children).filter(
      React.isValidElement,
    );

    return (
      <ChakraBreadcrumb.Root ref={ref} {...props}>
        <ChakraBreadcrumb.List>
          {validChildren.map((child, index) => {
            const isLast = index === validChildren.length - 1;
            return (
              <React.Fragment key={index}>
                <ChakraBreadcrumb.Item>{child}</ChakraBreadcrumb.Item>
                {!isLast && (
                  <ChakraBreadcrumb.Separator aria-hidden="true">
                    <DropdownRightFill18Icon />
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
