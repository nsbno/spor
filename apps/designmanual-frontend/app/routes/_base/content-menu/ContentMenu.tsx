import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Button,
  Expandable,
  Flex,
  Separator,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import React, { forwardRef, useEffect, useState } from "react";
import { Link, useLocation, useRouteLoaderData } from "react-router";

import { getIcon } from "~/utils/getIcon";
import type { Section } from "~/utils/initialSanityData.server";
import { useHeadingsMenu } from "~/utils/useHeadingsMenu";
import { useMenu } from "~/utils/useMenu";

import { MenuItem } from "./MenuItem";
import { handleExternalMenu } from "./utils";

export const ContentMenu = forwardRef<
  HTMLButtonElement,
  {
    refreshKey: number;
    handleRefresh: () => void;
    closeMobileMenu: () => void;
  }
>(function ContentMenu({ refreshKey, handleRefresh, closeMobileMenu }, ref) {
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

  const mobileMenus = useRouteLoaderData("root")?.initialSanityData?.allMenus;

  const currentSection = menu?.relatedTo.slug;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const rawHeadingsMenu = useHeadingsMenu();

  const isSpor = location.pathname?.includes("spor") ?? false;
  const headingsMenu = isClient && !isSpor ? rawHeadingsMenu : [];

  const [expanded, setExpanded] = useState([location.pathname]);

  console.log("menu", closeMobileMenu);

  return (
    <React.Fragment key="content-menu">
      <Flex flexDirection={"column"} display={["flex", null, null, "none"]}>
        {sections &&
          sections.length > 7 && // Only render if sections exist
          sections.map((section: Section) => (
            <MenuItem
              key={`${section.slug.current}_m`}
              url={`/${section.slug.current}`}
            >
              {section.title}
            </MenuItem>
          ))}
        <MobileMenu
          sections={sections}
          mobileMenus={mobileMenus}
          closeMobileMenu={closeMobileMenu}
        />
      </Flex>
      <Separator marginY="2" display={["block", null, null, "none"]} />
      <Accordion
        variant="ghost"
        collapsible
        defaultValue={expanded}
        onValueChange={(e) => setExpanded(e.value)}
        key={refreshKey}
        display={["none", null, null, "block"]}
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
                url={handleExternalMenu(item.link)}
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

type MenuItemeType = {
  _type: string;
  title: string;
  menuItems?: MenuItemeType[];
  relatedTo?: {
    _type: string;
    title: string;
    slug: string;
  };
  slug?: { current: string };
};

const MobileMenu = ({
  sections,
  mobileMenus,
  closeMobileMenu,
}: {
  sections: Section[];
  mobileMenus: MenuItemeType[] | undefined;
  closeMobileMenu: () => void;
}) => {
  return (
    <Stack gap="2">
      {sections &&
        sections.map((section) => (
          <Expandable
            key={`${section.slug.current}_em`}
            variant="ghost"
            title={section.title}
            startElement={getIcon({ iconName: section.icon, size: 24 })}
            collapsible
          >
            {mobileMenus
              ?.find(
                (menu) =>
                  `side-menu-${section.slug.current}` === menu.slug?.current,
              )
              ?.menuItems?.map((item) => {
                if (item._type === "divider") {
                  return null;
                }
                return (
                  <Button key={item.title} variant="ghost" width="100%">
                    <Link
                      to={item?.slug?.current ?? "/"}
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>
                  </Button>
                );
              })}
          </Expandable>
        ))}
    </Stack>
  );
};
