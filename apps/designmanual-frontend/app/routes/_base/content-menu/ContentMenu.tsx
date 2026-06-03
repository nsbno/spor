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
import { useLocation, useNavigate, useRouteLoaderData } from "react-router";

import { loader } from "~/root";
import { getIcon } from "~/utils/getIcon";
import type { Component, Section } from "~/utils/initialSanityData.server";
import { useHeadingsMenu } from "~/utils/useHeadingsMenu";
import { useMenu } from "~/utils/useMenu";

import { MenuItem } from "./MenuItem";
import { handleExternalMenu } from "./utils";

type Props = {
  refreshKey: number;
  handleRefresh: () => void;
  ref?: React.Ref<HTMLButtonElement>;
};

export const ContentMenu = ({ refreshKey, ref }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menu = useMenu(location.pathname.slice(1));
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
    <Box role="navigation" paddingTop={3}>
      <Flex
        flexDirection="column"
        display={["flex", null, null, "none"]}
        as="ul"
      >
        {sections &&
          sections.length > 7 &&
          sections.map((section: Section) => (
            <MenuItem
              key={`${section.slug.current}_m`}
              url={`/${section.slug.current}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`}
              title={section.title}
            />
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
        paddingLeft={2}
        paddingRight={1}
        paddingTop={3}
        gap={1}
      >
        {menu?.menuItems.map((item, index) => {
          if (item._type === "divider") {
            return (
              <Separator
                key={item.url}
                marginY={2}
                size="sm"
                variant="dashed"
              />
            );
          } else if (item._type === "heading") {
            return (
              <Text
                key={item.title}
                fontSize="desktop.2xs"
                fontWeight="bold"
                color="text.subtle"
                paddingX={3}
                marginBottom={0.5}
              >
                {item.title}
              </Text>
            );
          }
          const subItems = item.subItems?.filter((subItem) => subItem.url);
          const hasSubItems = Boolean(subItems?.length);

          return (
            <AccordionItem
              key={item.title}
              value={`${item.link ?? item.title}`}
            >
              <AccordionItemTrigger
                ref={index === 0 ? ref : null}
                onClick={() => {
                  if (item.link) {
                    navigate(handleExternalMenu(item.link, isPreview));
                    return;
                  }
                }}
                fontSize="xs"
                fontWeight="normal"
              >
                {item.title}
              </AccordionItemTrigger>
              <AccordionItemContent
                paddingTop={1}
                paddingBottom={0}
                key={refreshKey}
              >
                {hasSubItems && (
                  <Stack padding={0.5} marginBottom={1} as="ul" gap={1}>
                    {subItems?.map((subItem) => (
                      <MenuItem
                        key={subItem.url}
                        url={handleExternalMenu(subItem.url ?? "", isPreview)}
                        title={subItem.title}
                      />
                    ))}
                    {!hasSubItems && (
                      <Text color="text.disabled">Nothing here (yet)</Text>
                    )}
                  </Stack>
                )}
                {headingsMenu.length > 0 && (
                  <Stack as="ul">
                    {headingsMenu.map((subItem) => (
                      <MenuItem
                        key={subItem.title}
                        url={`${location.pathname}#${subItem.id}`}
                        title={subItem.title}
                      />
                    ))}
                  </Stack>
                )}
              </AccordionItemContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      {isSpor && (
        <Stack
          paddingLeft={3}
          gap={0.5}
          display={["none", null, null, "block"]}
        >
          {menu?.components?.map((component: Component, index: number) => (
            <MenuItem
              key={index}
              url={component.url}
              title={component.title}
              badges={component.badges}
            />
          ))}
        </Stack>
      )}
    </Box>
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
  components?: Component[];
};

type MobileMenuProps = {
  sections: Section[];
  mobileMenus: MenuType[] | undefined;
  isPreview: boolean;
  ref?: React.Ref<HTMLButtonElement>;
};

const MobileMenu = ({ sections, mobileMenus, isPreview }: MobileMenuProps) => {
  const hasComponents = mobileMenus?.some(
    (menu) => menu.components && menu.components.length > 0,
  );
  return (
    <Stack gap="2" direction="column">
      {sections &&
        sections.map((section) => (
          <Expandable
            key={`${section.slug.current}_em`}
            variant="ghost"
            title={section.title}
            startElement={
              section.icon && getIcon({ iconName: section.icon, size: 24 })
            }
            collapsible
            as="ul"
          >
            {mobileMenus
              ?.find((menu) => {
                return section.slug.current === menu.relatedTo?.slug;
              })
              ?.menuItems?.map((item) => {
                if (item._type === "divider") {
                  return null;
                } else if (item._type === "heading") {
                  return null;
                } else if (item.subItems && item.subItems.length > 0) {
                  return (
                    <Expandable
                      collapsible
                      key={item.title}
                      title={item.title}
                      variant="ghost"
                      marginBottom={2}
                      marginLeft={2}
                      as="ul"
                      fontWeight="normal"
                    >
                      {item.subItems.map((subItem) => (
                        <MenuItem
                          key={subItem.url}
                          url={handleExternalMenu(subItem.url ?? "", isPreview)}
                          title={subItem.title}
                        />
                      ))}
                    </Expandable>
                  );
                }
                return (
                  <MenuItem
                    key={item.title}
                    url={handleExternalMenu(
                      item.link ?? item.url ?? "",
                      isPreview,
                    )}
                    title={item.title}
                  />
                );
              })}
            {hasComponents && section.slug?.current === "spor" && (
              <Expandable
                marginLeft={2}
                title="Components"
                variant="ghost"
                collapsible
                as="ul"
              >
                {mobileMenus
                  ?.find(
                    (menu) => section.slug.current === menu.relatedTo?.slug,
                  )
                  ?.components?.map((component: Component, index: number) => (
                    <MenuItem
                      key={index}
                      url={component.url}
                      title={component.title}
                      badges={component.badges}
                    />
                  ))}
              </Expandable>
            )}
          </Expandable>
        ))}
    </Stack>
  );
};
