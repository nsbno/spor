import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Flex,
  Separator,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import React, { forwardRef, useEffect, useState } from "react";
import { useLocation, useRouteLoaderData } from "react-router";

import type { Section } from "~/utils/initialSanityData.server";
import { useHeadingsMenu } from "~/utils/useHeadingsMenu";
import { useMenu } from "~/utils/useMenu";

import { MenuItem } from "./MenuItem";

export const ContentMenu = forwardRef<
  HTMLButtonElement,
  {
    refreshKey: number;
    handleRefresh: () => void;
  }
>(function ContentMenu({ refreshKey, handleRefresh }, ref) {
  const location = useLocation();
  const menu = useMenu(location.pathname.slice(1));
  let activeIndex =
    menu?.menuItems.findIndex(
      (item) =>
        item._type !== "divider" &&
        item.subItems?.some((subItem) => subItem.url === location.pathname),
    ) ?? 0;
  const indexOfDivider =
    menu?.menuItems.findIndex((item) => item._type === "divider") ?? 0;
  if (activeIndex >= indexOfDivider) {
    activeIndex = activeIndex - 1;
  }

  const sections =
    useRouteLoaderData("root")?.initialSanityData?.siteSettings?.topMenu || [];

  const currentSection = menu?.relatedTo.slug;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const rawHeadingsMenu = useHeadingsMenu();

  const isSpor = location.pathname?.includes("spor") ?? false;
  const headingsMenu = isClient && !isSpor ? rawHeadingsMenu : [];

  const [expanded, setExpanded] = useState([location.pathname]);

  return (
    <React.Fragment key="content-menu">
      <Flex flexDirection={"column"} display={["flex", null, null, "none"]}>
        {sections &&
          sections.map((section: Section) => (
            <MenuItem
              key={`${section.slug.current}_m`}
              url={`/${section.slug.current}`}
            >
              {section.title}
            </MenuItem>
          ))}
      </Flex>
      <Separator marginY="2" display={["block", null, null, "none"]} />
      <Accordion
        variant="ghost"
        collapsible
        defaultValue={expanded}
        onValueChange={(e) => setExpanded(e.value)}
        key={refreshKey}
      >
        {menu?.menuItems.map((item, index) => {
          if (item._type === "divider") {
            return <Separator key={item.url} marginY={2} size="sm" />;
          }
          const subItems = item.subItems?.filter((subItem) => subItem.url);
          const hasSubItems = Boolean(subItems?.length);
          const isCurrentPage = item.link === location.pathname;
          if (item.link && !isCurrentPage) {
            return (
              <MenuItem
                key={item.link}
                url={item.link}
                isTopMenu={true}
                ref={index === 0 ? ref : null}
                fontWeight={"bold"}
                fontSize={["desktop.xs", null, "desktop.sm"]}
                paddingX="3"
                paddingY="2"
                borderRadius={"sm"}
                onClick={() => {
                  setExpanded([item.link]);
                  handleRefresh();
                }}
              >
                {item.title}
              </MenuItem>
            );
          }
          return (
            <AccordionItem
              key={item.title}
              value={`${item.link ?? item.title}`}
              marginY={0.5}
            >
              <AccordionItemTrigger
                fontWeight="bold"
                ref={index === 0 ? ref : null}
                _expanded={{ backgroundColor: "bg.tertiary" }}
                onClick={() => {
                  setExpanded([item.link]);
                }}
                backgroundColor={
                  item.link === location.pathname
                    ? "bg.tertiary"
                    : "transparent"
                }
              >
                {item.title}
              </AccordionItemTrigger>
              <AccordionItemContent
                paddingTop={1}
                paddingBottom={0}
                key={refreshKey}
              >
                {hasSubItems && (
                  <Stack padding={0.5} marginBottom={1}>
                    {subItems?.map((subItem) => (
                      <MenuItem
                        key={subItem.url}
                        url={`${subItem.url}`}
                        isActive={`/${subItem.url}` === location.pathname}
                        backgroundColor={
                          `/${subItem.url}` === location.pathname
                            ? "bg.tertiary"
                            : "transparent"
                        }
                      >
                        {subItem.title}
                      </MenuItem>
                    ))}
                    {!hasSubItems && (
                      <Text color="text.disabled">Nothing here (yet)</Text>
                    )}
                  </Stack>
                )}
                {headingsMenu.length > 0 && (
                  <Stack display={["none", null, null, "block"]}>
                    {headingsMenu.map((subItem) => (
                      <MenuItem
                        key={subItem.text}
                        url={`${location.pathname}#${subItem.id}`}
                        isActive={
                          `/${currentSection}${subItem.text}` ===
                          location.pathname
                        }
                        backgroundColor={
                          `${location.pathname}#${subItem.id}` ===
                          location.pathname
                            ? "bg.tertiary"
                            : "transparent"
                        }
                        id={`${location.pathname}#${subItem.id}--${location.pathname}`}
                      >
                        {subItem.text}
                      </MenuItem>
                    ))}
                  </Stack>
                )}
              </AccordionItemContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </React.Fragment>
  );
});
