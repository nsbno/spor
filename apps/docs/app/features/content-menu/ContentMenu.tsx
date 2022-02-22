import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
} from "@vygruppen/spor-react";
import { isDivider, menuStructure } from "../content-menu/menuStructure";
import { MenuItem } from "./MenuItem";

export const ContentMenu = () => {
  return (
    <Accordion variant="list" size="sm" allowToggle mt={6}>
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
                <MenuItem key={subItem.href} href={subItem.href} height={6}>
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
