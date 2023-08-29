import { Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { Box } from "..";
import { useBreadcrum } from "./BreadcrumContext";

type BreadcrumLinkProps = {
  linkNumber: number;
  children: React.ReactNode;
};
export const BreadcrumLink = ({ children, linkNumber }: BreadcrumLinkProps) => {
  const { activeLink, onClick, colorScheme } = useBreadcrum();
  const variant = getVariant(linkNumber!, activeLink);
  const style = useMultiStyleConfig("Breadcrum", {
    variant,
    colorScheme,
  });

  return (
    <Box __css={style.linkContainer}>
      {linkNumber > 1 && (
        <DropdownRightFill18Icon mx={5} display={["none", "block"]} />
      )}
      <Flex
        __css={style.linkButton}
        alignItems="center"
        as="button"
        type="button"
        disabled={variant === "disabled" || variant === "active"}
        onClick={() => onClick(linkNumber)}
      >
        <Box __css={(style.linkTitle, style.linkNumber)}>{children}</Box>
      </Flex>
    </Box>
  );
};

const getVariant = (linkNumber: number, activeLink: number) => {
  if (linkNumber < activeLink) {
    return "completed";
  }
  if (linkNumber === activeLink) {
    return "active";
  }
  return "disabled";
};
