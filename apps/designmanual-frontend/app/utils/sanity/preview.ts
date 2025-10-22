// app/sanity/preview.ts

import { createCookieSessionStorage } from "react-router";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      httpOnly: true,
      name: "__sanity_preview",
      path: "/",
      secrets: ["default_secret"],
      sameSite: "lax",
    },
  });
/* 
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
} */

export { commitSession, destroySession, getSession };
