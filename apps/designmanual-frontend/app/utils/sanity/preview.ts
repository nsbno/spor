// app/sanity/preview.ts

import type { FilteredResponseQueryOptions } from "@sanity/client";
import { createCookieSessionStorage } from "react-router";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      httpOnly: true,
      name: "__sanity_preview",
      path: "/",
      sameSite: "none", //!import.meta.env.DEV ? "none" : "lax",
      //secrets:  "default_secret" //[process.env.SANITY_COOKIE_SECRET || "default_secret"],
      //secure: !import.meta.env.DEV,
    },
  });

async function previewContext(
  headers: Headers,
): Promise<{ preview: boolean; options: FilteredResponseQueryOptions }> {
  const previewSession = await getSession(headers.get("Cookie"));

  const preview =
    //previewSession.get("projectId") === process.env.VITE_SANITY_TOKEN; // <--- Uncomment this line to enable project ID check
    true;

  return {
    preview,
    options: preview
      ? {
          perspective: "previewDrafts",
          stega: true,
          token: process.env.VITE_SANITY_SECRET,
        }
      : {
          perspective: "published",
          stega: false,
        },
  };
}

export { commitSession, destroySession, getSession, previewContext };
