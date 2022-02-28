import React from "react";

type ProgressBarContextType = {
  activeStepIndex: number;
  onClick: (clickedIndex: number) => void;
};
const ProgressBarContext = React.createContext<ProgressBarContextType | null>(
  null
);

type ProgressBarProviderProps = {
  children: React.ReactNode;
  onClick: (clickedIndex: number) => void;
  activeStepIndex: number;
};
export const ProgressBarProvider = ({
  activeStepIndex,
  children,
  onClick,
}: ProgressBarProviderProps) => {
  return (
    <ProgressBarContext.Provider value={{ activeStepIndex, onClick }}>
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
