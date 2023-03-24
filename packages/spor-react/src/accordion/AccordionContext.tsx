import React from "react";
import { AccordionProps } from "./Accordion";

type AccordionContextType = {
  size: AccordionProps["size"];
};
const AccordionContext = React.createContext<AccordionContextType | null>(null);
type AccordionProviderProps = {
  children: React.ReactNode;
  size: AccordionProps["size"];
};
export const AccordionProvider = ({
  size,
  ...props
}: AccordionProviderProps) => {
  return <AccordionContext.Provider value={{ size }} {...props} />;
};

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (context === null) {
    throw new Error(
      "useAccordionContext must be used within AccordionProvider"
    );
  }
  return context;
};
