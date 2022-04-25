import { createContext, useContext, useState } from "react";
import { useFetcher } from "@remix-run/react";

export type UserPreferences = {
  /**
   * The general type of user you are.
   * This can be used to show you the most relevant information to the right users
   **/
  userType: "designer" | "developer";
  /**
   * If the user is a developer, their preferred technology will be found here.
   *
   * Note that if you set this value as a developer, then switch your userType to designer, then this value won't be reset.
   */
  technology: "react" | "react-native" | "elm";
  /**
   * If the user is a developer, their preferred tokens format will be found here.
   *
   * Note that if you set this value as a developer, then switch your userType to designer, then this value won't be reset.
   */
  tokensFormat: "javascript" | "css" | "scss" | "less";
};

type UserPreference = keyof UserPreferences;
export type UserType = UserPreferences["userType"];
export type Technology = UserPreferences["technology"];
export type TokensFormat = UserPreferences["tokensFormat"];

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

export const defaultUserPreferences: UserPreferences = {
  userType: "developer",
  technology: "react",
  tokensFormat: "javascript",
};

type UserPreferencesProviderProps = {
  children: React.ReactNode;
  userPreferencesFromCookie?: UserPreferences;
};
/**
 * Makes user preferences available in to its children.
 *
 * You should fetch the user preferences from the cookie, and pass them in as the initial value.
 *
 * You can access the user preferences with the `useUserPreferences` hook.
 */
export function UserPreferencesProvider({
  children,
  userPreferencesFromCookie = defaultUserPreferences,
}: UserPreferencesProviderProps) {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>(
    userPreferencesFromCookie
  );
  const persistUserPreferences = useFetcher();
  const setUserPreference = (
    name: UserPreference,
    value: UserPreferences[UserPreference]
  ) => {
    const updatedUserPreferences = {
      ...userPreferences,
      [name]: value,
    };
    persistUserPreferences.submit(updatedUserPreferences, {
      action: "actions/user-preferences",
      method: "post",
    });
    setUserPreferences(updatedUserPreferences);
  };

  return (
    <UserPreferencesContext.Provider
      value={{ userPreferences, setUserPreference }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
}

/** Returns the user preferences, and a way to update them. */
export function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider"
    );
  }
  return context;
}

export function isValidUserPreferences(
  userPreferences: Record<string, string | undefined>
): userPreferences is UserPreferences {
  const isValidUserType = ["developer", "designer"].includes(
    userPreferences.userType ?? ""
  );
  const isValidTechnology = ["react", "react-native", "elm"].includes(
    userPreferences.technology ?? ""
  );
  const isValidTokensFormat = ["javascript", "css", "scss", "less"].includes(
    userPreferences.tokensFormat ?? ""
  );
  return isValidUserType && isValidTechnology && isValidTokensFormat;
}
