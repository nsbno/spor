import React from "react";

type StepperContextType = {
  activeStep: number;
  numberOfSteps: number;
  colorScheme: ColorScheme;
  onClick: (clickedIndex: number) => void;
};
const StepperContext = React.createContext<StepperContextType | null>(null);

type ColorScheme = "green" | "light" | "dark";

type StepperProviderProps = {
  /** Stepper steps */
  children: React.ReactNode;
  /** Callback whenever a stepper step is clicked */
  onClick: (clickedIndex: number) => void;
  /** The current color scheme */
  colorScheme: ColorScheme;
  /** The currently active step */
  activeStep: number;
  /** The amount of steps */
  numberOfSteps: number;
};
/**
 * Internal provider for sharing logic between stepper and stepper steps.
 */
export const StepperProvider = ({
  activeStep,
  children,
  onClick,
  colorScheme,
  numberOfSteps,
}: StepperProviderProps) => {
  return (
    <StepperContext.Provider
      value={{ activeStep, onClick, colorScheme, numberOfSteps }}
    >
      {children}
    </StepperContext.Provider>
  );
};

/**
 * Internal hook for sharing stepper state
 */
export const useStepper = () => {
  const context = React.useContext(StepperContext);
  if (!context) {
    throw new Error(
      "useStepper must be used within a StepperProvider. Most likely, you forgot to wrap your StepperStep in a Stepper component"
    );
  }
  return context;
};
