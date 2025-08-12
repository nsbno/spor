import { chakra } from "@chakra-ui/react";
import { Box, FlexProps } from "@vygruppen/spor-react";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Link } from "react-router";

type MenuItemProps = FlexProps & {
  url: string;
  children: React.ReactNode;
  isActive?: boolean;
};
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  function MenuItem({ url, children, ...rest }, externalRef) {
    const internalRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(
      externalRef,
      () => internalRef.current as HTMLButtonElement,
    );

    const handleKeyUp: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
      if (!internalRef.current) return;
      switch (e.key) {
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

    return (
      <chakra.button
        key={url}
        {...getLinkProps({ url })}
        display="block"
        paddingY={0.5}
        paddingX={2}
        fontWeight="normal"
        backgroundColor="transparent"
        style={{ height: "auto" }}
        borderRadius="lg"
        fontSize={["mobile.xs", null, "desktop.xs"]}
        color="text"
        _hover={{ backgroundColor: "ghost.surface.hover" }}
        _active={{ backgroundColor: "ghost.surface.active" }}
        ref={internalRef}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        <Box width="100%" textAlign="left">
          {children}
        </Box>
      </chakra.button>
    );
  },
);

const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
  if (["ArrowUp", "ArrowDown"].includes(e.key)) {
    e.preventDefault();
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
