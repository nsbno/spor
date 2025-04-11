"use client";

import React, { forwardRef } from "react";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbRootProps,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbCurrentLink as ChakraBreadcrumbCurrentLink,
  BreadcrumbEllipsis as ChakraBreadcrumbEllipsis,
} from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbRootProps>(
  ({ children, ...props }, ref) => {
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
