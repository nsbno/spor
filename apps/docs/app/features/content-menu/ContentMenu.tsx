import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
} from "@vygruppen/spor-react";
import { useLocation } from "react-router-dom";
import { isDivider, menuStructure } from "../content-menu/menuStructure";
import { MenuItem } from "./MenuItem";

export const ContentMenu = () => {
  const location = useLocation();
  const activeIndex = menuStructure.findIndex(
    (item) =>
      !isDivider(item) &&
      item.items.some((subItem) => subItem.href === location.pathname)
  );
  return (
    <Accordion
      variant="list"
      size="sm"
      allowToggle
      mt={6}
      defaultIndex={activeIndex}
    >
      {menuStructure.map((item, index) => {
        if (isDivider(item)) {
          return <Divider key={index} my={2} height="1px" />;
        }
        return (
          <AccordionItem key={item.title}>
            <AccordionButton fontWeight="bold">
              {item.title}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pt={1} pb={0}>
              {item.items.map((subItem) => (
                <MenuItem
                  key={subItem.href}
                  href={subItem.href}
                  height={6}
                  isActive={subItem.href === location.pathname}
                >
                  {subItem.title}
                </MenuItem>
              ))}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
