import { createContext, useContext, useState } from "react";

export type ViewMode = "designer" | "developer";
export type Technology = "react" | "react-native" | "elm";
type ViewModeContextType = {
  /**
   * The general type of user you are.
   * This can be used to show you the most relevant information to the right users
   **/
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  /**
   * If the user is a developer, their preferred technology will be found here.
   *
   * Note that if you set this value as a developer, then switch your viewMode to designer, then this value won't be reset.
   */
  technology: Technology;
  setTechnology: (technology: Technology) => void;
};
const ViewModeContext = createContext<ViewModeContextType | null>(null);

type ViewModeProviderProps = {
  children: React.ReactNode;
};
export function ViewModeProvider(props: ViewModeProviderProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("developer");
  const [technology, setTechnology] = useState<Technology>("react");

  return (
    <ViewModeContext.Provider
      value={{ viewMode, setViewMode, technology, setTechnology }}
    >
      {props.children}
    </ViewModeContext.Provider>
  );
}

/** Returns the view mode and a way to change it.
 *
 * As a rule of thumb - avoid showing technical details to designers and design details to developers.
 */
export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}
