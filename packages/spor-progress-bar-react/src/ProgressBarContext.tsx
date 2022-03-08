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
  /** Progress bar items */
  children: React.ReactNode;
  /** Callback whenever a progress bar item is clicked */
  onClick: (clickedIndex: number) => void;
  /** The current color scheme */
  colorScheme: ColorScheme;
  /** The currently active step */
  activeStep: number;
  /** The amount of steps */
  numberOfSteps: number;
};
/**
 * Internal provider for sharing logic between progress bar and progress bar items.
 */
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

/**
 * Internal hook for sharing progress bar state
 */
export const useProgressBar = () => {
  const context = React.useContext(ProgressBarContext);
  if (!context) {
    throw new Error(
      "useProgressBar must be used within a ProgressBarProvider. Most likely, you forgot to wrap your ProgressBarStep in a ProgressBar component"
    );
  }
  return context;
};
