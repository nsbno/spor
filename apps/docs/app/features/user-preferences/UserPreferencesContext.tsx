import { createContext, useContext, useState } from "react";

export type ViewMode = "designer" | "developer";
export type Technology = "react" | "react-native" | "elm";
type UserPreferencesContextType = {
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
const UserPreferencesContext = createContext<UserPreferencesContextType | null>(
  null
);

type UserPreferencesProviderProps = {
  children: React.ReactNode;
};
export function UserPreferencesProvider(props: UserPreferencesProviderProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("developer");
  const [technology, setTechnology] = useState<Technology>("react");

  return (
    <UserPreferencesContext.Provider
      value={{ viewMode, setViewMode, technology, setTechnology }}
    >
      {props.children}
    </UserPreferencesContext.Provider>
  );
}

/** Returns the user preferences, and a way to update it. */
export function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider"
    );
  }
  return context;
}
