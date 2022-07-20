import React, { createContext, useContext } from "react";
type DrawerContextProps = { onClose: () => void; textAlign: "left" | "center" };
const DrawerContext = createContext<DrawerContextProps | null>(null);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("All calls to useDrawer must be within a DrawerProvider.");
  }
  return context;
};

type DrawerProviderProps = {
  onClose: () => void;
  textAlign: "left" | "center";
  children: JSX.Element;
};

export const DrawerProvider = ({
  onClose,
  children,
  textAlign,
}: DrawerProviderProps) => {
  return (
    <DrawerContext.Provider value={{ onClose, textAlign }}>
      {children}
    </DrawerContext.Provider>
  );
};
