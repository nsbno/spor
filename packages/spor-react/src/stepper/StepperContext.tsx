import React from "react";

type StepperContextType = {
  activeStep: number;
  numberOfSteps: number;
  variant: Variant;
  onClick: (clickedIndex: number) => void;
};
const StepperContext = React.createContext<StepperContextType | null>(null);

type Variant = "base" | "accent";

type StepperProviderProps = {
  /** Stepper steps */
  children: React.ReactNode;
  /** Callback whenever a stepper step is clicked */
  onClick: (clickedIndex: number) => void;
  /** The currently active step */
  activeStep: number;
  /** The amount of steps */
  numberOfSteps: number;
  /** The current variant */
  variant: Variant;
};
/**
 * Internal provider for sharing logic between stepper and stepper steps.
 */
export const StepperProvider = ({
  activeStep,
  children,
  onClick,
  numberOfSteps,
  variant,
}: StepperProviderProps) => {
  return (
    <StepperContext.Provider
      value={{ activeStep, onClick, numberOfSteps, variant }}
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
