import { Box, forwardRef } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { Button, FlexProps } from "@vygruppen/spor-react";
import React, { useRef } from "react";

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
    const color = isActive ? "mint" : "transparent";
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
      <Button
        variant="ghost"
        key={url}
        {...getLinkProps({ url })}
        size="xs"
        //backgroundColor={isActive ? "mint" : "transparent"}
        // _hover={{
        //   backgroundColor: "mint",
        // }}
        // _focus={{
        //   backgroundColor: "mint",
        //   outline: "2px solid",
        //   outlineColor: "greenHaze",
        // }}
        // _active={{
        //   backgroundColor: "seaMist",
        // }}
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
        <Box minWidth="200px" textAlign="left">
          {children}
        </Box>
      </Button>
    );
  },
);

const getLinkProps = ({ url }: { url: string }): any => {
  if (url.match(/^https?:\/\//)) {
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
