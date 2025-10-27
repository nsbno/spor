import crypto from "node:crypto";

//import type { FilteredResponseQueryOptions } from "@sanity/client";
import { createCookieSessionStorage } from "react-router";

import type { loadQuery } from "~/utils/sanity/loader";

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
): Promise<{ preview: boolean; options: Parameters<typeof loadQuery>[2] }> {
  const previewSession = await getSession(headers.get("Cookie"));

  const preview = true; //previewSession.get("projectId") === import.meta.env.VITE_SANITY_TOKEN;

  return {
    preview,
    options: preview
      ? {
          perspective: "previewDrafts",
          stega: true,
          token:
            "sk2JbmxJTpDDsylbCG5lcJ4Hu3H8VWr7UlUuWaZreH0oCRPJ63pujQt8rZLL2wOv1aW1JL4k0u25y68Khj0O5UVXfJCLUEcPVmQ3RdcKx5JYz1ZCWm89dAQoA08sFNBwPXCbI3vi0LcGacIHqK4BRJz7Jbf3HjdM8Z4klIUVdn7CnK6VLVNZ", //sanitySecret, import.meta.env.VITE_SANITY_SECRET, import.meta.env.VITE_SANITY_SECRET,
        }
      : {
          perspective: "published",
          stega: false,
        },
  };
}

export { commitSession, destroySession, getSession, previewContext };
