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
    },
  );

  const hasHeadings = headings.length > 1;

  return (
    <Box
      as="nav"
      aria-labelledby="toc-title"
      display={["none", null, null, "none", hasHeadings ? "flex" : "none"]}
      visibility={hasHeadings ? "visible" : "hidden"}
      flexDirection={"column"}
      transform={hasHeadings ? "translateY(0)" : "translateY(10px)"}
      transitionDuration="fast"
      transitionProperty="common"
      paddingY={8}
      paddingX={5}
      alignSelf="start"
      fontSize="sm"
      maxHeight="calc(100vh - 8rem)"
      minWidth={"20rem"}
      position="sticky"
      top="7.5rem"
      overflowY="auto"
      {...rest}
    >
      <Heading as="h2" id="toc-title" variant="sm" fontWeight="bold">
        On this page
      </Heading>
      <OrderedList spacing={0} marginLeft="0" marginTop="4" styleType="none">
        {headings.map(({ id, text, level }) => (
          <ListItem
            key={id}
            title={text}
            marginLeft={
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
