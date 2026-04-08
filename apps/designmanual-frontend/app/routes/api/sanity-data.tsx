import { getInitialSanityData } from "~/utils/initialSanityData.server";
import { getClient } from "~/utils/sanity/client";

import { Route } from "./+types/sanity-data";

export async function loader({ request }: Route.LoaderArgs) {
  const requestUrl = new URL(request.url);
  const mode = requestUrl.searchParams.get("mode");
  const query =
    requestUrl.searchParams.get("groq") || requestUrl.searchParams.get("query");
  const parametersRaw = requestUrl.searchParams.get("params");

  if (query) {
    let parameters: Record<string, unknown> = {};
    if (parametersRaw) {
      try {
        const parsed = JSON.parse(parametersRaw);
        if (typeof parsed === "object" && parsed !== null) {
          parameters = parsed;
        } else {
          throw new Error("Invalid params payload");
        }
      } catch {
        throw new Response("Invalid 'params' JSON", { status: 400 });
      }
    }

    const data = await getClient().fetch(query, parameters, {
      perspective: "published",
    });

    return Response.json({
      mode: "query",
      query,
      data,
    });
  }

  if (!mode || mode === "initial") {
    const data = await getInitialSanityData();
    return Response.json({
      mode: "initial",
      data,
    });
  }

  if (mode === "query") {
    throw new Response("Missing 'groq' or 'query' parameter", {
      status: 400,
    });
  }

  throw new Response("Unsupported mode. Use 'initial' or 'query'.", {
    status: 400,
  });
}
