import React, { createContext, useContext, useEffect, useState } from "react";

interface HolidayContextProps {
  holiday: "christmas" | "halloween" | "pride" | "easter";
  toggleHoliday: () => void;
}

const HolidayContext = createContext<HolidayContextProps | undefined>(
  undefined,
);

export const HolidayProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const isBrowser = typeof window !== "undefined";

  const key = "spor__isHoliday";

  const [holiday, setHoliday] = useState<
    "christmas" | "halloween" | "pride" | "easter"
  >(
    isBrowser
      ? (localStorage.getItem(key) as
          | "christmas"
          | "halloween"
          | "pride"
          | "easter") ?? "christmas"
      : "christmas",
  );

  const toggleHoliday = () => {
    const newHoliday = holiday === "christmas" ? "halloween" : "christmas";
    setHoliday(newHoliday);
    if (isBrowser) {
      localStorage.setItem(key, newHoliday);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      const storedHoliday = localStorage.getItem(key) as
        | "christmas"
        | "halloween"
        | "pride"
        | "easter";
      if (storedHoliday) {
        setHoliday(storedHoliday);
      }
    }
  }, []);

  return (
    <HolidayContext.Provider value={{ holiday, toggleHoliday }}>
      {children}
    </HolidayContext.Provider>
  );
};

export const useHoliday = (): HolidayContextProps => {
  const context = useContext(HolidayContext);
  if (context === undefined) {
    throw new Error("useHoliday must be used within a HolidayProvider");
  }
  return context;
};
