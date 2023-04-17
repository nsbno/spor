import { ListItem, OrderedList } from "@chakra-ui/react";
import { Box, BoxProps, Heading } from "@vygruppen/spor-react";
import { MenuItem } from "~/routes/_base/content-menu/MenuItem";
import { useScrollSpy } from "./useScrollSpy";

export type HeadingLevelType = "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingType = {
  id: string;
  text: string;
  level: HeadingLevelType;
};

type TableOfContentProps = BoxProps & {
  headings: HeadingType[];
};

/** A table of content of the current page */
function TableOfContent(props: TableOfContentProps) {
  const { headings, ...rest } = props;
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: "0% 0% -24% 0%",
    }
  );

  const hasHeadings = headings.length > 0;

  return (
    <Box
      as="nav"
      aria-labelledby="toc-title"
      width="16rem"
      flexShrink={0}
      display={["none", "none", "block"]}
      visibility={hasHeadings ? "visible" : "hidden"}
      opacity={hasHeadings ? 1 : 0}
      transform={hasHeadings ? "translateY(0)" : "translateY(10px)"}
      transitionDuration="fast"
      transitionProperty="common"
      position="sticky"
      py={10}
      pr={4}
      pl={1}
      top="6rem"
      right="0"
      fontSize="sm"
      alignSelf="start"
      maxHeight="calc(100vh - 8rem)"
      overflowY="auto"
      sx={{ overscrollBehavior: "contain" }}
      {...rest}
    >
      <Heading as="h2" id="toc-title" variant="sm" fontWeight="bold">
        På denne siden
      </Heading>
      <OrderedList spacing={1} ml="0" mt="4" styleType="none">
        {headings.map(({ id, text, level }) => (
          <ListItem
            key={id}
            title={text}
            ml={
              Number(level.substring(1)) > 2
                ? Number(level.substring(1))
                : undefined
            }
          >
            <MenuItem
              title={text}
              url={`#${id}`}
              aria-current={id === activeId ? "location" : undefined}
              isActive={id === activeId}
            >
              {text}
            </MenuItem>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
}

export default TableOfContent;
