import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  forwardRef,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { useLocation } from "react-router-dom";
import { useMenu } from "~/utils/useMenu";
import { MenuItem } from "./MenuItem";

export const ContentMenu = forwardRef((_, ref) => {
  const menu = useMenu("side-menu");
  const location = useLocation();
  let activeIndex =
    menu?.menuItems.findIndex(
      (item) =>
        item._type !== "divider" &&
        item.subItems?.some((subItem) => subItem.url === location.pathname)
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
      mt={6}
      defaultIndex={activeIndex}
    >
      {menu?.menuItems.map((item, index) => {
        if (item._type === "divider") {
          return <Divider key={index} my={2} height="1px" />;
        }
        const subItems = item.subItems?.filter((subItem) => subItem.url);
        const hasSubItems = Boolean(subItems?.length);
        return (
          <AccordionItem key={item.title}>
            <AccordionButton fontWeight="bold" ref={index === 0 ? ref : null}>
              {item.title}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pt={1} pb={0}>
              <Stack spacing={0.5}>
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
                  <Text color="dimGrey">Ingen ting her (enda)</Text>
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
});
