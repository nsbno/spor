import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
  Expandable,
  Flex,
  Separator,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useRouteLoaderData } from "react-router";

import { loader } from "~/root";
import { getIcon } from "~/utils/getIcon";
import type { Section } from "~/utils/initialSanityData.server";
import { useHeadingsMenu } from "~/utils/useHeadingsMenu";
import { useMenu } from "~/utils/useMenu";

import { MenuItem } from "./MenuItem";
import { handleExternalMenu } from "./utils";

type Props = {
  refreshKey: number;
  handleRefresh: () => void;
  ref?: React.Ref<HTMLButtonElement>;
};

export const ContentMenu = ({ refreshKey, handleRefresh, ref }: Props) => {
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

  const { isPreview } = useRouteLoaderData<typeof loader>("root") || {
    isPreview: false,
  };

  const allSections =
    useRouteLoaderData("root")?.initialSanityData?.siteSettings?.topMenu || [];

  // Filter out "identitet" section in production
  // remove to line 62 when "identitet" section is ready for production
  // and use allSections insted of sections below
  const isProduction = useRouteLoaderData("root")?.env === "prod";

  const sections = allSections.filter((s: Section) => {
    if (isProduction && s.slug.current.includes("identitet")) {
      return false;
    }
    return true;
  });

  const mobileMenus = useRouteLoaderData("root")?.initialSanityData?.menus;

  const currentSection = menu?.relatedTo.slug;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const rawHeadingsMenu = useHeadingsMenu();

  const isSpor = location.pathname?.includes("spor") ?? false;
  const headingsMenu = isClient && !isSpor ? rawHeadingsMenu : [];

  const [expanded, setExpanded] = useState([location.pathname]);

  return (
    <React.Fragment key="content-menu">
      <Flex flexDirection="column" display={["flex", null, null, "none"]}>
        {sections &&
          sections.length > 7 &&
          sections.map((section: Section) => (
            <MenuItem
              key={`${section.slug.current}_m`}
              url={`/${section.slug.current}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`}
            >
              {section.title}
            </MenuItem>
          ))}
        <MobileMenu
          sections={sections}
          mobileMenus={mobileMenus}
          isPreview={isPreview}
        />
      </Flex>
      <Separator marginY="2" display={["block", null, null, "none"]} />
      <Accordion
        variant="ghost"
        collapsible
        defaultValue={expanded}
        onValueChange={(details) => setExpanded(details.value)}
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
                url={handleExternalMenu(item.link, isPreview)}
                isTopMenu={true}
                ref={index === 0 ? ref : null}
                fontWeight="bold"
                fontSize={["desktop.xs", null, "desktop.sm"]}
                paddingX="3"
                paddingY="2"
                borderRadius="sm"
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
                        url={`${subItem.url}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`}
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
};

export type SubItemsType = {
  title: string;
  url: string;
  tags?: string[];
};

export type MenuItem = {
  _type: string;
  title: string;
  link?: string;
  url?: string;
  subItems?: SubItemsType[];
};

export type MenuType = {
  _type: string;
  relatedTo?: {
    _type: string;
    title: string;
    slug: string;
  };
  title: string;
  menuItems?: MenuItem[];
  slug?: string;
  url?: string;
  link?: string;
};

type MobileMenuProps = {
  sections: Section[];
  mobileMenus: MenuType[] | undefined;
  isPreview: boolean;
  ref?: React.Ref<HTMLButtonElement>;
};

const MobileMenu = ({ sections, mobileMenus, isPreview }: MobileMenuProps) => {
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
              ?.find((menu) => {
                return section.slug.current === menu.relatedTo?.slug;
              })
              ?.menuItems?.map((item) => {
                if (item._type === "divider") {
                  return null;
                }
                if (item.subItems && item.subItems.length > 0) {
                  return (
                    <Expandable
                      collapsible
                      key={item.title}
                      title={item.title}
                      variant="ghost"
                      marginBottom={2}
                      paddingLeft={6}
                    >
                      {item.subItems.map((subItem) => (
                        <Box key={subItem.title}>
                          <Link
                            to={handleExternalMenu(
                              subItem?.url ?? "/",
                              isPreview,
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </Box>
                      ))}
                    </Expandable>
                  );
                }
                return (
                  <Box
                    as="button"
                    key={item.title}
                    width="100%"
                    textAlign="left"
                    paddingLeft={6}
                    marginBottom={2}
                    fontWeight="bold"
                  >
                    <Link to={handleExternalMenu(item?.link ?? "/", isPreview)}>
                      {item.title}
                    </Link>
                  </Box>
                );
              })}
          </Expandable>
        ))}
    </Stack>
  );
};

MobileMenu.displayName = "MobileMenu";
