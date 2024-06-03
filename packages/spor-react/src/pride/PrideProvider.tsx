// PrideContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface PrideContextProps {
  isPride: boolean;
  togglePride: () => void;
}

const PrideContext = createContext<PrideContextProps | undefined>(undefined);

export const PrideProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const isBrowser = typeof window !== "undefined";

  const [isPride, setIsPride] = useState<boolean>(() => {
    if (isBrowser) {
      const savedState = localStorage.getItem("isPride");
      return savedState ? JSON.parse(savedState) : false;
    }
    return false;
  });

  const togglePride = () => {
    setIsPride((prev) => {
      const newState = !prev;
      if (isBrowser) {
        localStorage.setItem("isPride", JSON.stringify(newState));
      }
      return newState;
    });
  };

  useEffect(() => {
    if (isBrowser) {
      const savedState = localStorage.getItem("isPride");
      if (savedState) {
        setIsPride(JSON.parse(savedState));
      }
    }
  }, [isBrowser]);

  return (
    <PrideContext.Provider value={{ isPride, togglePride }}>
      {children}
    </PrideContext.Provider>
  );
};

export const usePride = (): PrideContextProps => {
  const context = useContext(PrideContext);
  if (context === undefined) {
    throw new Error("usePride must be used within a PrideProvider");
  }
  return context;
};
