// app/sanity/preview.ts

import crypto from "node:crypto";

import type { FilteredResponseQueryOptions } from "@sanity/client";
import { createCookieSessionStorage } from "react-router";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      httpOnly: true,
      name: "__sanity_preview",
      path: "/",
      sameSite: import.meta.env.DEV ? "lax" : "none",
      secrets: [crypto.randomBytes(16).toString("hex")],
      secure: !import.meta.env.DEV,
    },
  });

async function previewContext(
  headers: Headers,
): Promise<{ preview: boolean; options: FilteredResponseQueryOptions }> {
  const previewSession = await getSession(headers.get("Cookie"));

  const preview =
    previewSession.get("projectId") === process.env.PUBLIC_SANITY_PROJECT_ID;

  return {
    preview,
    options: preview
      ? {
          perspective: "previewDrafts",
          stega: true,
          token: process.env.SANITY_VIEWER_TOKEN,
        }
      : {
          perspective: "published",
          stega: false,
        },
  };
}

export { commitSession, destroySession, getSession, previewContext };
