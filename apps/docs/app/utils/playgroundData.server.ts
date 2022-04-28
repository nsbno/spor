import { createCookieSessionStorage } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error(
    "SESSION_SECRET must be set as an environment variable. It can be anything, but it should be long, random and the same. Once it changes, all sessions will be invalidated."
  );
}

const playgroundDataSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "playgroundData",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/lekegrind",
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
});

/**
 * Creates a session object that lets you access and modify the persisted playground code from the user preference cookie.
 */
export async function getPlaygroundDataSession(request: Request) {
  const session = await playgroundDataSessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return {
    getPlaygroundData: () => {
      return session.get("playgroundData") ?? "";
    },
    setPlaygroundData: (playgroundData: string) => {
      session.set("playgroundData", playgroundData);
    },
    commit: () => playgroundDataSessionStorage.commitSession(session),
  };
}
