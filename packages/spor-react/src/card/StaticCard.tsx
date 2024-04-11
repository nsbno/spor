import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
/**
 * Renders a static card.
 *
 * The most basic version looks like this:
 *
 * ```tsx
 * <StaticCard colorScheme="white">
 *   Content
 * </StaticCard>
 * ```
 *
 * Cards are not interactive by default. If you specify the `as` prop to be a link or a button, you can make them work as links or buttons respectively. This will also give it a drop shadow.
 *
 * ```tsx
 * <StaticCard colorScheme="blue" as="button" onClick={handleClick}>
 *   Click for profit
 * </StaticCard>
 * <StaticCard colorScheme="green" as="a" href="https://vy.no">
 *   Go to start
 * </StaticCard>
 * ```
 */
export const StaticCard = ({ colorScheme, ...props }: any) => {
  const styles = useStyleConfig("StaticCard", { colorScheme });
  return <Box as={props.as} __css={styles} {...props} />;
};
