import { createCookieSessionStorage } from "remix";
import {
  defaultUserPreferences,
  isValidUserPreferences,
  UserPreferences
} from "../features/user-preferences/UserPreferencesContext";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error(
    "SESSION_SECRET must be set as an environment variable. It can be anything, but it should be long, random and the same. Once it changes, all sessions will be invalidated."
  );
}

const userPreferencesStorage = createCookieSessionStorage({
  cookie: {
    name: "userPreferences",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

/**
 * Creates a session object that lets you access and modify the user preferences from the user preference cookie.
 */
export async function getUserPreferencesSession(request: Request) {
  const session = await userPreferencesStorage.getSession(
    request.headers.get("Cookie")
  );
  return {
    getUserPreferences: () => {
      const userPreferencesText = session.get("userPreferences");
      if (!userPreferencesText) {
        return defaultUserPreferences;
      }
      const parsedUserPreferences = JSON.parse(userPreferencesText);
      if (isValidUserPreferences(parsedUserPreferences)) {
        return parsedUserPreferences;
      }
      console.warn(
        "Invalid user preferences in cookie. Returning the default user preferences.",
        parsedUserPreferences
      );
      return defaultUserPreferences;
    },
    setUserPreferences: (userPreferences: UserPreferences) => {
      session.set("userPreferences", JSON.stringify(userPreferences));
    },
    commit: () => userPreferencesStorage.commitSession(session),
  };
}
