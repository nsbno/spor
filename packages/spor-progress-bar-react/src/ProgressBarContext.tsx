import React from "react";

type ProgressBarContextType = {
  activeStepIndex: number;
  colorScheme: ColorScheme;
  onClick: (clickedIndex: number) => void;
};
const ProgressBarContext = React.createContext<ProgressBarContextType | null>(
  null
);

type ColorScheme = "green" | "light" | "dark";

type ProgressBarProviderProps = {
  children: React.ReactNode;
  onClick: (clickedIndex: number) => void;
  colorScheme: ColorScheme;
  activeStepIndex: number;
};
export const ProgressBarProvider = ({
  activeStepIndex,
  children,
  onClick,
  colorScheme,
}: ProgressBarProviderProps) => {
  return (
    <ProgressBarContext.Provider
      value={{ activeStepIndex, onClick, colorScheme }}
    >
      {children}
    </ProgressBarContext.Provider>
  );
};

export const useProgressBar = () => {
  const context = React.useContext(ProgressBarContext);
  if (!context) {
    throw new Error(
      "useProgressBar must be used within a ProgressBarProvider. Most likely, you forgot to wrap your ProgressBarStep in a ProgressBar component"
    );
  }
  return context;
};
