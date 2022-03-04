import React from "react";

type ProgressBarContextType = {
  activeStep: number;
  numberOfSteps: number;
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
  activeStep: number;
  numberOfSteps: number;
};
export const ProgressBarProvider = ({
  activeStep,
  children,
  onClick,
  colorScheme,
  numberOfSteps,
}: ProgressBarProviderProps) => {
  return (
    <ProgressBarContext.Provider
      value={{ activeStep, onClick, colorScheme, numberOfSteps }}
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
