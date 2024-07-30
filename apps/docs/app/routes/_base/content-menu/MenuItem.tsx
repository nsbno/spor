import { Box, chakra, forwardRef, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { FlexProps } from "@vygruppen/spor-react";
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
    const hoverBackground = useColorModeValue(
      "ghost.surface.hover.light",
      "ghost.surface.hover.dark",
    );
    const activeBackground = useColorModeValue(
      "ghost.surface.active.light",
      "ghost.surface.active.dark",
    );
    const focusOutlineColor = useColorModeValue(
      "outline.focus.light",
      "outline.focus.dark",
    );
    const color = useColorModeValue("text.default.light", "text.default.dark");
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
        color={color}
        _hover={{ backgroundColor: hoverBackground }}
        _active={{ backgroundColor: activeBackground }}
        _focusVisible={{
          outline: "2px solid",
          outlineColor: focusOutlineColor,
          outlineOffset: "1px",
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
