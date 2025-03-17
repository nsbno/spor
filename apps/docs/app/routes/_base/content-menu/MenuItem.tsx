import { chakra } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { FlexProps, Box } from "@vygruppen/spor-react";
import React, { forwardRef, useRef } from "react";

type MenuItemProps = FlexProps & {
  url: string;
  children: React.ReactNode;
  isActive?: boolean;
};
/**
 * Menu item in the `ContentMenu`, and search result in the `SearchResults`.
 */
export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
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
        _focusVisible={{
          outline: "2px solid",
          outlineColor: "outline.focus",
          outlineOffset: "1px",
        }}
        ref={(el: any) => {
          if (externalRef) {
            (externalRef as any).current = el;
          }
          (internalRef as any).current = el;
        }}
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
