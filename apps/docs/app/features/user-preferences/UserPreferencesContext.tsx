import { createContext, useContext, useState } from "react";

export type UserType = "designer" | "developer";
export type Technology = "react" | "react-native" | "elm";
type UserPreference = "userType" | "technology";
type UserPreferences = {
  /**
   * The general type of user you are.
   * This can be used to show you the most relevant information to the right users
   **/
  userType: UserType;
  /**
   * If the user is a developer, their preferred technology will be found here.
   *
   * Note that if you set this value as a developer, then switch your viewMode to designer, then this value won't be reset.
   */ technology: Technology;
};

type UserPreferencesContextType = {
  userPreferences: UserPreferences;
  setUserPreference: (
    name: UserPreference,
    value: UserPreferences[UserPreference]
  ) => void;
};
const UserPreferencesContext = createContext<UserPreferencesContextType | null>(
  null
);

type UserPreferencesProviderProps = {
  children: React.ReactNode;
};
export function UserPreferencesProvider(props: UserPreferencesProviderProps) {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    userType: "developer",
    technology: "react",
  });
  const setUserPreference = (
    name: UserPreference,
    value: UserPreferences[UserPreference]
  ) => {
    setUserPreferences({
      ...userPreferences,
      [name]: value,
    });
  };

  return (
    <UserPreferencesContext.Provider
      value={{ userPreferences, setUserPreference }}
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
