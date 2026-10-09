import { Box, Flex, useSlotRecipe } from "@chakra-ui/react";
import { ErrorFill24Icon } from "@vygruppen/spor-icon-react";
import { useRef } from "react";

import { TextLink } from "@/link";
import { List, ListItem } from "@/list";
import { Heading } from "@/typography";
import { slugify } from "@/util";

export const ErrorSummary = ({
  ref: externalRef,
  children,
  headingLevel = "h2",
  heading,
  ...rest
}: {
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  heading: string;
}) => {
  const recipe = useSlotRecipe({ key: "errorSummary" });
  const styles = recipe();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const ref = externalRef ?? wrapperRef;

  return (
    <Box
      css={styles.container}
      ref={ref}
      {...rest}
      aria-labelledby={slugify(heading)}
      tabIndex={-1}
    >
      {heading && (
        <Flex css={styles.heading}>
          <ErrorFill24Icon />
          <Heading as={headingLevel} variant="md" autoId ref={headingRef}>
            {heading}
          </Heading>
        </Flex>
      )}
      <List css={styles.list} gap={2}>
        {children}
      </List>
    </Box>
  );
};

export const ErrorSummaryItem = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const recipe = useSlotRecipe({ key: "errorSummary" });
  const styles = recipe();

  return (
    <ListItem css={styles.item} {...rest}>
      <TextLink href={href}>{children}</TextLink>
    </ListItem>
  );
};
