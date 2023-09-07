import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbProps as ChakraBreadcrumbProps,
} from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React from "react";

type BreadcrumbProps = ChakraBreadcrumbProps;
/**
 * A breadcrumb component.
 *
 * Used to create customizable breadcrumbs.
 *
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *   </BreadcrumbItem>
 *   <BreadcrumbItem isCurrentPage={true}>
 *    <BreadcrumbLink href="/about">About</BreadcrumbLink>
 *  </BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <ChakraBreadcrumb
      separator={<DropdownRightFill18Icon color="blackAlpha.400" />}
      {...props}
    />
  );
};

export const BreadcrumbItem = ChakraBreadcrumbItem;
export const BreadcrumbLink = ChakraBreadcrumbLink;
