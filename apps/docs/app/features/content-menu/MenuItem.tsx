import { forwardRef } from "@chakra-ui/react";
import { Flex, FlexProps } from "@vygruppen/spor-react";
import React, { useRef } from "react";
import { Link } from "@remix-run/react";

type MenuItemProps = FlexProps & {
  url: string;
  children: React.ReactNode;
  isActive?: boolean;
};
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */
export const MenuItem = forwardRef<MenuItemProps, "a">(
  ({ url, children, isActive, ...rest }, externalRef) => {
    const internalRef = useRef<HTMLAnchorElement>(null);
    const handleKeyUp = (e: React.KeyboardEvent) => {
      if (!internalRef || typeof internalRef === "function") {
        return;
      }
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
    // Stop up and down arrows from scrolling
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }
    };
    return (
      <Flex
        key={url}
        {...getLinkProps({ url })}
        px={2}
        _disabled={{
          pointerEvents: "none",
          textDecoration: "line-through",
          color: "alias.osloGrey",
          "&:hover, &:focus, &:active": {
            backgroundColor: "transparent",
            outlineColor: "transparent",
          },
        }}
        fontSize="mobile.xs"
        borderRadius="sm"
        alignItems="center"
        backgroundColor={isActive ? "alias.mint" : "transparent"}
        _hover={{
          backgroundColor: "alias.mint",
        }}
        _focus={{
          backgroundColor: "alias.mint",
          outline: "2px solid",
          outlineColor: "alias.greenHaze",
        }}
        _active={{
          backgroundColor: "alias.seaMist",
        }}
        ref={(el) => {
          if (externalRef) {
            (externalRef as any).current = el;
          }
          (internalRef as any).current = el;
        }}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {children}
      </Flex>
    );
  }
);

const getLinkProps = ({ url }: { url: string }): any => {
  if (url.match(/^https?:\/\//)) {
    return { as: "a", href: url, target: "_blank", rel: "noopener noreferrer" };
  }
  return { as: Link, to: url };
};

const getNextFocusableSibling = (
  element: HTMLElement | null
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
  element: HTMLElement | null
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
