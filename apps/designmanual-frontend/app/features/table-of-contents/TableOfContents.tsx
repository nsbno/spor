import { Box, Flex, Heading, Stack, Text } from "@vygruppen/spor-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { useHeadingsMenu } from "~/utils/useHeadingsMenu";

export const TableOfContents = () => {
  const location = useLocation();
  const headings = useHeadingsMenu();
  const isSpor = location.pathname?.includes("spor") ?? false;
  const [activeId, setActiveId] = useState<string | undefined>();

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    for (const heading of headings) {
      if (heading.id) {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.observe(element);
        }
      }
    }

    return () => observer.disconnect();
  }, [headings]);

  if (isSpor || headings.length === 0) {
    return null;
  }

  return (
    <Box
      as="nav"
      position="sticky"
      top="6rem"
      width="13rem"
      minWidth="13rem"
      maxHeight="calc(100vh - 8rem)"
      overflowY="auto"
      paddingLeft={4}
    >
      <Heading as="h4" variant="xs" fontWeight="bold" marginBottom={2}>
        På denne siden
      </Heading>
      <Stack gap={0.5} borderLeftWidth="2px" borderColor="outline.default">
        {headings.map((heading) => (
          <Flex key={heading.id} alignItems="center">
            <Box
              width="2px"
              alignSelf="stretch"
              marginLeft="-2px"
              backgroundColor={activeId === heading.id ? "text" : "transparent"}
              transition="background-color 0.2s"
            />
            <Text
              as="a"
              href={`${location.pathname}#${heading.id}`}
              variant="xs"
              display="block"
              paddingY={1}
              paddingX={3}
              borderRadius="sm"
              color={activeId === heading.id ? "text" : "text.tertiary"}
              fontWeight={activeId === heading.id ? "bold" : "normal"}
              _hover={{ color: "text" }}
              transition="color 0.2s"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                const element = document.getElementById(heading.id ?? "");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  globalThis.history.replaceState(
                    null,
                    "",
                    `${location.pathname}#${heading.id}`,
                  );
                }
              }}
            >
              {heading.text}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};
