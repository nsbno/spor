import React from "react";

type BreadcrumContextType = {
  activeLink: number;
  numberOfLink: number;
  colorScheme: ColorScheme;
  onClick: (clickedIndex: number) => void;
};
const BreadcrumContext = React.createContext<BreadcrumContextType | null>(null);

type ColorScheme = "green" | "light" | "dark";

type BreadcrumProviderProps = {
  /** Breadcrum links */
  children: React.ReactNode;
  /** Callback whenever a Breadcrum link is clicked */
  onClick: (clickedIndex: number) => void;
  /** The current color scheme */
  colorScheme: ColorScheme;
  /** The currently active link */
  activeLink: number;
  /** The amount of links */
  numberOfLink: number;
};

export const BreadcrumProvider = ({
  activeLink,
  children,
  onClick,
  colorScheme,
  numberOfLink,
}: BreadcrumProviderProps) => {
  return (
    <BreadcrumContext.Provider
      value={{ activeLink, onClick, colorScheme, numberOfLink }}
    >
      {children}
    </BreadcrumContext.Provider>
  );
};

export const useBreadcrum = () => {
  const context = React.useContext(BreadcrumContext);
  if (!context) {
    throw new Error(
      "useBreadcrum must be used within a BreadcrumProvider. Most likely, you forgot to wrap your BreadcrumLink in a Breadcrum component"
    );
  }
  return context;
};
