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
import { forwardRef } from "react";
import { useLocation, useRouteLoaderData } from "react-router";

import type { Section } from "~/utils/initialSanityData.server";
import { useMenu } from "~/utils/useMenu";

import { MenuItem } from "./MenuItem";

export const ContentMenu = forwardRef<HTMLButtonElement>(
  function ContentMenu(_, ref) {
    const location = useLocation();
    const sections =
      useRouteLoaderData("root")?.initialSanityData?.siteSettings?.topMenu ||
      [];

    const defaultSection = sections.find(
      (section: Section) => section.default === true,
    )?.slug.current;

    const current =
      location.pathname === "/" ? `/${defaultSection}` : location.pathname;

    const menu = useMenu(location.pathname.slice(1), defaultSection);

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

    const currentSection = menu?.relatedTo.slug;

    return (
      <>
        <Flex flexDirection={"column"} display={["flex", null, null, "none"]}>
          {sections &&
            sections.map((section: Section) => (
              <MenuItem
                key={section._id}
                url={`/${section.slug.current}`}
                isActive={current === `/${section.slug.current}`}
              >
                {section.title}
              </MenuItem>
            ))}
        </Flex>
        <Separator marginY="2" display={["block", null, null, "none"]} />

        <Accordion
          variant="ghost"
          collapsible
          defaultValue={[location.pathname]}
        >
          {menu?.menuItems.map((item, index) => {
            if (item._type === "divider") {
              return <Separator key={index} marginY={2} size="sm" />;
            }
            const subItems = item.subItems?.filter((subItem) => subItem.url);
            const hasSubItems = Boolean(subItems?.length);
            return (
              <AccordionItem key={item.title} value={item.title} marginY={0.5}>
                <AccordionItemTrigger
                  fontWeight="bold"
                  ref={index === 0 ? ref : null}
                >
                  {item.title}
                </AccordionItemTrigger>
                <AccordionItemContent paddingTop={1} paddingBottom={0}>
                  <Stack padding={0.5} marginBottom={1}>
                    {subItems?.map((subItem) => (
                      <MenuItem
                        key={subItem.url}
                        url={`${currentSection}${subItem.url}`}
                        isActive={subItem.url === location.pathname}
                      >
                        {subItem.title}
                      </MenuItem>
                    ))}
                    {!hasSubItems && (
                      <Text color="dimGrey">Nothing here (yet)</Text>
                    )}
                  </Stack>
                </AccordionItemContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </>
    );
  },
);
