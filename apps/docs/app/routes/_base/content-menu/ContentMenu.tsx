import { forwardRef } from "@chakra-ui/react";
import { useLocation } from "@remix-run/react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { useMenu } from "~/utils/useMenu";
import { MenuItem } from "./MenuItem";

export const ContentMenu = forwardRef((_, ref) => {
  const menu = useMenu("side-menu");
  const location = useLocation();
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

  return (
    <Accordion
      variant="list"
      size="sm"
      allowToggle
      marginTop={6}
      defaultIndex={activeIndex}
    >
      {menu?.menuItems.map((item, index) => {
        if (item._type === "divider") {
          return <Divider key={index} marginY={2} height="1px" />;
        }
        const subItems = item.subItems?.filter((subItem) => subItem.url);
        const hasSubItems = Boolean(subItems?.length);
        return (
          <AccordionItem key={item.title} marginY={0.5}>
            <AccordionButton fontWeight="bold" ref={index === 0 ? ref : null}>
              {item.title}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel paddingTop={1} paddingBottom={0}>
              <Stack spacing={0.5} marginBottom={1}>
                {subItems?.map((subItem) => (
                  <MenuItem
                    key={subItem.url}
                    url={subItem.url}
                    height={5}
                    isActive={subItem.url === location.pathname}
                  >
                    {subItem.title}
                  </MenuItem>
                ))}
                {!hasSubItems && (
                  <Text color="dimGrey">Nothing here (yet)</Text>
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
});
