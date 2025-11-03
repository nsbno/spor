import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { redirect } from "react-router";

import { getClient } from "~/utils/sanity/client";
import { commitSession, getSession } from "~/utils/sanity/preview";

import { Route } from "./+types/enable";

export const loader = async ({ request }: Route.LoaderArgs) => {
  if (!import.meta.env.VITE_SANITY_SECRET) {
    throw new Response("Preview mode missing token", { status: 401 });
  }

  const clientWithToken = getClient().withConfig({
    token: import.meta.env.VITE_SANITY_SECRET,
  });

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  );

  if (!isValid) {
    throw new Response(`Invalid secret`, { status: 401 });
  }

  const session = await getSession(request.headers.get("Cookie"));
  await session.set("projectId", import.meta.env.VITE_SANITY_TOKEN);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
