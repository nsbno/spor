import { chakra } from "@chakra-ui/react";
import { DropdownDownOutline30Icon } from "@vygruppen/spor-icon-react";
import { Box, Flex, FlexProps } from "@vygruppen/spor-react";
import React, { useImperativeHandle, useRef } from "react";
import { Link } from "react-router";

type MenuItemProps = FlexProps & {
  url: string;
  children: React.ReactNode;
  isActive?: boolean;
  isTopMenu?: boolean;
  ref?: React.Ref<HTMLElement>;
};
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */

export const MenuItem = ({
  url,
  children,
  isActive,
  isTopMenu,
  ref: externalRef,
  ...rest
}: MenuItemProps) => {
  const internalRef = useRef<HTMLElement>(null);

  useImperativeHandle(externalRef, () => internalRef.current as HTMLElement);

  const handleKeyUp: React.KeyboardEventHandler<HTMLButtonElement> = (
    error,
  ) => {
    if (!internalRef.current) return;
    switch (error.key) {
      case "ArrowUp": {
        getPreviousFocusableSibling(internalRef.current)?.focus();
        break;
      }
      case "ArrowDown": {
        getNextFocusableSibling(internalRef.current)?.focus();
        break;
      }
    }
  };

  const linkProps = getLinkProps({ url });
  const isExternal = !!linkProps.href;

  return (
    <chakra.button
      key={url}
      {...linkProps}
      display="block"
      paddingY={1}
      paddingX={2}
      fontWeight="normal"
      style={{ height: "auto" }}
      borderRadius="lg"
      fontSize={["mobile.xs", null, "desktop.xs"]}
      color="text"
      backgroundColor={isActive ? "ghost.surface.active" : "transparent"}
      _hover={{ backgroundColor: "ghost.surface.hover" }}
      _active={{ backgroundColor: "ghost.surface.active" }}
      ref={internalRef}
      {...rest}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="menuitem"
      type={isExternal ? undefined : "button"}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box width="100%" textAlign="left">
          {children}
        </Box>
        {isTopMenu && <DropdownDownOutline30Icon />}
      </Flex>
    </chakra.button>
  );
};

const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (
  event,
) => {
  if (["ArrowUp", "ArrowDown"].includes(event.key)) {
    event.preventDefault();
  }
};

const getLinkProps = ({ url }: { url: string }) => {
  if (/^https?:\/\//.test(url)) {
    return { as: "a", href: url, target: "_blank", rel: "noopener noreferrer" };
  }
  return { as: Link, to: url };
};

const getNextFocusableSibling = (
  element: HTMLElement | null,
): HTMLElement | null => {
  if (!element) {
    return null;
  }
  const nextSibling = element.nextElementSibling as HTMLElement;
  if (!nextSibling) {
    return null;
  }
  if (isFocusable(nextSibling)) {
    return nextSibling;
  }
  return getNextFocusableSibling(nextSibling);
};

const getPreviousFocusableSibling = (
  element: HTMLElement | null,
): HTMLElement | null => {
  if (!element) {
    return null;
  }
  const previousSibling = element.previousElementSibling as HTMLElement;
  if (!previousSibling) {
    return null;
  }
  if (isFocusable(previousSibling)) {
    return previousSibling;
  }
  return getPreviousFocusableSibling(previousSibling);
};

const isFocusable = (element: HTMLElement) => {
  return element.ariaDisabled !== "true";
};
