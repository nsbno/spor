// app/routes/api/preview-mode/disable.ts

import { redirect } from "react-router";

import { destroySession, getSession } from "~/utils/sanity/preview";

import { Route } from "./+types/disable";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
